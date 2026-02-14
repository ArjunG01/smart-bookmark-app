import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = await createClient()

    // Exchange auth code for session
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // IMPORTANT: wait a moment so cookies are stored
      await new Promise(resolve => setTimeout(resolve, 300))

      return NextResponse.redirect(
        new URL('/dashboard', requestUrl.origin)
      )
    }
  }

  return NextResponse.redirect(
    new URL('/login', requestUrl.origin)
  )
}
