/*
 * NJS Proposal Generator — Configuration
 * 
 * INSTRUCTIONS:
 * 1. Update the email addresses below as needed
 * 2. Upload this file alongside index.html to your web host
 * 3. No API keys needed — emails open directly in Gmail
 */

const NJS_CONFIG = {
  // Email sent FROM (must be logged into this Google account in the browser)
  senderEmail: "billing@nationaljanitorialservices.com",

  // Internal notification recipient (auto-sent when client email is triggered)
  internalNotification: "billing@nationaljanitorialservices.com",

  // Subject line templates ({company} gets replaced with client company name)
  subjects: {
    client: "National Janitorial Services || Proposal for {company}",
    internal: "NJS || Proposal has been generated for {company}",
  },
};
