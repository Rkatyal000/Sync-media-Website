"""
SyncMedia backend API tests.
Covers: root, contact (public create + admin list), newsletter (dedupe + admin list), auth gating.
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ["REACT_APP_BACKEND_URL"].rstrip("/") if os.environ.get("REACT_APP_BACKEND_URL") else None
# Fall back to reading frontend/.env if env var not exported in test shell
if not BASE_URL:
    try:
        with open("/app/frontend/.env") as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                    break
    except Exception:
        pass

ADMIN_TOKEN = "syncmedia-admin-2026"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture
def admin_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json", "x-admin-token": ADMIN_TOKEN})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root(self, client):
        r = client.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "SyncMedia API"
        assert data.get("service") == "syncmedia"


# ---------- Contact ----------
class TestContact:
    def test_create_contact_valid(self, client):
        payload = {
            "name": "TEST User",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "company": "TEST Co",
            "role": "Tester",
            "interest": "general",
            "message": "TEST message from pytest",
        }
        r = client.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "created_at" in data
        assert data["email"] == payload["email"]
        assert data["name"] == payload["name"]
        assert data["message"] == payload["message"]

    def test_contact_invalid_email(self, client):
        r = client.post(f"{BASE_URL}/api/contact", json={"name": "x", "email": "not-email", "message": "hi"})
        assert r.status_code == 422

    def test_list_contacts_requires_admin(self, client):
        r = client.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 401

    def test_list_contacts_wrong_token(self, client):
        r = client.get(f"{BASE_URL}/api/contact", headers={"x-admin-token": "bad"})
        assert r.status_code == 401

    def test_list_contacts_admin_ok(self, admin_client, client):
        # Ensure at least one contact exists
        email = f"test_admin_{uuid.uuid4().hex[:6]}@example.com"
        create = client.post(f"{BASE_URL}/api/contact", json={
            "name": "TEST Admin Listed",
            "email": email,
            "message": "TEST admin list",
        })
        assert create.status_code == 200
        r = admin_client.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        assert any(row.get("email") == email for row in rows)


# ---------- Newsletter ----------
class TestNewsletter:
    def test_subscribe_and_dedupe(self, client):
        email = f"test_news_{uuid.uuid4().hex[:8]}@example.com"
        r1 = client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
        assert r1.status_code == 200, r1.text
        d1 = r1.json()
        assert "id" in d1
        assert d1["email"] == email

        # Re-submit same email => same id (dedupe)
        r2 = client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
        assert r2.status_code == 200
        d2 = r2.json()
        assert d2["id"] == d1["id"], f"Expected dedupe, got {d1['id']} vs {d2['id']}"

    def test_newsletter_invalid_email(self, client):
        r = client.post(f"{BASE_URL}/api/newsletter", json={"email": "not-an-email"})
        assert r.status_code == 422

    def test_list_subscribers_requires_admin(self, client):
        r = client.get(f"{BASE_URL}/api/newsletter")
        assert r.status_code == 401

    def test_list_subscribers_admin_ok(self, admin_client, client):
        email = f"test_sublist_{uuid.uuid4().hex[:6]}@example.com"
        client.post(f"{BASE_URL}/api/newsletter", json={"email": email})
        r = admin_client.get(f"{BASE_URL}/api/newsletter")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        assert any(row.get("email") == email for row in rows)
