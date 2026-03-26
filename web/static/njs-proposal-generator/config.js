/*
 * NJS Proposal Generator — Configuration
 * 
 * INSTRUCTIONS:
 * 1. Update email addresses below as needed
 * 2. For auto-sending internal notifications, add your Gmail API Client ID
 *    (see README.md for setup steps). Without it, everything still works —
 *    the internal email just won't auto-send.
 * 3. Upload this file alongside index.html to your web host
 */

const NJS_CONFIG = {

  // ─── Gmail API (for auto-sending internal notifications) ───
  // Get this from: console.cloud.google.com → APIs & Services → Credentials
  // Without this, client emails still work (opens Gmail compose), but
  // internal notifications won't auto-send.
  gmail: {
    clientId: "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",
    senderEmail: "billing@nationaljanitorialservices.com",
  },

  // ─── Email Settings ───
  // Email sent FROM (user must be logged into this account in browser)
  senderEmail: "billing@nationaljanitorialservices.com",

  // Internal notification recipient (auto-sent when client email is triggered)
  internalNotification: "billing@nationaljanitorialservices.com",

  // Subject line templates ({company} = client company name)
  subjects: {
    client: "National Janitorial Services || Proposal for {company}",
    internal: "NJS || Proposal has been generated for {company}",
  },
};
