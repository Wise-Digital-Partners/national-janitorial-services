# NJS Proposal Generator — Developer Setup Guide

## Overview

This is a single-page web application that generates client proposals for National Janitorial Services. It runs entirely in the browser — no backend server required. The only server-side dependency is the Gmail API for sending emails.

## Files

```
njs-proposal-tool/
├── index.html          ← The entire app (single file, self-contained)
├── config.js           ← Gmail API credentials & email settings (EDIT THIS)
├── README.md           ← This file
```

## Quick Start

1. Edit `config.js` with your Gmail API credentials (see below)
2. Upload both `index.html` and `config.js` to any web host
3. Open `index.html` in a browser — done

The app should be served over HTTPS (required for Gmail API OAuth).

---

## Gmail API Setup (Required for Email Feature)

The app uses the Gmail API to send proposals to clients and internal notifications. Here's how to set it up:

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Create Project"** → Name it "NJS Proposal Tool" → Create
3. Make sure you're in the new project (check top-left dropdown)

### Step 2: Enable the Gmail API

1. Go to **APIs & Services → Library**
2. Search for **"Gmail API"**
3. Click it → Click **"Enable"**

### Step 3: Create OAuth 2.0 Credentials

1. Go to **APIs & Services → Credentials**
2. Click **"+ Create Credentials" → "OAuth client ID"**
3. If prompted, configure the **OAuth consent screen** first:
   - User Type: **Internal** (if all users are in your Google Workspace) or **External**
   - App name: "NJS Proposal Tool"
   - Support email: billing@nationaljanitorialservices.com
   - Authorized domains: Add your hosting domain
   - Scopes: Add `https://www.googleapis.com/auth/gmail.send`
   - Save
4. Back in Credentials, create the OAuth client:
   - Application type: **Web application**
   - Name: "NJS Proposal Tool"
   - Authorized JavaScript origins: Add your hosting URL (e.g., `https://tools.nationaljanitorialservices.com`)
   - Authorized redirect URIs: Same as above
   - Click **Create**
5. Copy the **Client ID** — you'll need it for `config.js`

### Step 4: Update config.js

Open `config.js` and replace the placeholder values:

```javascript
const NJS_CONFIG = {
  gmail: {
    clientId: "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",  // ← Paste your Client ID
    // ... rest stays the same
  }
};
```

### Step 5: Set Up Send-As (Optional)

If the Gmail account used to authenticate is different from `billing@nationaljanitorialservices.com`, you'll need to add billing@ as a send-as alias in Gmail Settings → Accounts → "Send mail as".

---

## Hosting Options

### Option A: Simple Static Host (Recommended)
Upload `index.html` and `config.js` to any static host:
- **Netlify**: Drag and drop the folder at netlify.com/drop
- **Vercel**: `vercel deploy` from CLI
- **Google Cloud Storage**: Upload to a bucket with website hosting enabled
- **Any web server**: Apache, Nginx, etc.

### Option B: Subdomain of Existing Site
If NJS already has a website, host these files at a subdomain like:
`https://proposals.nationaljanitorialservices.com/`

### Important Notes
- Must be served over **HTTPS** (required for Google OAuth)
- Both `index.html` and `config.js` must be in the same directory
- No build step, no npm, no Node.js required
- The entire app runs client-side in the browser

---

## How It Works

### User Flow
1. **Edit** — Fill in 5 tabs: Client Details, Cover Letter, Scope of Work, Add-Ons & Pricing, Cleaner Info
2. **Preview** — See the 3-page PDF proposal (Cover Letter → Terms → SOW)
3. **Submit** — Download PDF and/or email to client

### Email Behavior
When "Send Proposal to Client" is clicked:
1. **Client Email** is sent to the address in Client Details
   - From: billing@nationaljanitorialservices.com
   - Subject: `National Janitorial Services || Proposal for [Company Name]`
   - Body: Default template or custom message
   - Note: PDF attachment requires the user to download and attach manually (browser limitation — see "Future Enhancements" below)

2. **Internal Notification** is auto-sent to billing@nationaljanitorialservices.com
   - Subject: `NJS || Proposal has been generated for [Company Name]`
   - Body: Full cleaner details (name, days, frequency, margin, fee) + client summary

### Data Privacy
- All data stays in the browser — nothing is stored on any server
- Gmail API only sends emails; it doesn't read or store anything
- Refreshing the page clears all entered data

---

## Future Enhancements (Optional)

If you want to add PDF auto-attachment to emails, you'd need a small backend:

### Option A: Google Apps Script (Free, stays in Google ecosystem)
Create a Google Apps Script that:
1. Receives the proposal data via POST
2. Generates a PDF using Google Docs API
3. Sends the email with the PDF attached via Gmail
This is ~50 lines of code. Ask Claude to generate this if needed.

### Option B: Cloud Function
A simple Cloud Function (Google Cloud, AWS Lambda, etc.) that:
1. Receives HTML content
2. Converts to PDF (using Puppeteer or similar)
3. Sends via Gmail API with attachment

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Sign in" popup blocked | Allow popups for the hosting domain |
| "Access denied" after sign-in | Check OAuth consent screen scopes include `gmail.send` |
| "Origin not allowed" | Add the exact hosting URL to Authorized JavaScript Origins |
| Emails not sending | Check browser console (F12) for error messages |
| PDF looks wrong when printing | Use Chrome, select "Save as PDF", set margins to "None" |

---

## Support
For app changes or feature requests, bring this entire project folder back to Claude and describe what you need.
