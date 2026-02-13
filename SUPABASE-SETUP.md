# 🚀 Supabase Setup Guide - Step by Step

Follow these steps carefully to get your Smart Bookmark App working!

---

## Step 1: Create Supabase Account & Project

### 1.1 Go to Supabase
- Open your browser and go to: **https://supabase.com**
- Click **"Start your project"** or **"Sign In"**

### 1.2 Sign Up/Login
- If new user: Sign up with GitHub (recommended) or email
- If existing user: Just sign in

### 1.3 Create New Project
1. Click **"New Project"** button
2. Fill in the following:
   - **Organization**: Select or create one
   - **Name**: `smart-bookmark-app` (or any name you like)
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to you
   - **Pricing Plan**: Free tier is perfect

3. Click **"Create new project"**
4. **WAIT ~2 minutes** for project to be created (grab a coffee ☕)

---

## Step 2: Get Your API Credentials

Once your project is ready:

### 2.1 Navigate to Settings
1. Look for the **Settings** icon (⚙️) on the left sidebar
2. Click **"API"** under Project Settings

### 2.2 Copy Your Credentials
You'll see two important values:

**Project URL:**
```
https://xxxxxxxxxxxxx.supabase.co
```
➡️ Copy this entire URL

**anon public key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS... (very long)
```
➡️ Copy this entire key

---

## Step 3: Update Your Environment File

### 3.1 Open `.env.local`
In VS Code, open:
```
C:\Users\Admin\Desktop\Task\smart-bookmark-app\.env.local
```

### 3.2 Replace with Your Credentials
Replace the placeholder text with your ACTUAL credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT-ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.YOUR-ACTUAL-KEY-HERE
```

**Example (with fake values):**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefgh12345678.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
```

### 3.3 Save the File
Press `Ctrl + S` to save

---

## Step 4: Set Up Database

### 4.1 Open SQL Editor
1. In Supabase dashboard, click **"SQL Editor"** on the left sidebar
2. Click **"New query"** button

### 4.2 Copy Database Schema
1. In VS Code, open: `C:\Users\Admin\Desktop\Task\smart-bookmark-app\supabase\schema.sql`
2. Select ALL content (Ctrl + A)
3. Copy it (Ctrl + C)

### 4.3 Run the SQL
1. Back in Supabase SQL Editor
2. Paste the SQL (Ctrl + V)
3. Click **"Run"** button (bottom right)
4. You should see: ✅ "Success. No rows returned"

This creates:
- ✅ `bookmarks` table
- ✅ Row Level Security policies
- ✅ Database indexes

---

## Step 5: Enable Realtime

### 5.1 Go to Database Settings
1. Click **"Database"** in left sidebar
2. Click **"Replication"** tab

### 5.2 Enable for Bookmarks Table
1. Find the `bookmarks` table in the list
2. Toggle the switch to **ON** (it should turn green)
3. Done! ✅

---

## Step 6: Restart Your App

### 6.1 Stop the Server
In your terminal (where `npm run dev` is running):
- Press `Ctrl + C` to stop

### 6.2 Start Again
```bash
npm run dev
```

### 6.3 Wait for Success
You should see:
```
✓ Ready in 3s
- Local: http://localhost:3000
```

---

## Step 7: Test the App! 🎉

### 7.1 Open Browser
Go to: **http://localhost:3000**

You should see:
✅ Landing page loads (no errors!)
✅ Click "Get Started" → Login page

**BUT WAIT!** You still need Google OAuth for logging in...

---

## ⏭️ Next: Google OAuth Setup

After confirming the app loads without the "invalid URL" error, let me know and I'll guide you through setting up Google OAuth so you can actually log in!

---

## 🆘 Troubleshooting

### Still seeing "invalid URL" error?
- Double-check `.env.local` has NO spaces around `=`
- Make sure you copied the ENTIRE URL and key
- Restart the server after saving `.env.local`

### Can't find Project URL?
- In Supabase: Settings (⚙️) → API → Project URL

### SQL fails to run?
- Make sure you copied ALL of `schema.sql`
- Try running each section separately if needed

---

**📍 You're currently on Step 2** - Get your Supabase credentials and update `.env.local`

Let me know when you've completed these steps and we'll move on to Google OAuth!
