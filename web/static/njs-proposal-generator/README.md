# NJS Proposal Generator v3

## Overview
A self-contained React web app that generates branded client proposals for National Janitorial Services. Fill out client details, scope of work, and pricing — then download a print-ready PDF and send a pre-populated email to billing.

## Files
- `index.html` — The complete app (single file, no build step needed)
- `README.md` — This file

## How to Deploy
1. Upload `index.html` to your web server
2. Open in any modern browser (Chrome recommended for PDF output)
3. That's it — no API keys, no configuration, no dependencies to install

## What's in This Version

### All Fixes Applied
1. **Phone auto-formatting** — Phone number field auto-formats as you type to `xxx-xxx-xxxx`
2. **PDF download prints the proposal** — Download button renders the 3-page proposal into a hidden print target, so the print dialog captures only the proposal pages (not the app UI)
3. **Full proposal text preserved** — Complete "Our Commitment" section (all 5 subsections) and all 8 Terms & Conditions with full original language — nothing condensed
4. **Corrected email workflow** — Single email to `billing@nationaljanitorialservices.com` containing: client-facing proposal message at the top, internal cleaner info at the bottom. User attaches PDF and sends from billing.
5. **SOW tab fully expanded** — No scroll truncation on the Scope of Work tab; entire list is visible
6. **Frequency labels** — "Weekly", "Bi-Weekly", "Monthly" (not "Once a Week")

### PDF Output (3 pages)
- **Page 1**: Cover letter with proper spacing (fills the page)
- **Page 2**: Our Commitment + Service Terms & Conditions (no acceptance block here)
- **Page 3**: Scope of Work, pricing summary, and Proposal Acceptance at the very bottom

### Submit Workflow (2 steps)
1. **Step 1**: Download PDF via print dialog (Save as PDF)
2. **Step 2**: Opens pre-populated email draft to billing with client message + internal cleaner details

### Features
- 5-tab editor: Client Details, Cover Letter, Scope of Work, Add-Ons & Pricing, Cleaner Info
- Mandatory field validation with error counts per tab
- Auto-populated salutation from contact first name
- Conditional initial cleaning fee field
- Cleaner margin/fee calculator with manual override
- Day-of-week chip selector for cleaning schedule
- Custom SOW items and sections
- Custom add-on services with pricing

## Technical Notes
- Built with React 18 + Babel (CDN-loaded, no build step)
- All styling is inline — no external CSS dependencies
- Print uses a hidden render target so only proposal pages print
- Email uses `mailto:` links — works with any email client
- Single HTML file, fully self-contained
