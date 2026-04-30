from fastapi import FastAPI, APIRouter, Header, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

app = FastAPI(title="SYNC API")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    role: Optional[str] = None
    interest: Optional[str] = None
    describes_you: Optional[str] = None
    message: str


class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    role: Optional[str] = None
    interest: Optional[str] = None
    describes_you: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class SubscribeCreate(BaseModel):
    email: EmailStr


class Subscriber(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Helpers ----------
def _require_admin(x_admin_token: Optional[str]):
    expected = os.environ.get("ADMIN_TOKEN")
    if not expected or x_admin_token != expected:
        raise HTTPException(status_code=401, detail="Unauthorized")


def _to_doc(model: BaseModel) -> dict:
    doc = model.model_dump()
    for k, v in list(doc.items()):
        if isinstance(v, datetime):
            doc[k] = v.isoformat()
    return doc


def _from_doc(doc: dict) -> dict:
    d = {k: v for k, v in doc.items() if k != "_id"}
    for key in ("created_at", "timestamp"):
        if key in d and isinstance(d[key], str):
            try:
                d[key] = datetime.fromisoformat(d[key])
            except ValueError:
                pass
    return d


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "SYNC API", "service": "sync"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    await db.status_checks.insert_one(_to_doc(obj))
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    return [StatusCheck(**_from_doc(r)) for r in rows]


@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    obj = Contact(**payload.model_dump())
    await db.contacts.insert_one(_to_doc(obj))
    return obj


@api_router.get("/contact", response_model=List[Contact])
async def list_contacts(x_admin_token: Optional[str] = Header(default=None)):
    _require_admin(x_admin_token)
    rows = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Contact(**_from_doc(r)) for r in rows]


@api_router.post("/newsletter", response_model=Subscriber)
async def subscribe(payload: SubscribeCreate):
    existing = await db.subscribers.find_one({"email": payload.email}, {"_id": 0})
    if existing:
        return Subscriber(**_from_doc(existing))
    obj = Subscriber(email=payload.email)
    await db.subscribers.insert_one(_to_doc(obj))
    return obj


@api_router.get("/newsletter", response_model=List[Subscriber])
async def list_subscribers(x_admin_token: Optional[str] = Header(default=None)):
    _require_admin(x_admin_token)
    rows = await db.subscribers.find({}, {"_id": 0}).sort("created_at", -1).to_list(5000)
    return [Subscriber(**_from_doc(r)) for r in rows]


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
