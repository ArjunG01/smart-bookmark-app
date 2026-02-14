import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin

  if (code) {
    const supabase = await createClient()

    // Exchange auth code for session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Successful authentication - redirect to dashboard
      // Use absolute URL and set proper headers to force navigation
      return NextResponse.redirect(
        new URL('/dashboard', origin),
        {
          status: 303, // Use 303 See Other for proper POST-redirect-GET
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        }
      )
    }
  }

  // If no code or error, redirect to login
  return NextResponse.redirect(new URL('/login', origin))
}
