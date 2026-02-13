'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { Bookmark } from '@/lib/types/database.types'

export default function BookmarkItem({ bookmark, onDelete }: { bookmark: Bookmark, onDelete?: () => void }) {
    const [deleting, setDeleting] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this bookmark?')) return

        setDeleting(true)
        const supabase = createClient()
        await supabase.from('bookmarks').delete().eq('id', bookmark.id)

        // Call the onDelete callback to refresh the list
        if (onDelete) {
            onDelete()
        }
    }

    return (
        <div
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-650 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg animate-slide-in-left"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex-1 min-w-0">
                <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <h3 className={`text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`}>
                        {bookmark.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                        {bookmark.url}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                        {new Date(bookmark.created_at).toLocaleDateString()}
                    </p>
                </a>
            </div>

            <button
                onClick={handleDelete}
                disabled={deleting}
                className="ml-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 shadow-md hover:shadow-red-500/50"
            >
                {deleting ? '...' : 'Delete'}
            </button>
        </div>
    )
}
