'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function signInWithGoogle() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'https://smart-bookmark-app-eta-kohl.vercel.app/auth/callback',
        },
    })

    if (error) {
        console.error('OAuth error:', error)
        redirect('/login?error=auth_failed')
    }

    if (data.url) {
        redirect(data.url)
    }
}

export async function addBookmark(formData: FormData) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('Not authenticated')
    }

    const title = formData.get('title') as string
    const url = formData.get('url') as string

    const { error } = await supabase
        .from('bookmarks')
        .insert({
            title,
            url,
            user_id: user.id,
        })

    if (error) {
        throw error
    }

    revalidatePath('/dashboard')
}

export async function deleteBookmark(id: string) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        throw new Error('Not authenticated')
    }

    const { error } = await supabase
        .from('bookmarks')
        .delete()
        .eq('id', id)
        .eq('user_id', user.id)

    if (error) {
        throw error
    }

    revalidatePath('/dashboard')
}
