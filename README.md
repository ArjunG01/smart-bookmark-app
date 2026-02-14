# 🚀 Smart Bookmark App

A production-ready bookmark manager built with **Next.js 14 + Supabase + Tailwind CSS**.

Users authenticate with Google, manage private bookmarks, and see instant updates without refreshing the page.

🔗 **Live App:** https://smart-bookmark-app-eta-kohl.vercel.app  
🔗 **GitHub Repo:** https://github.com/ArjunG01/smart-bookmark-app  

> Built as a fullstack technical micro-challenge submission.

---

## ✅ Challenge Requirements — Completed

| Requirement | Status |
|------------|--------|
| Google OAuth login | ✔ Completed |
| Add bookmarks | ✔ Completed |
| Delete bookmarks | ✔ Completed |
| Private per-user data | ✔ Completed |
| Real-time UI updates | ✔ Completed |
| Deployed on Vercel | ✔ Completed |
| README with problem-solving | ✔ Completed |

All assignment requirements have been implemented successfully.

---

## ✨ Features

- 🔐 Google OAuth authentication (no passwords stored)
- ➕ Add bookmarks (URL + title)
- 🗑 Delete bookmarks instantly
- 👤 Private per-user data (RLS enforced)
- ⚡ Instant UI updates after actions
- 🔄 Realtime sync with fallback reliability
- 🎨 Modern responsive UI
- 🌍 Production deployment on Vercel

---

## 🛠 Tech Stack

**Frontend**
- Next.js 14 (App Router)
- React
- TypeScript

**Backend**
- Supabase Auth
- Supabase Database
- Supabase Realtime

**Security**
- Row Level Security (RLS)

**Styling**
- Tailwind CSS

**Deployment**
- Vercel

---

## 🔐 Authentication Flow

```
User → Google Login → OAuth Callback → Supabase Session → Dashboard
```

1. User clicks **Sign in with Google**
2. Google redirects to `/auth/callback`
3. Supabase exchanges the auth code
4. Session cookie stored securely
5. User redirected to dashboard

OAuth-only authentication — no passwords stored.

---

## 🗄 Database Security (RLS)

Each bookmark is tied to the authenticated user ID.

Database policies enforce:

✔ Users only view their own data  
✔ Users only insert their own data  
✔ Users only delete their own data  
✔ Cross-user access impossible  

Security is enforced at the database level.

---

## 📦 Local Setup

### Requirements

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

Run development server:

```bash
npm run dev
```

Open:

👉 http://localhost:3000

---

## 🌍 Production Deployment

Live deployment:

👉 https://smart-bookmark-app-eta-kohl.vercel.app

Environment variables are securely configured in the Vercel dashboard.

---

## 🐛 Problems Encountered & Solutions

### 1️⃣ Supabase Realtime Timeout

**Problem**  
Realtime WebSocket occasionally failed, causing delayed UI updates.

**Solution**

- Implemented callback-based refresh fallback
- Add/Delete actions always trigger UI refresh
- Realtime kept as optional enhancement

**Result:** Reliable instant updates.

---

### 2️⃣ OAuth Redirect Timing

**Problem**  
Session cookie not ready → redirected to homepage.

**Fix**

```ts
await supabase.auth.exchangeCodeForSession(code)
```

Redirect happens only after session confirmation.

**Result:** Stable login on first attempt.

---

### 3️⃣ OAuth Environment Mismatch

**Problem**  
Different redirect URIs required for local and production.

**Solution**

Configured:

- localhost callback
- Supabase callback
- Vercel production callback

Fully documented.

---

### 4️⃣ Row Level Security

Strict RLS policies implemented to enforce per-user privacy at the database level.

---

## 🧪 Testing Checklist

- ✔ Google login works
- ✔ Bookmarks add/delete instantly
- ✔ Multiple tabs sync correctly
- ✔ Different Google accounts remain isolated

Privacy verified using multiple accounts.

---

## 🎯 Development Focus

This project was built like a real production system:

- Secure authentication
- Privacy-first database design
- Reliable UI behavior
- Clean architecture
- Professional deployment workflow
- Clear documentation

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
✔ README with problem-solving  

All challenge requirements satisfied.

---

## 🙌 Final Notes

This challenge strengthened practical understanding of:

- OAuth authentication flows
- Supabase session management
- Row Level Security
- Realtime systems
- Production deployment

The project was treated as a real-world client application.

Thank you for reviewing this submission.
