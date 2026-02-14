# Smart Bookmark App

A production-ready bookmark manager built with Next.js 14, Supabase, and Tailwind CSS.

Users sign in with Google, save private bookmarks, and see updates instantly without refreshing the page.

🔗 Live App: https://smart-bookmark-app-eta-kohl.vercel.app  
🔗 GitHub Repo: https://github.com/ArjunG01/smart-bookmark-app

---

## 🚀 Features

- Google OAuth authentication (no email/password)
- Add bookmarks (URL + title)
- Delete bookmarks
- Private bookmarks per user
- Instant UI updates without manual refresh
- Realtime sync with fallback reliability
- Secure Row Level Security (RLS)
- Clean modern responsive UI
- Production deployment on Vercel

---

## 🛠 Tech Stack

Frontend:
- Next.js 14 (App Router)
- React
- TypeScript

Backend:
- Supabase Auth
- Supabase Database
- Supabase Realtime

Security:
- Row Level Security (RLS)

Styling:
- Tailwind CSS

Deployment:
- Vercel

---

## 🔐 Authentication Flow

1. User clicks **Sign in with Google**
2. Google redirects to `/auth/callback`
3. Supabase exchanges auth code for session
4. Session cookies are stored securely
5. User is redirected to dashboard

This ensures secure login without storing passwords.

---

## 🗄 Database Security (RLS)

Each bookmark is tied to the authenticated user ID.

RLS policies enforce:

- Users can only view their own bookmarks
- Users can only insert bookmarks with their own ID
- Users can only delete their own bookmarks
- No cross-user data access is possible

Even direct database queries cannot bypass this security.

---

## 🐛 Problems Encountered & Solutions

### 1. OAuth redirect timing issue

Problem:  
After login, the app sometimes returned to the homepage instead of dashboard. The session cookie was not ready yet.

Solution:  
Wait for Supabase session exchange before redirect:

```ts
await supabase.auth.exchangeCodeForSession(code)
```

Redirect only happens after session confirmation.

Result: Login is stable and consistent on first attempt.

---

### 2. Realtime WebSocket instability

Problem:  
Supabase realtime connection occasionally timed out, causing delayed UI updates.

Solution:

- Implemented callback-based refresh fallback
- Add/Delete triggers guaranteed UI refresh
- Realtime remains active as enhancement

Result: UI always updates instantly even if realtime fails.

---

### 3. OAuth environment mismatch

Problem:  
Google OAuth required separate redirect URIs for local and production.

Solution:

Configured all environments:

- localhost callback
- Supabase callback
- Vercel production callback

Documented setup clearly.

---

## 📦 Local Setup

Clone repo:

```bash
git clone https://github.com/ArjunG01/smart-bookmark-app
cd smart-bookmark-app
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🧪 Testing Checklist

- Sign in with Google
- Add bookmarks
- Delete bookmarks
- Open in two tabs → updates sync
- Login with another Google account → data stays private

---

## 🌍 Deployment

The app is deployed on Vercel:

https://smart-bookmark-app-eta-kohl.vercel.app

Environment variables configured securely in Vercel dashboard.

---

## 🎯 Development Focus

This project was built like a real production app with focus on:

- Secure authentication
- Privacy-first database design
- Reliable UI behavior
- Clean architecture
- Professional documentation
- Real-world deployment workflow

---

## ✅ Challenge Requirements Checklist

- Google OAuth login ✔
- Add bookmarks ✔
- Delete bookmarks ✔
- Private per-user data ✔
- Real-time UI updates ✔
- Deployed on Vercel ✔
- README with problem-solving ✔

---

## 🤖 Use of AI Tools

ChatGPT was used as a learning assistant to:

- Understand Supabase configuration
- Debug OAuth issues
- Improve deployment reliability

All implementation, testing, and architecture decisions were manually handled to ensure full understanding.

AI accelerated learning — it did not replace development.

---

## 🙌 Final Notes

This challenge strengthened understanding of:

- OAuth authentication flows
- Supabase session management
- Row Level Security
- Realtime systems
- Production deployment

The project was treated as a real-world client application.

Thank you for reviewing the submission.
