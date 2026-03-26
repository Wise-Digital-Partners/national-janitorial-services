# NJS Proposal Generator — Setup Guide

## What's In This Folder

```
njs-proposal-tool/
├── index.html    ← The app itself (don't edit this unless changing SOW content)
├── config.js     ← Settings file (you'll paste your Gmail API key here)
├── README.md     ← This guide
```

---

## PART 1: Get the App Online

Your dev uploads `index.html` and `config.js` to a web host. Both files must be in the same folder. The site **must use HTTPS** (https:// not http://).

**Easiest option:** Drag the folder to [netlify.com/drop](https://app.netlify.com/drop) — it's free and gives you a live URL in seconds. You can connect a custom domain later (e.g., `proposals.nationaljanitorialservices.com`).

Once uploaded, open the URL in Chrome. You should see the NJS Proposal Generator with the green header. If you see a blank page, press F12, click "Console", and send your dev a screenshot of any red errors.

**At this point, everything works EXCEPT the internal email auto-send.** You can fill out proposals, preview them, download PDFs, and open Gmail compose to email clients. The internal notification (cleaner details sent to billing@) requires Part 2 below.

---

## PART 2: Set Up Gmail API (for Internal Email Auto-Send)

This is a one-time setup that takes about 15-20 minutes. You'll be creating a "key" that lets the app send emails through your Gmail account. **You will not be giving anyone access to your email** — this only allows the app (which runs in YOUR browser) to send on your behalf.

### Step 1: Go to Google Cloud Console

1. Open Chrome and make sure you're logged into **billing@nationaljanitorialservices.com**
2. Go to: **https://console.cloud.google.com/**
3. If this is your first time, you may see a terms of service popup — accept it

### Step 2: Create a Project

1. At the very top of the page, you'll see a dropdown that says "Select a project" (or shows a project name)
2. Click it → Click **"NEW PROJECT"** (top right of the popup)
3. Project name: type **NJS Proposal Tool**
4. Leave Organization as-is
5. Click **"CREATE"**
6. Wait a few seconds. You may need to click the project dropdown again and select "NJS Proposal Tool" to switch to it

### Step 3: Turn On the Gmail API

1. In the left sidebar, click **"APIs & Services"** (you may need to click the hamburger menu ☰ first)
2. Click **"Library"** in the submenu
3. In the search box, type **Gmail API**
4. Click on **"Gmail API"** in the results
5. Click the big blue **"ENABLE"** button
6. Wait for it to load

### Step 4: Set Up the Consent Screen

Before you can create credentials, Google needs you to set up a "consent screen" — this is what users see when the app asks permission to send email.

1. In the left sidebar, click **"APIs & Services"** → **"OAuth consent screen"**
2. Select **"Internal"** (this means only people in your Google Workspace can use it)
3. Click **"CREATE"**
4. Fill in:
   - **App name:** NJS Proposal Tool
   - **User support email:** Select billing@nationaljanitorialservices.com from the dropdown
   - Scroll down to **"Developer contact information"**
   - **Email:** billing@nationaljanitorialservices.com
5. Click **"SAVE AND CONTINUE"**
6. On the "Scopes" page, click **"ADD OR REMOVE SCOPES"**
7. In the search/filter box, type **gmail.send**
8. Check the box next to **`https://www.googleapis.com/auth/gmail.send`** (it should say "Send email on your behalf")
9. Click **"UPDATE"** at the bottom
10. Click **"SAVE AND CONTINUE"**
11. On the "Summary" page, click **"BACK TO DASHBOARD"**

### Step 5: Create the API Key (OAuth Client ID)

1. In the left sidebar, click **"APIs & Services"** → **"Credentials"**
2. At the top, click **"+ CREATE CREDENTIALS"**
3. Select **"OAuth client ID"**
4. Application type: Select **"Web application"**
5. Name: Type **NJS Proposal Tool**
6. Under **"Authorized JavaScript origins"**, click **"+ ADD URI"**
7. Type your app's URL. Examples:
   - If you used Netlify: `https://your-site-name.netlify.app`
   - If you used a custom domain: `https://proposals.nationaljanitorialservices.com`
   - **Important:** No trailing slash. Just the domain with https://
8. Click **"CREATE"**
9. A popup appears with your **Client ID** — it looks like: `123456789-abcdefg.apps.googleusercontent.com`
10. **Copy the entire Client ID** (click the copy icon)

### Step 6: Paste the Client ID into config.js

1. Open `config.js` in any text editor (Notepad, TextEdit, VS Code, etc.)
2. Find this line:
   ```
   clientId: "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",
   ```
3. Replace `YOUR_CLIENT_ID_HERE.apps.googleusercontent.com` with the Client ID you just copied
4. It should now look something like:
   ```
   clientId: "123456789-abcdefg.apps.googleusercontent.com",
   ```
5. **Save the file**
6. **Re-upload `config.js`** to your web host (replace the old one)

### Step 7: Test It

1. Open the app in Chrome (make sure you're logged into billing@nationaljanitorialservices.com)
2. Fill out a test proposal with all required fields
3. Go through Preview → Submit
4. Click **"Open Gmail & Send to Client"**
5. **First time only:** A Google popup will ask you to sign in and grant permission. Click your billing@ account, then click **"Allow"**
6. You should see:
   - A Gmail compose tab opens for the client email ✓
   - The submit page shows **"✓ Internal notification sent automatically"** in green ✓
7. Check the billing@ inbox — the internal email should be there with the cleaner details

**If you see an error instead of the green checkmark**, the most common fixes are:
- Make sure the URL in Step 5.7 exactly matches your actual site URL (no trailing slash, must be https)
- Make sure you're logged into billing@ in Chrome (not a personal Gmail account)
- Make sure you clicked "Allow" on the permission popup

---

## PART 3: How the App Works (for reference)

### Tabs

**1. Client Details** — Company info, contact name, phone (auto-formats to xxx-xxx-xxxx), email, address, square footage, frequency, contract term, initial cleaning fee (Yes/No dropdown — "Yes" reveals a required dollar amount field), base monthly fee. All fields marked with * are required.

**2. Cover Letter** — The intro letter body. The salutation ("Dear Nicole,") auto-fills from the contact first name. The sign-off (Patrick Dillon) is fixed.

**3. Scope of Work** — All standard cleaning categories with on/off toggles per task. Includes Select All/Deselect All per section, Day Porter services with hours, and the ability to add custom items or entirely new sections.

**4. Add-Ons & Pricing** — Toggle add-on services with monthly prices. Add custom services. Shows a running pricing summary (base + add-ons = total).

**5. Cleaner Info** — Internal only. Cleaner name, margin % (auto-calculates cleaner fee), cleaning days (click the day chips — Mon through Sun), frequency (Weekly / Bi-Weekly / Monthly), confirmation checkbox. The cleaning days and frequency DO appear on the client-facing SOW page. Everything else stays internal.

### The Proposal PDF (3 pages)

- **Page 1:** Cover letter with NJS header, client name, date, personalized greeting, letter body, Patrick's sign-off
- **Page 2:** "Our Commitment" section + all 8 Terms & Conditions
- **Page 3:** Scope of Work with client details, cleaning schedule bar (green), facility info bar, all selected services with checkmarks, add-ons with pricing, pricing summary box, signature/acceptance block

### Submitting

After preview, the Submit page has two options:

1. **Download PDF** — Opens your browser's "Save as PDF" dialog. Saves the 3-page proposal. Always works regardless of Gmail setup.

2. **Open Gmail & Send to Client** — Does two things:
   - Opens a Gmail compose tab with the client's email, subject line, and message pre-filled. You attach the downloaded PDF and hit send.
   - Automatically sends the internal notification email to billing@ with all the cleaner details (name, days, frequency, margin, fee, client summary). No action needed — it just sends in the background.

---

## PART 4: Changing Email Settings

Open `config.js` to change:

- **Who receives the internal notification:** Change `internalNotification`
- **The "From" email address:** Change `senderEmail` and `gmail.senderEmail`
- **Subject lines:** Edit the `subjects` section. Use `{company}` where you want the client's company name to appear

After any changes, save the file and re-upload it to your web host.

---

## Troubleshooting

| What's happening | What to do |
|-----------------|------------|
| Blank page when I open the app | Make sure `config.js` is in the same folder as `index.html` on the server |
| "Download" opens print dialog with wrong content | Make sure you clicked the Download button on the Submit page, not Ctrl+P |
| Gmail compose doesn't open when I click the button | Your browser is blocking popups. Click the popup-blocked icon in the address bar and allow popups for this site |
| Google permission popup doesn't appear | You may have already granted permission. Check if the internal email actually sent by looking in the billing@ inbox |
| "Gmail API not configured" message on Submit page | You haven't completed Part 2 above. The Client ID is still set to the placeholder in config.js |
| "Origin not allowed" error | The URL you entered in Step 5.7 doesn't exactly match your site URL. Go back to Google Cloud Console → Credentials → edit your OAuth client → fix the Authorized JavaScript origin |
| Internal email sends but shows wrong info | Make sure you filled in all the Cleaner Info tab fields before clicking submit |
| PDF margins are off | In the print/save dialog: set Margins to "None" and check "Background graphics" |
| Phone number looks weird | Just type or paste the digits — it auto-formats to xxx-xxx-xxxx |

---

## Getting Help

- **For app changes** (adding fields, changing wording, new features): Bring this folder back to Claude
- **For hosting issues**: Contact your web developer
- **For Google Cloud / Gmail API issues**: The setup above covers 99% of cases. If stuck, screenshot the error and send to your dev
