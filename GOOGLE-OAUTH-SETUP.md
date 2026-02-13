# 🔐 Google OAuth Setup Guide

You're seeing this error because Google OAuth isn't enabled in Supabase yet. Let's fix it!

## Error You're Seeing:
```
Unsupported provider: provider is not enabled
```

This is **normal** - we just need to enable Google OAuth in Supabase!

---

## Part 1: Enable Google Provider in Supabase (Quick - 1 minute)

### Step 1: Go to Authentication Settings
1. In your **Supabase Dashboard**
2. Click **Authentication** (🔐 icon) on left sidebar
3. Click **Providers** tab at the top

### Step 2: Enable Google (Temporarily)
1. Scroll down and find **Google**
2. Toggle it **ON** (switch to enabled)
3. For now, just click **Save** (we'll add credentials in Part 2)

**Note**: This enables the provider, but login won't fully work until we add Google credentials.

---

## Part 2: Get Google OAuth Credentials (5 minutes)

### Step 1: Go to Google Cloud Console
1. Open: https://console.cloud.google.com/
2. Sign in with your Google account

### Step 2: Create a Project (if you don't have one)
1. Click **Select a project** (top bar)
2. Click **NEW PROJECT**
3. Project name: `Smart Bookmark App`
4. Click **CREATE**
5. Wait a few seconds, then select your new project

### Step 3: Enable Google+ API
1. In the search bar, type: `Google+ API`
2. Click on **Google+ API**
3. Click **ENABLE**
4. Wait for it to enable (~10 seconds)

### Step 4: Create OAuth Credentials
1. Go to **APIs & Services** → **Credentials** (left sidebar)
2. Click **CREATE CREDENTIALS** → **OAuth client ID**

**If you see "Configure consent screen" warning:**
1. Click **Configure Consent Screen**
2. Choose **External**
3. Click **CREATE**
4. Fill in required fields:
   - **App name**: Smart Bookmark App
   - **User support email**: Your email
   - **Developer contact**: Your email
5. Click **SAVE AND CONTINUE**
6. Skip "Scopes" (click **SAVE AND CONTINUE**)
7. Skip "Test users" (click **SAVE AND CONTINUE**)
8. Click **BACK TO DASHBOARD**

### Step 5: Create OAuth Client ID (Continue)
1. Click **CREATE CREDENTIALS** → **OAuth client ID**
2. Application type: **Web application**
3. Name: `Smart Bookmark App`

### Step 6: Add Authorized Redirect URIs
Add BOTH of these URIs:

```
http://localhost:3000/auth/callback
```

```
https://qdiyealvsduzuwcjkbby.supabase.co/auth/v1/callback
```

**Important**: The second one uses YOUR Supabase project URL!

### Step 7: Copy Credentials
After clicking **CREATE**, you'll see:
- **Client ID**: Copy this (looks like: `123456789-abc.apps.googleusercontent.com`)
- **Client Secret**: Copy this (looks like: `GOCSPX-abc123...`)

---

## Part 3: Add Credentials to Supabase

### Step 1: Back to Supabase
1. Go to **Authentication** → **Providers**
2. Find **Google** (should be enabled from Part 1)
3. Click to expand Google settings

### Step 2: Add Your Credentials
Paste the values you copied:
- **Client ID**: (from Google Console)
- **Client Secret**: (from Google Console)

### Step 3: Save
1. Click **Save**
2. Done! ✅

---

## Part 4: Test Login! 🎉

### Step 1: Refresh Your App
Go to: http://localhost:3000

### Step 2: Try Logging In
1. Click **"Get Started"**
2. Click **"Continue with Google"**
3. Choose your Google account
4. Grant permissions

### Step 3: Success!
You should be redirected to the **Dashboard**!

---

## 🆘 Troubleshooting

### Error: "redirect_uri_mismatch"
- Check that you added BOTH redirect URIs in Google Console
- Make sure there are no typos in the URLs
- URLs must match EXACTLY (including `http` vs `https`)

### Error: "Access blocked"
- You need to configure the OAuth consent screen
- See "Step 4" in Part 2 above

### Still seeing "provider not enabled"
- Make sure you clicked **Save** in Supabase after enabling Google
- Try refreshing the Supabase dashboard

---

## 📍 Where Are You Now?

**Start with Part 1** to enable Google in Supabase, then follow Parts 2-3 to get full login working!

Let me know when you're ready to start, or if you need help with any step! 🚀
