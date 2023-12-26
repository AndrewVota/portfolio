---
layout: "../../layouts/MarkdownLayout.astro"
title: "Integrating Gmail SMTP with Cloudflare Email Routing: A Detailed Tutorial"
date: "December 26, 2023"
---

# Step 1: Getting Started

First, activate two-factor authentication for your Google account. This step is crucial for security and functionality.

_Haven't enabled it yet? Set it up here:_ [Enable 2FA for Google Account](https://www.google.com/landing/2step/).

# Step 2: Generating an App Password for Email

Navigate to your Google account settings and create an App Password specifically for the Mail app. Use this link to generate one: [Create App Password](https://myaccount.google.com/apppasswords). Remember, you'll need this password later, so keep it handy.

When generating the App Password, name it "Mail" as the app. After clicking "Generate," ensure you copy the new password for later use.

# Step 3: Incorporating Your Cloudflare Email in Gmail

In Gmail, go to:

`Settings ➔ Accounts ➔ Send mail as`

Here, add your Cloudflare-routed email address. Fill in your name and the Cloudflare email address, then uncheck the "Treat as an alias" box.

# Step 4: SMTP Server Configuration

Fill in the SMTP server details as follows:

-   SMTP Server: `smtp.gmail.com`
-   Port: `587`
-   Username: `<YOUR_FULL_GMAIL_ADDRESS>`
-   Password: `<APP_PASSWORD_FROM_STEP_2>`
-   TLS: Enabled

Add the account, after which you will receive an email from Gmail for verification. Follow the prompt in the email to confirm.

# Step 5: Configuring SPF Records & DMARC Policy in Cloudflare

In Cloudflare's DNS settings for your domain, add a new record and fill in the details as follows:

-   Type: `TXT`
-   Name: `@`
-   TTL: `auto`
-   Content: `v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all`

Add the record, then head to Cloudflare's DMARC settings; enable the setting and ensure the 'p' tag is set to: `p=none` in the 'TXT' content.

# Conclusion

Your Gmail SMTP is now successfully integrated with Cloudflare Email Routing! In Gmail, you can select your new email address for composing messages or replying, as it will automatically appear in the **From:** field.
