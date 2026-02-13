'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Bookmark } from '@/lib/types/database.types'
import BookmarkItem from './BookmarkItem'

export default function BookmarkList({ userId, refreshTrigger }: { userId: string, refreshTrigger?: number }) {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    const fetchBookmarks = useCallback(async () => {
        const { data, error } = await supabase
            .from('bookmarks')
            .select('*')
            .eq('user_id', userId)
            .order('created_at', { ascending: false })

        if (!error && data) {
            setBookmarks(data)
        }
        setLoading(false)
    }, [userId, supabase])

    useEffect(() => {
        fetchBookmarks()
    }, [fetchBookmarks, refreshTrigger])

    // Optional: Try realtime subscription as enhancement (graceful degradation)
    useEffect(() => {
        const channel = supabase
            .channel(`bookmarks-${userId}`)
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'bookmarks',
                    filter: `user_id=eq.${userId}`,
                },
                (payload) => {
                    console.log('Realtime event:', payload.eventType)
                    // Refetch on any change for reliability
                    fetchBookmarks()
                }
            )
            .subscribe((status) => {
                console.log('Realtime status:', status)
            })

        return () => {
            supabase.removeChannel(channel)
        }
    }, [userId, supabase, fetchBookmarks])

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    if (bookmarks.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No bookmarks yet. Add your first bookmark above!
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {bookmarks.map((bookmark) => (
                <BookmarkItem key={bookmark.id} bookmark={bookmark} onDelete={fetchBookmarks} />
            ))}
        </div>
    )
}
