/*
 * NJS Proposal Generator — Configuration
 *
 * INSTRUCTIONS:
 * 1. Follow the Gmail API setup in README.md
 * 2. Replace the placeholder values below
 * 3. Upload this file alongside index.html
 */

const NJS_CONFIG = {
  // ─── Gmail API ───────────────────────────────────────────
  gmail: {
    // Your Google Cloud OAuth 2.0 Client ID
    // Get this from: console.cloud.google.com → APIs & Services → Credentials
    clientId: "705760101586-ki4m5f24mm45jatlrpdh4600s0v8h9hv",

    // Scopes needed (don't change this)
    scopes: "https://www.googleapis.com/auth/gmail.send",

    // The "From" address for all outgoing emails
    // Must be the authenticated Gmail account or a configured send-as alias
    senderEmail: "billing@nationaljanitorialservices.com",
  },

  // ─── Email Recipients ────────────────────────────────────
  emails: {
    // Internal team notification recipient
    // Receives cleaner details whenever a proposal is emailed to a client
    internalNotification: "billing@nationaljanitorialservices.com",
  },

  // ─── Email Subject Lines ─────────────────────────────────
  subjects: {
    // Subject for the email sent TO THE CLIENT
    // {company} will be replaced with the client's company name
    client: "National Janitorial Services || Proposal for {company}",

    // Subject for the INTERNAL notification email
    // {company} will be replaced with the client's company name
    internal: "NJS || Proposal has been generated for {company}",
  },
};
