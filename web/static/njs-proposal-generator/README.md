# NJS Proposal Generator — Developer Setup Guide

## Overview

Single-page web app that generates client proposals for National Janitorial Services.
Runs entirely in the browser — no backend, no build tools, no API keys.

## Files

```
njs-proposal-tool/
├── index.html    ← The entire app (self-contained)
├── config.js     ← Email addresses & subject lines (edit this)
├── README.md     ← This file
```

## Deployment (3 steps)

1. **Edit `config.js`** — Update email addresses if needed (defaults are already set to billing@nationaljanitorialservices.com)
2. **Upload `index.html` + `config.js`** to any web host, same directory
3. **Done** — Open in browser, start generating proposals

### Hosting Options
- **Netlify**: Drag the folder to [netlify.com/drop](https://netlify.com/drop) — free, instant
- **Vercel**: `vercel deploy` from CLI
- **Subdomain**: Host at e.g. `proposals.nationaljanitorialservices.com`
- **Any web server**: Apache, Nginx, S3, etc. — just serve the two static files

> **HTTPS recommended** but not strictly required (no API calls are made)

## How It Works

### User Flow
1. **Edit** — 5 tabs: Client Details, Cover Letter, Scope of Work, Add-Ons & Pricing, Cleaner Info
2. **Preview** — See the 3-page PDF (Cover Letter → Commitment & Terms → SOW)
3. **Submit** — Download PDF and/or email to client

### PDF Download
- Clicking "Download" opens the browser's Save as PDF dialog
- The print CSS ensures only the 3-page proposal prints (not the app UI)
- Works from any page (Preview or Submit)
- **Tip**: In the print dialog, set Margins to "None" and enable "Background graphics" for best results

### Email to Client
When "Open Gmail & Send to Client" is clicked:
1. **Gmail compose** opens in a new tab, pre-filled with:
   - To: client's email (from Client Details tab)
   - Subject: `National Janitorial Services || Proposal for [Company Name]`
   - Body: Default professional message (or custom if edited)
2. **Internal notification** compose opens in a second tab:
   - To: billing@nationaljanitorialservices.com
   - Subject: `NJS || Proposal has been generated for [Company Name]`
   - Body: Full cleaner details (name, days, frequency, margin, fee breakdown, client summary)
3. User downloads the PDF first, drags it into the Gmail compose window, and hits Send

> **Requires**: User must be logged into Google Workspace (billing@nationaljanitorialservices.com) in the same browser

### Mandatory Fields
The app validates before allowing preview:
- **Client Details**: Company Name, Contact First/Last Name, Phone, Email, Address, Sq Ft, Frequency, Base Monthly Fee
- **Initial Cleaning Fee**: If set to "Yes", the dollar amount is required
- **Cleaner Info**: Cleaner Name, Margin %, at least one Cleaning Day selected, Frequency confirmation checkbox

### Data Privacy
- All data stays in the browser — nothing is sent to any server
- Gmail compose links open mail.google.com with pre-filled fields
- Refreshing the page clears all data

## Technical Details
- **React 18** loaded via CDN (cdnjs.cloudflare.com)
- **Babel** compiles JSX in-browser (no build step)
- Single HTML file, ~60KB
- No dependencies to install
- Works in Chrome, Firefox, Safari, Edge

## Customization

### Changing default email addresses
Edit `config.js`:
```javascript
senderEmail: "billing@nationaljanitorialservices.com",
internalNotification: "billing@nationaljanitorialservices.com",
```

### Changing subject lines
Edit `config.js`:
```javascript
subjects: {
  client: "National Janitorial Services || Proposal for {company}",
  internal: "NJS || Proposal has been generated for {company}",
}
```

### Changing SOW items, terms, commitment text
These are defined in `index.html` in the `<script type="text/babel">` block. Search for `SECTIONS`, `TERMS`, `COMMITMENT` to find the data arrays.

### Adding/removing add-on services
Search for `ADDON_LIBRARY` in `index.html`.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| PDF shows wrong content | Make sure you clicked "Download" (not Ctrl+P from the submit page) |
| Gmail compose doesn't open | Check popup blocker — allow popups for this domain |
| Gmail shows wrong account | Log into billing@ in Chrome before using the tool |
| Blank page on load | Check browser console (F12) for errors; ensure config.js is in same directory |
| PDF margins look off | In print dialog: Margins → "None", check "Background graphics" |

## Support
For app changes or feature requests, bring this project folder back to Claude and describe what you need.
