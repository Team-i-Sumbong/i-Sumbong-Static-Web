# i-Sumbong Static Web

A static prototype for the i-Sumbong barangay issue reporting platform. This repository is the visual and navigation basis for the future Java GUI version.

## Active Page Groups

- `promotional-page/`: landing page, team page, legal pages, and portfolio/profile pages
- `login-and-create-account/`: shared authentication screens used by the active flow
- `resident-dashboard/`: resident-facing dashboard, reports, announcements, settings, and report-compose window
- `admin-dashboard/`: staff/admin dashboard, report list, announcements, settings, and report-view window
- `old-draft-ui-dashboard/`: earlier draft screens kept for reference only
- `shared/`: older shared login prototype kept for reference only

## Current Navigation Flow

- Landing page: `promotional-page/index.html`
- Shared auth entry: `login-and-create-account/log-in.html`
- Shared registration: `login-and-create-account/create-account.html`
- Resident entry dashboard: `resident-dashboard/dashboard.html`
- Admin entry dashboard: `admin-dashboard/dashboard.html`
- Resident compose window: `resident-dashboard/report-compose-window.html`
- Admin opened-report window: `admin-dashboard/report-view-window.html`

## Java GUI Notes

- The resident and admin dashboards are the main UI basis for the Java implementation.
- Icons were kept minimal and text-forward so the layout can be recreated with Java labels, buttons, and optional icon assets.
- The standalone report windows are designed to behave like smaller email-style tabs and can guide the Java multi-window or tabbed workflow.

## Design Reference

See `UI-DESIGN-REFERENCE.md` for the HTML inventory, size/color/position notes, and Java translation guidance.

## Status

This repository is still a static prototype. Links and layouts are prepared for demo and design handoff, not backend persistence.