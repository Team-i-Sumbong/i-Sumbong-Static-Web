# Java UI Handoff Spec

This document is the source-of-truth handoff for aligning the separate Java application with the current active web prototype in this repository.

Scope covered:
- `landing-page/`
- `app/auth/`
- `app/admin/`
- `app/resident/`

Out of scope as a source of truth:
- `old-draft-ui-dashboard/`

## 1. Project UI Overview

The current product UI is built around one shared visual language:
- strong brand blue as the primary action color
- warm yellow as the accent/CTA color
- white or near-white card surfaces over very light blue-gray page backgrounds
- Montserrat for headings, body, labels, and controls
- rounded panels/cards with soft blue-tinted borders and shadows
- Google Material Symbols Outlined as the icon system

There are four page families:
- `landing-page`: marketing/product story pages
- `app/auth`: account entry pages that visually match the landing page
- `app/admin`: staff/admin dashboard and operations views
- `app/resident`: resident dashboard and reporting views

The Java app should treat these as one product family, not four separate design systems.

## 2. Source Of Truth Files

Use these files as the canonical references when rebuilding or restyling the Java repo.

### Landing
- [landing-page/index.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/index.html)
- [landing-page/styles/style.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/styles/style.css)
- [landing-page/developers.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/developers.html)
- [landing-page/privacy.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/privacy.html)
- [landing-page/terms.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/terms.html)

### Auth
- [app/auth/create-account.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/create-account.html)
- [app/auth/log-in.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/log-in.html)
- [app/auth/styles/create-account.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/styles/create-account.css)
- [app/auth/styles/log-in.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/styles/log-in.css)

### Admin
- [app/admin/dashboard.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/dashboard.html)
- [app/admin/reports.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/reports.html)
- [app/admin/report-view-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/report-view-window.html)
- [app/admin/announcements.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/announcements.html)
- [app/admin/manage-users.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/manage-users.html)
- [app/admin/settings.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/settings.html)
- [app/admin/profile.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/profile.html)
- [app/admin/styles/styles.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/styles/styles.css)

### Resident
- [app/resident/dashboard.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/dashboard.html)
- [app/resident/reports.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/reports.html)
- [app/resident/report-form.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-form.html)
- [app/resident/report-compose-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-compose-window.html)
- [app/resident/report-view-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-view-window.html)
- [app/resident/announcements.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/announcements.html)
- [app/resident/settings.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/settings.html)
- [app/resident/profile.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/profile.html)
- [app/resident/styles/styles.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/styles/styles.css)

## 3. Design Tokens

## 3.1 Landing + Auth Tokens

Canonical file:
- [landing-page/styles/style.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/styles/style.css)

Primary tokens:

```css
--surface: #f5f7fb;
--surface-soft: #eef2f9;
--surface-story: #ffffff;
--surface-card: #ffffff;
--text: #172033;
--text-muted: #576074;
--primary: #092985;
--primary-dark: #0a1d48;
--accent: #f2b705;
--accent-soft: #fff6d8;
--outline: #d8dfec;
--shadow-sm: 0 10px 30px rgba(16, 46, 115, 0.08);
--shadow-md: 0 18px 50px rgba(10, 29, 72, 0.16);
--radius-sm: 12px;
--radius-md: 18px;
--radius-lg: 26px;
```

Auth variants:
- [app/auth/styles/create-account.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/styles/create-account.css)
  - `--accent: #ffd406`
- [app/auth/styles/log-in.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/styles/log-in.css)
  - `--accent: #f2b705`

Java mapping guidance:
- use the landing tokens for all marketing/auth screens
- use the same blue/yellow pair instead of inventing separate auth colors
- keep the rounded-corner scale and soft shadows consistent

## 3.2 Admin + Resident App Tokens

Canonical files:
- [app/admin/styles/styles.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/styles/styles.css)
- [app/resident/styles/styles.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/styles/styles.css)

Light theme:

```css
--bg: #f4f6fb;
--panel: #ffffff;
--panel-soft: #eef2fa;   /* resident uses #ffffff in light theme */
--text: #1c2740;
--muted: #61708b;
--primary: #092985;
--accent: #f0b323;
--border: #d8e0ef;
--pending-bg: #fff3cd;
--pending-text: #8a6700;
--progress-bg: #dce8ff;
--progress-text: #092985;
--resolved-bg: #dff4e8;
--resolved-text: #1c7a49;
--unverified-bg: #ffe1dd;
--unverified-text: #b42318;
--verified-bg: #ddf6e8;
--verified-text: #1c7a49;
--radius: 14px;
--shadow: 0 10px 28px rgba(19, 59, 134, 0.08);
--sidebar-width: 230px;
--topbar-height: 68px;
```

Dark theme:

```css
--bg: #0f1524;
--panel: #162032;
--panel-soft: #1d2b45;
--text: #e2e8f0;
--muted: #94a3b8;
--primary: #60a5fa;
--accent: #fbbf24;
--border: #2a3a5a;
--pending-bg: #4a3400;
--pending-text: #fde68a;
--progress-bg: #1e3a8a;
--progress-text: #bfdbfe;
--resolved-bg: #064e3b;
--resolved-text: #a7f3d0;
--unverified-bg: #4a1f25;
--unverified-text: #ffb4b0;
--verified-bg: #123a28;
--verified-text: #95e6b2;
--shadow: 0 10px 28px rgba(0, 0, 0, 0.4);
```

Java mapping guidance:
- admin and resident should share one app-shell system
- resident is not a separate brand; it is the same product with a different role
- keep the same sidebar width, topbar height, panel radius, and panel shadow
- if the Java app already has dark mode, map these dark tokens directly

## 4. Typography System

Shared font:
- `font-family: "Montserrat", Arial, Helvetica, sans-serif` on landing/auth
- `font-family: "Montserrat", sans-serif` on admin/resident

Guidelines:
- keep Montserrat across all Java views
- do not mix in a second default UI font for some screens
- headings are bold and high-contrast
- body copy is medium contrast, never pure gray-on-gray
- small section labels use uppercase styling with letter spacing

Common text patterns:
- page kicker / section kicker:
  - uppercase
  - higher letter spacing
  - smaller than body headings
  - used for labels like `OVERVIEW`, `SETTINGS`, `ANNOUNCEMENT CONTROLS`
- main page titles:
  - bold, large, dark blue
  - often paired with a leading icon
- panel headings:
  - bold, medium-large
  - visually stronger than table text
- body copy:
  - muted but readable
  - avoid low-contrast gray that fades into the background

Java drift to avoid:
- default Swing/JavaFX fonts replacing Montserrat
- body text that is too small
- headings that lose their weight hierarchy
- inconsistent uppercase/letter-spacing treatment on small labels

## 5. Color System

## 5.1 Shared Product Colors

These are the core brand colors that should survive the translation to Java:
- primary blue: `#092985`
- darker blue: `#0a1d48`
- accent yellow: `#f2b705` or `#f0b323`
- light page background: `#f4f6fb` to `#f5f7fb`
- white panel surface: `#ffffff`
- muted text: `#576074` / `#61708b`

## 5.2 Status Colors

Use the same status meaning across Java:
- pending: warm yellow surface + darker yellow text
- in progress/review: pale blue surface + primary blue text
- resolved/verified/reactivated: pale green surface + darker green text
- unverified/delete/destructive: pale red surface + red text

Guidance:
- prefer soft tinted backgrounds with readable text
- do not use neon or fully saturated solid fills for small metadata
- keep admin tables and cards readable first, decorative second

## 6. Radius, Borders, Shadows, Spacing

## 6.1 Radius

Use these shapes consistently:
- 12px: small controls/cards in landing/auth
- 14px: app panels and compact cards
- 18px: medium landing sections/cards
- 26px: large hero/marketing panels

Java guidance:
- choose one radius scale and apply it consistently
- current web app uses rounded shapes everywhere; square panels will look off-brand

## 6.2 Borders

Current app behavior:
- borders are subtle and blue-tinted
- they are used to define panels and secondary buttons without looking heavy
- recent cleanup intentionally reduced overly dark borders

Recommended mapping:
- panel border: `#d8e0ef`
- secondary/action outline border: soft blue-tinted alpha border, not black
- delete/secondary controls should not use thick black outlines

## 6.3 Shadows

Used in the prototype:
- landing soft shadow: `0 10px 30px rgba(16, 46, 115, 0.08)`
- landing stronger shadow: `0 18px 50px rgba(10, 29, 72, 0.16)`
- app shadow: `0 10px 28px rgba(19, 59, 134, 0.08)`

Guidance:
- shadows are soft and cool-toned
- avoid strong dark drop-shadows under every control
- panels should feel elevated but calm

## 6.4 Spacing

Key spacing behaviors:
- generous top/bottom section spacing on landing/auth
- dashboard app shell uses clear separation between banner, stat cards, and panels
- cards and panels are never packed tightly edge-to-edge
- popup windows use compact but breathable spacing

Java drift to avoid:
- cramped tables
- too little margin between hero/banner and stat cards
- controls touching panel edges

## 7. Component Patterns By Area

## 7.1 Landing Pattern

Hierarchy:
- top navigation
- hero with large headline and product image
- About
- Key Features
- How it Works
- Benefits
- Get Started / footer CTA flow

Important current decisions:
- hero uses a real product screenshot, not a placeholder
- `About` is the merged replacement for the old `Why` + `About`
- `How it Works` uses left-aligned cards with connector arrows between cards
- cards use Material Symbols icons and the same typography family as the rest of the page

## 7.2 Auth Pattern

Pattern:
- topbar matching landing navigation
- split layout:
  - intro column with selling points
  - form card column
- strong CTA button
- footer matching landing pages

Java guidance:
- auth screens should visually feel like an extension of the landing experience
- do not switch to a default enterprise/admin look on login/create account

## 7.3 Admin App Pattern

Canonical reference:
- [app/admin/dashboard.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/dashboard.html)

Structure:
- fixed topbar
- fixed left sidebar
- content area with page kicker, title, intro text
- large welcome banner
- stat cards
- panels/tables beneath

Current style decisions:
- banner and stat cards have clear separation
- stat cards use soft tinted fills with subtle blue borders
- announcements/settings cards were updated for better contrast
- manage users table is now more minimal, less pill-heavy

## 7.4 Resident App Pattern

Canonical reference:
- [app/resident/dashboard.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/dashboard.html)

Resident mirrors admin structurally:
- same shell
- same tokens
- slightly different content and actions
- same dashboard banner/stat-card relationship

Resident-specific focus:
- submit report
- open/view reports
- track status
- read announcements

## 7.5 Tables

Current admin/report table behavior:
- soft borders
- strong heading row
- clear row spacing
- action links/icons are compact
- status indicators use soft background chips or light metadata styling

Current manage users behavior:
- minimal roster styling
- separate columns for identity/status/action data
- edit is icon-only
- email and nickname are explicit columns
- color use is restrained compared to earlier iterations

## 7.6 Buttons

Current button hierarchy:
- primary button:
  - solid blue
  - white text
- accent CTA:
  - yellow fill on hero/banner contexts
- secondary button:
  - lighter background or white/outlined treatment
  - soft blue border
- utility/minimal controls:
  - compact, quieter, especially in tables

Guidance:
- avoid thick dark outlines
- keep padding generous
- maintain consistent radius
- destructive actions should be clearly different, but not oversized

## 7.7 Badges / Status Metadata

Use these patterns:
- light tinted background
- strong readable text
- restrained border or none
- never overly saturated solid pills for simple metadata

Recent direction:
- simplified several heavy pills into lighter metadata styling
- improved announcement/settings contrast

## 7.8 Popup / Window Layouts

Canonical popup files:
- [app/admin/report-view-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/report-view-window.html)
- [app/resident/report-compose-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-compose-window.html)
- [app/resident/report-view-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-view-window.html)

Pattern:
- browser popup / separate task window
- window toolbar with icon + title
- metadata chips near top
- 1 to 2 compact panels inside
- action row at bottom

Java mapping:
- implement these as dialogs or child windows, not full page navigation replacements

## 8. Interaction Behavior Notes

## 8.1 Navigation Hierarchy

Landing hierarchy:
- `Home`
- `About`
- `Features`
- `How it Works`
- `Developers`

Auth pages were updated to follow the same header order.

Resident/admin app hierarchy:
- sidebar as primary in-app navigation
- topbar user account/status on the right
- role switch link:
  - resident has `Open Staff View`
  - admin has `Open Resident View`

## 8.2 Popup Behavior

This is important for the Java repo.

Current intended popup flow:
- main page opens a popup-like task window
- user completes or reviews the task
- action button closes the popup immediately

Active popup open behavior in HTML:
- `window.open(..., '_blank', 'width=900,height=800')`

Active popup close behavior in HTML:
- `window.close()`

Examples:
- admin dashboard report links open `report-view-window.html`
- admin reports links open `report-view-window.html`
- resident dashboard `Create New Report` opens `report-compose-window.html`
- resident reports `Submit Report` opens `report-compose-window.html`
- resident report links open `report-view-window.html`
- popup action buttons close themselves after the task

Java guidance:
- use modal dialogs, secondary stages/windows, or internal dialogs
- do not navigate the main dashboard scene to simulate these popups
- buttons like `Back to Reports`, `Close Window`, `Submit`, `Mark In Review` should close the child window when appropriate

## 8.3 Shared Content Notes

Announcements:
- admin and resident announcements were intentionally aligned to show the same notice content
- admin includes announcement-management actions
- resident remains read-only

Manage users:
- action structure and row content were simplified to a more minimal admin-table style

## 9. Icon Inventory

All icons below refer to Material Symbols Outlined.

## 9.1 Repeated / Global Icons

Repeated across multiple pages:
- `menu`: mobile menu toggle on landing/auth/resident/admin pages
- `dashboard`: dashboard nav item
- `article`: reports nav item
- `campaign`: announcements nav item
- `settings`: settings nav item
- `logout`: logout nav item

Role-switch / user icons:
- `badge`: admin topbar user identity
- `account_circle`: resident topbar user identity
- `person`: some account/identity contexts
- `admin_panel_settings`: resident link to staff/admin view
- `manage_accounts`: admin manage-users navigation

Common action/status icons:
- `open_in_new`: open report/details in separate window
- `folder_open`: open reports action
- `post_add`: submit/create report
- `pending_actions`: pending/in-review status
- `verified`: resolved/verified state
- `close`: close popup

## 9.2 Landing Page Icons

### `landing-page/index.html`

- `menu`
  - mobile navigation toggle
- `schedule`
  - hero value pill for faster reporting flow
- `visibility`
  - hero value pill for clearer status tracking
- `assured_workload`
  - hero value pill for better barangay coordination
- `hub`
  - About card for platform connection / digital bridge
- `hourglass_top`
  - About card for delays in manual reporting
- `verified`
  - About card for accountability / reliable follow-through
- `edit_square`
  - feature card for report submission
- `photo_camera`
  - feature card for evidence upload
- `monitoring`
  - feature card for status tracking
- `dashboard`
  - feature card for barangay dashboard
- `notifications_active`
  - feature card for updates/notifications
- `analytics`
  - feature card for reports and insights
- `post_add`
  - How it Works step for submitting a report
- `assignment_ind`
  - How it Works step for review and assignment
- `task_alt`
  - How it Works step for tracking and resolution
- `groups`
  - Benefits card for residents/community
- `domain`
  - Benefits card for barangay/office impact

### `landing-page/developers.html`

- `menu`
  - mobile navigation toggle
- `location_on`
  - contact location
- `call`
  - contact number
- `mail`
  - contact email

### `landing-page/privacy.html`

- `menu`
  - mobile navigation toggle

### `landing-page/terms.html`

- `menu`
  - mobile navigation toggle

## 9.3 Auth Icons

### `app/auth/create-account.html`

- `menu`
  - mobile navigation toggle
- `edit_square`
  - intro point for online report submission
- `visibility`
  - intro point for tracking complaint progress
- `verified_user`
  - intro point for secure resident account access
- `info`
  - note/info block near the form

### `app/auth/log-in.html`

- `menu`
  - mobile navigation toggle
- `monitoring`
  - intro point for tracking report progress
- `notifications_active`
  - intro point for timely updates
- `shield_person`
  - intro point for secure account access

## 9.4 Admin Icons

### Shared admin shell icons

Used across most admin pages:
- `menu`
  - sidebar mobile toggle
- `badge`
  - topbar user role/account identity
- `dashboard`
  - dashboard nav
- `article`
  - reports nav
- `campaign`
  - announcements nav
- `manage_accounts`
  - manage users nav
- `settings`
  - settings nav
- `person`
  - open resident view nav
- `logout`
  - logout nav

### `app/admin/dashboard.html`

- `monitoring`
  - page title icon
- `inbox`
  - total reports stat card
- `pending_actions`
  - pending stat card
- `verified`
  - resolved stat card
- `description`
  - recent report list panel heading
- `folder_open`
  - open reports CTA
- `open_in_new`
  - report row action
- `campaign`
  - announcements panel heading
- `edit_square`
  - manage announcements CTA
- `tune`
  - settings panel heading
- `settings`
  - settings CTA

### `app/admin/reports.html`

- `table_chart`
  - page title icon
- `list_alt`
  - report table/list section heading
- `arrow_back`
  - back-navigation control
- `open_in_new`
  - row action to open report popup

### `app/admin/report-view-window.html`

- `mail`
  - popup window title icon
- `calendar_today`
  - report date metadata chip
- `place`
  - location metadata chip
- `pending_actions`
  - current report status chip
- `description`
  - report summary section heading
- `assignment_turned_in`
  - admin actions section heading
- `check_circle`
  - mark in review action
- `reply`
  - back to reports action

### `app/admin/announcements.html`

- `campaign`
  - page/section heading
- `add`
  - add announcement action
- `delete`
  - delete posted notice action

### `app/admin/manage-users.html`

- `manage_accounts`
  - page title icon
- `group`
  - resident and staff directory heading
- `edit`
  - minimal edit action per row

### `app/admin/settings.html`

- primarily shared admin shell icons
- no extra icon system divergence should be introduced in Java beyond the shared admin shell and existing setting-related controls

### `app/admin/profile.html`

- primarily shared admin shell icons

## 9.5 Resident Icons

### Shared resident shell icons

Used across most resident pages:
- `menu`
  - sidebar mobile toggle
- `account_circle`
  - topbar user identity
- `dashboard`
  - dashboard nav
- `article`
  - reports nav
- `campaign`
  - announcements nav
- `settings`
  - settings nav
- `admin_panel_settings`
  - open staff view nav
- `logout`
  - logout nav

### `app/resident/dashboard.html`

- `space_dashboard`
  - page title icon
- `inventory_2`
  - submitted stat card
- `pending_actions`
  - under review stat card
- `task_alt`
  - resolved stat card
- `bolt`
  - resident actions / quick actions panel heading
- `post_add`
  - submit report CTA
- `folder_open`
  - open reports CTA
- `notifications`
  - announcements/latest notice heading
- `visibility`
  - view announcements action

### `app/resident/reports.html`

- `folder_open`
  - page title icon
- `description`
  - report list panel heading
- `post_add`
  - submit report action
- `open_in_new`
  - open report popup action

### `app/resident/report-compose-window.html`

- `edit_square`
  - popup window title icon
- `person`
  - resident identity metadata chip
- `draft`
  - draft-state metadata chip
- `article`
  - report details section heading
- `send`
  - submit action
- `close`
  - close popup action

### `app/resident/report-view-window.html`

- `mail`
  - popup window title icon
- `calendar_today`
  - report date metadata chip
- `place`
  - location metadata chip
- `pending_actions`
  - report status chip
- `description`
  - report details section heading
- `manage_search`
  - status updates section heading
- `close`
  - close popup action

### `app/resident/report-form.html`

- only shared resident shell icons are used in the current structure

### `app/resident/announcements.html`

- only shared resident shell icons are used in the current structure

### `app/resident/settings.html`

- only shared resident shell icons are used in the current structure

### `app/resident/profile.html`

- only shared resident shell icons are used in the current structure

## 10. Implementation Guidance For The Java Repo

If another AI is changing the Java repo, it should treat this prototype as a styling and interaction brief.

## 10.1 Match This First

Priority order:
1. color tokens
2. typography
3. icons
4. spacing, radius, borders, shadows
5. major page layouts
6. popup/report flows

## 10.2 Canonical Reference Screens

Use these as the first alignment targets:
- landing homepage:
  - [landing-page/index.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/index.html)
- login/create account:
  - [app/auth/log-in.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/log-in.html)
  - [app/auth/create-account.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/auth/create-account.html)
- admin dashboard:
  - [app/admin/dashboard.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/dashboard.html)
- resident dashboard:
  - [app/resident/dashboard.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/dashboard.html)
- popup windows:
  - [app/admin/report-view-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/report-view-window.html)
  - [app/resident/report-compose-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-compose-window.html)
  - [app/resident/report-view-window.html](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/report-view-window.html)

## 10.3 Known Drift Areas In The Java App

These are the areas most likely to drift and should be checked first:
- color mismatch
  - blue/yellow brand palette not preserved
- typography mismatch
  - Montserrat replaced or sizes/weights flattened
- icon mismatch
  - different icon family or inconsistent semantics
- sizing mismatch
  - sidebars, panels, and buttons too small or too large
- border and shadow mismatch
  - heavy black outlines or flat no-depth panels
- popup behavior mismatch
  - windows navigated as full screens instead of child dialogs/popups

## 10.4 Practical Translation Rules

- map CSS custom properties to Java theme constants first
- recreate a shared component library before fixing screens one-by-one
- build one shared icon mapping table from this document
- standardize one button family:
  - primary
  - secondary
  - accent CTA
  - utility/minimal
- implement sidebar/topbar shell once and reuse for admin/resident
- implement popup/dialog behavior as true secondary windows/dialogs
- keep announcements content view consistent across admin/resident, with admin-only management actions

## 11. Validation Checklist For Another AI

Before considering the Java UI aligned, verify:
- all major pages use Montserrat
- blue/yellow brand colors match the prototype closely
- topbars and sidebars match the current shell proportions
- panel radius and shadows feel soft and modern, not default Java UI
- Material Symbols semantics are preserved or mapped closely
- admin and resident dashboards feel like one system
- stat cards use soft tinted backgrounds with subtle borders
- manage users table is minimal and not filled with oversized pills/buttons
- announcements/settings cards have enough contrast against the page background
- popup flows behave like dialogs and close when the task is complete
- landing page structure follows:
  - `Home > About > Features > How it Works > Developers`

## 12. Final Notes

- Treat the active HTML/CSS in this repo as the visual source of truth.
- Do not use `old-draft-ui-dashboard/` to define current colors, spacing, layouts, or icons.
- If the Java repo must simplify some interactions, preserve the visual hierarchy first:
  - tokens
  - typography
  - icon meanings
  - panel/button behavior
  - popup flow

If another AI needs a single starting point, begin with:
- [landing-page/styles/style.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/landing-page/styles/style.css)
- [app/admin/styles/styles.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/admin/styles/styles.css)
- [app/resident/styles/styles.css](/C:/Users/lehig/Documents/01%20School/01%20Information%20Technology/01%20Y1S2/Semester%20Project/i-Sumbong-Static-Web/app/resident/styles/styles.css)
