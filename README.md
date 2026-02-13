# Smart Bookmark App

A modern bookmark manager built with Next.js 14, Supabase, and Tailwind CSS. Features Google OAuth authentication, real-time updates, and private bookmark management.

## 🌟 Features

- ✅ **Google OAuth Authentication** - Secure login with Google (no email/password)
- ✅ **Add Bookmarks** - Save bookmarks with title and URL
- ✅ **Delete Bookmarks** - Remove bookmarks you no longer need
- ✅ **Private Bookmarks** - Each user can only see their own bookmarks (RLS enabled)
- ✅ **Auto-Refresh** - Bookmarks update automatically after add/delete operations
- ✅ **Modern UI** - Clean, responsive design with dark mode support

## 🛠️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React, TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase (Authentication, Database, Realtime)
- **Deployment:** Vercel

## 🚀 Live Demo

[Live URL will be added after Vercel deployment]

## 📦 Local Setup

### Prerequisites

- Node.js 18+ installed
- A Supabase account
- A Google Cloud Console project (for OAuth)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd smart-bookmark-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase**
   
   - Create a new Supabase project
   - Run the SQL schema from `supabase/schema.sql` in the SQL Editor
   - Enable replication for the `bookmarks` table (Database → Replication)

5. **Configure Google OAuth**
   
   - Follow the guide in `GOOGLE-OAUTH-SETUP.md`
   - Add OAuth credentials to Supabase Authentication → Providers → Google

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open the app**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Supabase Setup

Detailed setup instructions are available in:
- `SUPABASE-SETUP.md` - Complete Supabase configuration guide
- `GOOGLE-OAUTH-SETUP.md` - Google OAuth setup guide
- `GET-ANON-KEY.md` - How to get the correct Supabase anon key

## 🌍 Deployment

See `DEPLOYMENT.md` for detailed Vercel deployment instructions.

## 🐛 Problems Encountered and Solutions

### 1. **Problem: Supabase Realtime WebSocket Connection Timeout**

**Issue:** The Supabase realtime WebSocket connection was failing with `TIMED_OUT` and `CLOSED` status. Bookmarks were saving to the database correctly, but the UI wasn't updating automatically without manual page refresh.

**Root Cause:** WebSocket connection issues between the client and Supabase realtime service, likely due to network/firewall restrictions or Supabase infrastructure delays.

**Solution:** Implemented a **callback-based refresh mechanism** as a reliable fallback:
- `AddBookmarkForm` calls an `onSuccess()` callback after successfully adding a bookmark
- `BookmarkItem` calls an `onDelete()` callback after successful deletion
- `DashboardClient` manages a `refreshTrigger` state that increments on callbacks
- `BookmarkList` refetches data when `refreshTrigger` changes
- Kept realtime subscription running as an enhancement (if it connects, great; if not, callbacks handle it)

**Result:** Bookmarks now appear/disappear instantly without manual page refresh, meeting the requirement functionally even though true WebSocket realtime struggled.

### 2. **Problem: Google OAuth Configuration Complexity**

**Issue:** Setting up Google OAuth required multiple steps across Google Cloud Console and Supabase, with specific redirect URIs and credentials.

**Solution:** 
- Created comprehensive step-by-step guide (`GOOGLE-OAUTH-SETUP.md`)
- Documented exact redirect URIs needed for both local development and production
- Provided troubleshooting section for common OAuth errors

### 3. **Problem: Row Level Security (RLS) Configuration**

**Issue:** Ensuring bookmarks are truly private to each user required proper RLS policies.

**Solution:**
- Implemented RLS policies in `supabase/schema.sql`:
  - `INSERT` policy: Users can only insert bookmarks with their own `user_id`
  - `SELECT` policy: Users can only view their own bookmarks
  - `UPDATE` policy: Users can only update their own bookmarks
  - `DELETE` policy: Users can only delete their own bookmarks
- Added indexes on `user_id` for query performance

### 4. **Problem: Next.js App Router SSR with Supabase**

**Issue:** Next.js App Router requires different Supabase client configurations for server components vs. client components.

**Solution:**
- Created separate client factories:
  - `lib/supabase/client.ts` - For client components
  - `lib/supabase/server.ts` - For server components with cookie handling
  - `lib/supabase/middleware.ts` - For session refresh in middleware
- Used proper `'use client'` directives for interactive components

## 📁 Project Structure

```
smart-bookmark-app/
├── app/                    # Next.js App Router pages
│   ├── auth/              # OAuth callback handlers
│   ├── dashboard/         # Main dashboard page
│   ├── login/             # Login page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # React components
│   ├── AddBookmarkForm.tsx
│   ├── BookmarkItem.tsx
│   ├── BookmarkList.tsx
│   ├── DashboardClient.tsx
│   ├── GoogleSignInButton.tsx
│   └── SignOutButton.tsx
├── lib/                   # Utilities
│   ├── supabase/         # Supabase client configurations
│   └── types/            # TypeScript types
├── supabase/             # Database schema
│   └── schema.sql        # SQL schema with RLS policies
├── .env.local            # Environment variables (not in repo)
└── README.md            # This file
```

## 🧪 Testing

To test the app thoroughly:

1. **Authentication**
   - Try logging in with Google
   - Verify redirect to dashboard after login
   - Test logout functionality

2. **Bookmarks**
   - Add a bookmark with title and URL
   - Verify it appears immediately
   - Delete a bookmark and verify it disappears
   
3. **Privacy**
   - Log in with Account A, add bookmarks
   - Log out, log in with Account B
   - Verify Account B cannot see Account A's bookmarks

4. **Auto-Refresh**
   - Open dashboard in two browser tabs
   - Add a bookmark in Tab 1
   - Verify it appears in Tab 2 (may require clicking to focus)

## 📝 License

This project was created as a technical assessment.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Supabase for the backend infrastructure
- Tailwind CSS for the styling utilities
