#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: |
  Continuation: redesign Blog page to match synamedia.com/resources/blog (clean uniform card grid)
  while keeping current site's color/typography. Rebuild About page using a 10-section spec
  (Hero, Problem, What We Do, Why SYNC, How It Works, Mission, Trust, Values, Founder, Final CTA).
  Replace "SyncMedia" / "Sync Media" with "SYNC" globally. Add a "What best describes you?"
  dropdown to the Contact form with options: Advertiser, Agency, Broadcaster / Publisher, Other.

backend:
  - task: "Contact form accepts new describes_you field"
    implemented: true
    working: true
    file: "backend/server.py"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: true
        agent: "main"
        comment: "Added optional describes_you field on ContactCreate and Contact models. Verified via curl POST /api/contact — server returns persisted record including describes_you=Advertiser. FastAPI title and root message also renamed to SYNC."

frontend:
  - task: "Global brand rename SyncMedia/Sync Media -> SYNC"
    implemented: true
    working: "NA"
    file: "frontend/src/components/Seo.jsx, Navbar.jsx, Footer.jsx; pages/Home.jsx, Blog.jsx, BlogPost.jsx, Methodology.jsx, Solutions.jsx; data/posts.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "grep shows zero remaining references to SyncMedia/Sync Media. Footer logo/copyright, Navbar alt, Seo metadata, all hero overlines and body copy updated to SYNC. Email rebranded to hello@sync.io."

  - task: "Blog page redesign (Synamedia-style clean grid)"
    implemented: true
    working: "NA"
    file: "frontend/src/pages/Blog.jsx; frontend/src/index.css"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Replaced asymmetric featured + side card layout with: minimal hero (breadcrumb Home > Resources > Blog + clean 'Blog' h1 + sub), one large featured article block, filter strip, then uniform 3-column ArticleCard grid (cover image, date label, title, excerpt, Read More). Mobile collapses to 1 col, tablet to 2 col. Reuses existing post-cover CSS so colors match the rest of the site."

  - task: "About page rebuild (10 sections per spec)"
    implemented: true
    working: "NA"
    file: "frontend/src/pages/About.jsx; frontend/src/index.css"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Rebuilt About.jsx with all 10 sections: 1) Hero with gradient 'what media really delivers' + dual CTA, 2) Problem 3-col grid, 3) What We Do split with animated cross-screen visualisation, 4) Why SYNC 6-card differentiation grid, 5) Data → Measurement → Decisions 3-step, 6) Centered Mission, 7) Trust grid + Industries chip row (FMCG · Ecommerce · Auto · Finance · Media · Apps), 8) 5-column Values grid (Accuracy, Transparency, Innovation, Privacy, Impact), 9) Founder block + Anubhav Sharma quote, 10) Final dark CTA. Added ~400 lines of CSS keyed off existing tokens (--bg, --fg, --accent, --line) so theme stays consistent."

  - task: "Contact form: 'What best describes you?' dropdown"
    implemented: true
    working: "NA"
    file: "frontend/src/pages/Contact.jsx"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Added describes_you state + select with options Advertiser, Agency, Broadcaster / Publisher, Other. Posts as 'describes_you' to /api/contact. Verified options render in DOM and backend persists value."

  - task: "Client logo marquee on Home (replaces Google/Meta/YouTube/JioCinema strip)"
    implemented: true
    working: "NA"
    file: "frontend/src/components/ClientMarquee.jsx; frontend/src/pages/Home.jsx; frontend/src/index.css"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Built reusable ClientMarquee with 52 unique deduplicated brand names (Havells, Nestle, Kotak Bank, HDFC MF, Zydus, Amazon, ITC, JioHotstar, Apple, Coke, etc.). Two opposing CSS-only infinite marquees (50s/60s loops) with pause-on-hover, edge fades, dot-styled chips. Replaces the old static Google/Meta/YouTube/JioCinema row on Home. Reused on Case Studies hero with variant='compact'. Honors prefers-reduced-motion."

  - task: "FAQ section on Home"
    implemented: true
    working: "NA"
    file: "frontend/src/components/FAQ.jsx; frontend/src/pages/Home.jsx; frontend/src/index.css"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Built accessible accordion FAQ component with smooth max-height animation, plus->cross icon rotation, only-one-open behaviour, aria-expanded/aria-hidden. 5 questions provided by user. Placed on Home page just before the final CTA — highest visibility for visitor questions before conversion. Verified accordion toggles via screenshot."

  - task: "Case Studies page: animations + count-up KPIs + rich cards"
    implemented: true
    working: "NA"
    file: "frontend/src/pages/CaseStudies.jsx; frontend/src/index.css"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Full rebuild: 1) Hero with gradient 'beyond delivery' headline + 4 stat counters (60+ brands, 12+ industries, 1.2B+ impressions, 98% renewal). 2) Embedded ClientMarquee. 3) Industry filter strip (All/FMCG/Commerce/Broadcaster/Agency/App). 4) Rich case-cards with gradient covers (accent-based), large industry-initial glyph, animated count-up KPI strip, Challenge/Key finding/Impact dl, hover lift+glow. First card spans full width as featured. 5) Outcomes band (20-30% reach overstatement, 15-25% frequency waste, 2-4x signal). 6) Dark CTA. CountUp uses IntersectionObserver to trigger on scroll-in. All animations respect prefers-reduced-motion."

  - task: "Blog cards with relevant high-quality images"
    implemented: true
    working: "NA"
    file: "frontend/src/data/posts.js; frontend/src/pages/Blog.jsx; frontend/src/pages/BlogPost.jsx; frontend/src/index.css"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Sourced 12 relevant editorial images via vision_expert_agent and added image field to all 12 blog posts: cricket (IPL), neural network (AI), Netflix smart TV (CTV), Big Brand Sale neon (retail), analytics dashboard (currency), wooden blocks (frequency waste), TV control room (single-source), network nodes (deduplication), market chart (incremental), laptop dashboard (platform reporting), magnifying glass (search behavior), TV studio (broadcasters). Updated PostCover and ArticleHero to render images with a layered treatment: lazy-loaded image, dark-bottom shade for tag/title contrast, accent radial tint blended on top, glassy backdrop-blur tag chip. On card hover, image scales 1.06 with saturation boost. Falls back to gradient cover when post.image is absent."

metadata:
  created_by: "main_agent"
  version: "1.1"
  test_sequence: 0
  run_ui: false

test_plan:
  current_focus:
    - "Client logo marquee on Home (replaces Google/Meta/YouTube/JioCinema strip)"
    - "FAQ section on Home"
    - "Case Studies page: animations + count-up KPIs + rich cards"
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

agent_communication:
  - agent: "main"
    message: "Round 2 complete. Replaced static Google/Meta/YouTube/JioCinema strip with full ClientMarquee (52 dedup'd brands, two opposing rows). Added FAQ accordion on Home before final CTA — verified accordion opens/closes. Rebuilt CaseStudies with hero stat counters, embedded marquee, industry filter, animated count-up KPIs on each rich card, hover lift+glow with accent colors, outcomes band. All lints pass. Manual screenshots show counts animating (e.g., featured card mid-animation showing 27%/15%/3x climbing toward 38%/22%/4x), marquee scrolling, FAQ accordion opening. Awaiting user direction on automated frontend testing."
