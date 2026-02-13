# Deployment Guide - Vercel

## Prerequisites

- GitHub/GitLab/Bitbucket account
- Vercel account (free tier)
- Completed Supabase and Google OAuth setup

## Step 1: Push to Git Repository

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Smart Bookmark App"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/smart-bookmark-app.git

# Push
git push -u origin main
```

## Step 2: Import to Vercel

1. Visit [vercel.com](https://vercel.com) and sign in
2. Click **New Project**
3. Import your Git repository
4. Vercel will auto-detect Next.js configuration

## Step 3: Configure Environment Variables

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add these variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |

3. Click **Save**

## Step 4: Deploy

1. Click **Deploy**
2. Wait for deployment (usually 1-2 minutes)
3. Copy your deployment URL (e.g., `https://your-app.vercel.app`)

## Step 5: Update OAuth Redirect URIs

### Update Google Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to your OAuth credentials
3. Add **Authorized redirect URIs**:
   ```
   https://your-app.vercel.app/auth/callback
   ```
4. Save changes

### Update Supabase

1. Go to Supabase dashboard
2. Navigate to **Authentication** → **URL Configuration**
3. Add to **Redirect URLs**:
   ```
   https://your-app.vercel.app/auth/callback
   ```
4. Update **Site URL** to:
   ```
   https://your-app.vercel.app
   ```

## Step 6: Test Production

1. Visit your Vercel URL
2. Click "Get Started"
3. Sign in with Google
4. Test adding/deleting bookmarks
5. Open multiple tabs to test realtime sync

## Automatic Deployments

Every push to your `main` branch will automatically deploy:

```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Vercel automatically deploys!
```

## Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update redirect URIs with new domain

## Troubleshooting

### Build fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript has no errors locally

### OAuth not working
- Verify redirect URIs match exactly (including https://)
- Check Supabase and Google Console settings
- Wait a few minutes after changing settings

### Environment variables not working
- Ensure variables are added in Vercel dashboard
- Redeploy after adding variables
- Variable names must match exactly

## Monitoring

- View deployment logs in Vercel dashboard
- Check **Analytics** for performance metrics
- Use **Runtime Logs** for debugging

---

🎉 **Congratulations!** Your Smart Bookmark App is now live!
