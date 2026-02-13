# Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd smart-bookmark-app
npm install
```

## Step 2: Supabase Project

1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy Project URL and anon key from Settings → API

## Step 3: Database Schema

1. Go to SQL Editor in Supabase
2. Paste contents from `supabase/schema.sql`
3. Click Run

## Step 4: Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth Client ID
3. Add redirect URI: `https://YOUR-PROJECT.supabase.co/auth/v1/callback`
4. Copy Client ID and Secret
5. Add to Supabase → Authentication → Providers → Google

## Step 5: Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## Step 6: Run App

```bash
npm run dev
```

Visit http://localhost:3000

Done! 🎉
