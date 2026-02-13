import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  // If Google sent back an auth code
  if (code) {
    const supabase = await createClient()

    // Exchange code for session (this sets cookies)
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Redirect only AFTER session is stored
      return NextResponse.redirect(
        new URL('/dashboard', requestUrl.origin)
      )
    }
  }

  // If something failed, go back to login
  return NextResponse.redirect(
    new URL('/login', requestUrl.origin)
  )
}
