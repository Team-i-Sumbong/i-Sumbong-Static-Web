# UI Design Reference

This document summarizes the HTML pages in the repository and records the main size, color, and placement decisions so the UI can be recreated in Java.

## Core Layout Systems

### 1. Resident and Admin Dashboards
- Viewport structure: fixed top bar plus fixed left sidebar plus scrolling content area on the right.
- Top bar size: `68px` height, full width, white panel background `#ffffff`, bottom border `#d8e0ef`.
- Sidebar size: `230px` width, fixed under the top bar, light blue background `#f8faff`.
- Content position: starts to the right of the sidebar with `24px` page padding.
- Main colors: `#f4f6fb`, `#ffffff`, `#eef2fa`, `#133b86`, `#1c2740`, `#61708b`, `#d8e0ef`.
- Core radius/shadow: `14px` radius and `0 10px 28px rgba(19, 59, 134, 0.08)` shadow.
- Typography: `Montserrat`, `32px` page titles, `34px` metric values, `11px` uppercase labels.
- Java translation: use a fixed north header panel, fixed west navigation panel, and a scrollable center container.

### 2. Report Window Tabs
- Purpose: email-style independent tabs/windows for composing or reviewing reports.
- Shell position: centered with `min(840px, 100%)` max width and `24px` outer padding.
- Visual style: same dashboard colors with a softer vertical background and smaller working frame.
- Java translation: recreate as child windows, detachable tabs, or internal frames.

### 3. Shared Login and Create Account
- Layout: two-column shell with intro panel on the left and form card on the right.
- Content width: `min(1120px, 92%)`.
- Main colors: `#102e73`, `#0a1d48`, `#f2b705`, `#f5f7fb`, `#d8dfec`.
- Java translation: use split panels with a stronger info panel and a simpler form panel.

### 4. Promotional Pages
- Layout: sticky top bar, centered content containers, long vertical sections.
- Container width: `min(1120px, 92%)`.
- Hero section: near full-height with blue gradient background and white text.
- Main colors: `#102e73`, `#0a1d48`, `#f2b705`, `#172033`, `#576074`.

### 5. Legacy Draft Pages
- Older visual references only. The active Java basis should come from `resident-dashboard/` and `admin-dashboard/`.

## HTML Inventory

| Path | Title | Size | Family | Position Summary |
|---|---|---:|---|---|
| `admin-dashboard\announcements.html` | Admin Announcements  /  i-Sumbong | 2.1 KB | Admin Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `admin-dashboard\dashboard.html` | Admin Dashboard  /  i-Sumbong | 5.9 KB | Admin Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `admin-dashboard\reports.html` | Admin Reports  /  i-Sumbong | 4.4 KB | Admin Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `admin-dashboard\report-view-window.html` | Open Report  /  i-Sumbong | 2.9 KB | Admin Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `admin-dashboard\settings.html` | Admin Settings  /  i-Sumbong | 2.3 KB | Admin Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `index.html` | i-Sumbong | 0.4 KB | Root | Redirect/root page |
| `login-and-create-account\create-account.html` | Create Account  /  i-Sumbong | 10.3 KB | Shared Auth | Two-column split shell, sticky top bar, centered form card |
| `login-and-create-account\log-in.html` | Login  /  i-Sumbong | 7.2 KB | Shared Auth | Two-column split shell, sticky top bar, centered form card |
| `old-draft-ui-dashboard\cookies.html` | Document | 0.5 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\create-account.html` | Create Account - i-Sumbong | 9.1 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\dashboard.html` | Barangay Dashboard  /  i-Sumbong | 10.3 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\my-reports.html` | My Reports  /  i-Sumbong | 11 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\privacy.html` | Document | 0.5 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\report-category.html` | i-Sumbong  /  Submit Report | 7.3 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\report-details.html` | i-Sumbong  /  Submit Report - Step 2 | 7.8 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\report-location.html` | i-Sumbong  /  Submit Report - Location | 7 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\report-review.html` | i-Sumbong  /  Submit Report  | 10 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\resident-dashboard.html` | Resident Dashboard  /  i-Sumbong | 6.6 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\submission.html` | Report Submitted - i-Sumbong | 4 KB | Legacy Draft | Legacy custom layout, reference only |
| `old-draft-ui-dashboard\terms.html` | Document | 0.5 KB | Legacy Draft | Legacy custom layout, reference only |
| `promotional-page\index.html` | i-Sumbong | 14.6 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\portfolio\aaron-portfolio.html` | Aaron  /  Portfolio  /  i-Sumbong | 10.5 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\portfolio\ajhay-portfolio.html` | Ajhay  /  Portfolio  /  i-Sumbong | 10.4 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\portfolio\angela-portfolio.html` | Angela  /  Portfolio  /  i-Sumbong | 10.3 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\portfolio\lehi-gomez-portfolio.html` | Lehi Gomez  /  Portfolio  /  i-Sumbong | 14.2 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\portfolio-placeholder.html` | Portfolio Coming Soon  /  i-Sumbong | 1 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\privacy.html` | Privacy Policy  /  i-Sumbong | 6.6 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\team.html` | Developers  /  i-Sumbong | 7.8 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `promotional-page\terms.html` | Terms  /  i-Sumbong | 6.7 KB | Promotional | Centered content containers, sticky top bar, long vertical sections |
| `resident-dashboard\announcements.html` | Resident Announcements  /  i-Sumbong | 1.9 KB | Resident Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `resident-dashboard\dashboard.html` | Resident Dashboard  /  i-Sumbong | 4.8 KB | Resident Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `resident-dashboard\report-compose-window.html` | Compose Report  /  i-Sumbong | 3.2 KB | Resident Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `resident-dashboard\report-form.html` | Resident Report Form  /  i-Sumbong | 2.6 KB | Resident Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `resident-dashboard\reports.html` | Resident Reports  /  i-Sumbong | 3.5 KB | Resident Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `resident-dashboard\settings.html` | Resident Settings  /  i-Sumbong | 2.3 KB | Resident Dashboard | Fixed top bar, fixed left sidebar, right content canvas |
| `shared\html\login.html` | Login  /  i-Sumbong | 1.8 KB | Legacy Shared | Single centered card |
## Java Build Priorities

- Highest priority basis: `resident-dashboard/dashboard.html`, `resident-dashboard/reports.html`, `resident-dashboard/report-compose-window.html`, `admin-dashboard/dashboard.html`, `admin-dashboard/reports.html`, `admin-dashboard/report-view-window.html`
- Shared auth basis: `login-and-create-account/log-in.html`, `login-and-create-account/create-account.html`
- Marketing/reference only: `promotional-page/*`, `old-draft-ui-dashboard/*`, `shared/html/login.html`

## Recommended Java Mapping

- Main shell: one top bar panel, one left navigation panel, one center content panel using white rounded cards.
- Report opening workflow: resident opens compose in its own tab; admin opens report details in its own tab.
- Keep text lengths constrained in the compose/review windows to match the static prototype.