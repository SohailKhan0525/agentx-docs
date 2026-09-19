---
sidebar_position: 8
title: Integrated Services
description: Service categories AgentX can help configure in web projects.
---

# Integrated services

AgentX can help scaffold and configure common services when the project and provider credentials support them.

## Integration map

| Category | Examples |
| --- | --- |
| **Authentication** | Clerk, Supabase Auth, Firebase Auth, NextAuth, Auth0 |
| **Databases** | Supabase, Firebase, MongoDB Atlas, Appwrite, PostgreSQL |
| **ORM / data layer** | Prisma, Drizzle |
| **Payments** | Stripe, Lemon Squeezy |
| **Email** | Resend, SendGrid, Postmark, Mailgun |
| **Storage** | Cloudflare R2, AWS S3, Supabase Storage, Uploadthing |
| **Deployment** | Vercel, Netlify, Cloudflare Pages, Railway, Fly.io, GitHub Pages |
| **Analytics / monitoring** | PostHog, Sentry, Google Analytics |

## A safe integration workflow

1. Ask AgentX to inspect the existing application.
2. Specify the provider and behavior you need.
3. Review the plan before credentials or configuration are changed.
4. Keep secrets in environment variables or the provider's recommended secret store.
5. Run the project's checks before deploying.

AgentX can write integration code; your provider account, permissions, billing, and production configuration remain under your control.
