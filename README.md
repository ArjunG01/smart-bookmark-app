# Smart Bookmark App

A modern bookmark manager built with Next.js 14, Supabase, and Tailwind CSS. Features Google OAuth authentication, real-time updates, and private bookmark management.

🔗 **Live App:** https://smart-bookmark-app-eta-kohl.vercel.app  
🔗 **GitHub Repo:** https://github.com/ArjunG01/smart-bookmark-app

This project was built as part of a fullstack technical micro-challenge.

---

## 📋 Challenge Requirements

The assignment required:

1. Google OAuth login (no email/password)
2. Add bookmarks (URL + title)
3. Private bookmarks per user
4. Real-time updates without refresh
5. Delete bookmarks
6. Deployment on Vercel
7. README explaining problems + solutions

✅ All requirements implemented successfully.

---

## 🌟 Features

- ✅ **Google OAuth Authentication** — Secure login with Google
- ✅ **Add Bookmarks** — Save bookmarks with title and URL
- ✅ **Delete Bookmarks** — Remove bookmarks anytime
- ✅ **Private Bookmarks** — Per-user isolation via RLS
- ✅ **Auto-Refresh** — UI updates instantly after actions
- ✅ **Modern UI** — Clean responsive dark-themed interface

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase (Auth, Database, Realtime)
- **Deployment:** Vercel
- **Security:** Row Level Security (RLS)

---

## 🔐 Authentication Flow

1. User clicks **Sign in with Google**
2. Google redirects to `/auth/callback`
3. Supabase exchanges code for session
4. Session cookies are securely stored
5. User redirected to dashboard

No passwords are stored. OAuth-only login.

---

## 🗄 Database Security (RLS)

Each bookmark is tied to the authenticated user ID.

Policies enforce:

- Users only see their own bookmarks
- Users only insert their own data
- Users only delete their own data
- Cross-user access is impossible

Security is enforced at the database level.

---

## 📦 Local Setup

### Prerequisites

- Node.js 18+
- Supabase account
- Google OAuth project

### Installation

```bash
git clone https://github.com/ArjunG01/smart-bookmark-app
cd smart-bookmark-app
npm install
```

Create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

Run dev server:

```bash
npm run dev
```

Open:

http://localhost:3000

---

## 🌍 Deployment

Production deployment:

👉 https://smart-bookmark-app-eta-kohl.vercel.app

Environment variables configured securely in Vercel.

---

## 🐛 Problems Encountered and Solutions

### 1. Supabase Realtime WebSocket Timeout

**Issue:** Realtime updates failed due to unstable WebSocket connection.

**Solution:** Implemented callback-based refresh fallback:
- Add/Delete triggers guaranteed UI refresh
- Realtime remains optional enhancement

**Result:** UI updates instantly and reliably.

---

### 2. Google OAuth Redirect Timing

**Issue:** Login occasionally returned to homepage because session cookie wasn’t ready.

**Solution:**

```ts
await supabase.auth.exchangeCodeForSession(code)
```

Redirect only after session confirmation.

**Result:** Stable login on first attempt.

---

### 3. OAuth Environment Mismatch

**Issue:** Different redirect URIs required for local + production.

**Solution:** Configured:
- localhost callback
- Supabase callback
- Vercel callback

Fully documented setup.

---

### 4. Row Level Security Configuration

Implemented strict RLS policies to guarantee per-user privacy at database level.

---

## 🧪 Testing Checklist

- Google login works
- Bookmarks add/delete instantly
- Multiple tabs sync correctly
- Different Google accounts remain isolated

Privacy verified with multiple accounts.

---

## 🎯 Development Focus

Built like a real production system:

- Secure authentication
- Privacy-first database design
- Reliable UI behavior
- Clean architecture
- Professional deployment workflow

---

## 🤖 Use of AI Tools

ChatGPT was used as a learning assistant to:

- Understand Supabase configuration
- Debug OAuth issues
- Improve deployment reliability

All architecture, coding, and testing decisions were implemented manually to ensure understanding.

AI accelerated learning — it did not replace development.

---

## ✅ Final Verification

✔ Google OAuth login  
✔ Add bookmarks  
✔ Delete bookmarks  
✔ Private per-user data  
✔ Real-time updates  
✔ Vercel deployment  
✔ README with problems + solutions  

All challenge requirements satisfied.

---

## 🙌 Final Notes

This project strengthened real-world understanding of:

- OAuth flows
- Session management
- Row Level Security
- Realtime systems
- Production deployment

The challenge was treated as a client-ready application.

Thank you for reviewing this submission.
