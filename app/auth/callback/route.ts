import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const supabase = await createClient()

    // exchange auth code → session cookie
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // force hard redirect so cookies are applied
      const response = NextResponse.redirect(
        new URL('/dashboard', requestUrl.origin)
      )

      response.headers.set('Cache-Control', 'no-store')
      return response
    }
  }

  return NextResponse.redirect(
    new URL('/login', requestUrl.origin)
  )
}
