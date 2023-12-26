---
layout: "../../layouts/MarkdownLayout.astro"
title: "Integrating Gmail SMTP with Cloudflare Email Routing: A Guide"
date: "December 26, 2023"
---

Ever wanted to manage your Cloudflare-routed emails directly through Gmail? It's easier than you think! In this guide, I'll walk you through the process step-by-step. Not only does this make email management more efficient, but it also adds a layer of professionalism to your communications. Let's get started!

# Step 1: Fortify Your Google Account

First things first, let's secure your account. [Activate two-factor authentication](https://safety.google/authentication/) for your Google account. This isn't just about following best practices for security - it's also essential for ensuring everything functions smoothly later on.

# Step 2: Generating an App Password for Email

Time to [set up an App Password](https://myaccount.google.com/apppasswords). This is like creating a secret handshake between your email applications. Go to your Google account settings and generate an App Password specifically for the Mail app. Remember to name it Mail and save the new password - you'll need it soon!

# Step 3: Make Your Cloudflare Email Feel at Home in Gmail

In Gmail, navigate to:

`Settings ➔ See all settings ➔ Accounts and Import ➔ Send mail as`

Here, you'll invite your Cloudflare-routed email to the Gmail party. Just add your Cloudflare email address and uncheck the "Treat as an alias" box to give it proper recognition.

# Step 4: The Nitty-Gritty of SMTP Server Setup

Now, let's get technical but keep it simple:

-   SMTP Server: `smtp.gmail.com`
-   Port: `587`
-   Username: `<YOUR_FULL_GMAIL_ADDRESS>`
-   Password: `<APP_PASSWORD_FROM_STEP_2>`
-   TLS: `Enabled`

After adding these details, a verification email will wing its way to you. Click the link in that email to confirm.

# Step 5: Configuring SPF Records & DMARC Policy in Cloudflare

In your Cloudflare DNS settings, add a new record:

-   Type: `TXT`
-   Name: `@`
-   TTL: `auto`
-   Content: `"v=spf1 include:_spf.mx.cloudflare.net include:_spf.google.com ~all"`

Then, under Cloudflare's Email section, activate your DMARC policy and ensure the default is correctly set with `p=none` inside the content. This helps prevent your emails from being mistaken as unwanted guests (aka spam).

# (Optional) Set Default and Use your Google Profile Picture as Your New Email's Profile Picture

## Step 1: Add Cloudflare-Routed Email Address

[Navigate to Google's email settings](https://myaccount.google.com/email) and find the `Alternate Emails` section.

Click `Add alternate email` and input your Cloudflare-routed email address.

## Step 2: Confirm Your New Identity

A confirmation email from Google will appear in your inbox. Open it and follow the prompt to finalize adding your alternate email address.

## Step 3: Set New Default

In Gmail, head to:

`Settings ➔ See all settings ➔ Accounts and Import ➔ Send mail as`

Set your Cloudflare email as the default. This step decides which email identity takes center stage when you compose messages.

(Here you will also see a few more settings you _may_ or _may not_ want to change. This includes always replying from your new Cloudflare domain instead of your default Gmail if the email's destinating was originally the Google account.)

# Wrapping It Up

And there you have it! Your Gmail SMTP is now in perfect harmony with Cloudflare Email Routing. Whether you're composing a new email or replying to an existing one, your Cloudflare address is ready for the spotlight in the From: field.
