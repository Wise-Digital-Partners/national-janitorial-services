# NJS Proposal Generator v2

## Overview
A self-contained React web app that generates branded client proposals for National Janitorial Services. Fill out client details, scope of work, and pricing — then download a print-ready PDF and send pre-populated emails.

## What's New in v2
- **Fixed PDF formatting**: Proper page breaks with consistent margins/padding on every page. No more dead space, content cutoff, or wallpaper-style printing.
- **Simplified email workflow**: No more Gmail API setup required. The app now opens pre-populated emails in your default email client (Outlook, Gmail web, Apple Mail, etc.) with a guided 3-step submit flow.

## Files
- `index.html` — The complete app (single file, no build step needed)
- `README.md` — This file

## How to Deploy
1. Upload `index.html` to your web server
2. Open in any modern browser
3. That's it — no API keys, no configuration needed

## How It Works

### Creating a Proposal
1. **Client Details** tab — Enter company info, contact, pricing
2. **Cover Letter** tab — Customize the letter body (salutation auto-fills)
3. **Scope of Work** tab — Toggle tasks on/off, add custom items/sections
4. **Add-Ons & Pricing** tab — Enable add-on services with pricing
5. **Cleaner Info** tab — Assign cleaner, set margin, select days/frequency

### Submitting a Proposal
Click **Preview Proposal →** to review the 3-page PDF, then **Continue to Submit →** for the guided workflow:

1. **Step 1: Download PDF** — Saves the proposal to your computer via print dialog (choose "Save as PDF")
2. **Step 2: Client Email** — Opens a new email pre-filled with the client's address, subject line, and proposal message. Attach the PDF before sending.
3. **Step 3: Internal Email** — Opens a new email to billing@ with cleaner assignment details and client summary.

### PDF Output (3 pages)
- **Page 1**: Cover letter with NJS branding
- **Page 2**: Our Commitment + Service Terms & Conditions
- **Page 3**: Scope of Work with pricing summary and signature block

## Technical Notes
- Built with React 18 + Babel (CDN-loaded, no build step)
- All styling is inline — no external CSS dependencies
- Print styles use `@media print` with proper `@page` rules for letter-size output
- Email uses `mailto:` links — works with any email client
- Single HTML file, fully self-contained
