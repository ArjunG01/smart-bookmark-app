# 🔑 Get Your Supabase Anon Key

You're almost there! You gave me the **Publishable Key**, but we need the **anon/public key** instead.

## Quick Steps:

### In Your Supabase Dashboard:

1. Go to **Settings** (⚙️ icon on left sidebar)
2. Click **API** 
3. Look for the section called **Project API keys**
4. Find the key labeled **"anon" "public"** (NOT "publishable")
   - It will be a VERY long string
   - Starts with `eyJhbGc...`
   - Much longer than the publishable key
5. Click the **Copy** button next to it

### Example:
```
anon public key:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaXllYWx2c2R1enV3Y2prYmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5OTIwMDAsImV4cCI6MjAyNDU2ODAwMH0.abc123def456...
```

## Paste it here:

Once you have it, just paste the full key in the chat and I'll update the config!

---

**Why we need this specific key:**
- The `anon` key is for client-side (browser) access
- The `publishable` key is a newer Supabase feature for different purposes
- Our Next.js app needs the `anon` key to work properly
