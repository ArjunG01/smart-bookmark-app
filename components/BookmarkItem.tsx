'use client'

import { useState } from 'react'
import { deleteBookmark } from '@/app/actions'

export default function BookmarkItem({
    id,
    title,
    url,
    createdAt,
    onDelete,
}: {
    id: string
    title: string
    url: string
    createdAt: string
    onDelete?: () => void
}) {
    const [deleting, setDeleting] = useState(false)

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this bookmark?')) {
            return
        }

        setDeleting(true)
        try {
            await deleteBookmark(id)
            onDelete?.()
        } catch (error) {
            console.error('Error deleting:', error)
            setDeleting(false)
        }
    }

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return (
        <div className="group flex items-center justify-between p-5 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-300">
            <div className="flex-1 min-w-0 pr-4">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 mb-1">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 truncate mb-2">
                        {url}
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                        Added on {formattedDate}
                    </p>
                </a>
            </div>

            <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 shadow-md"
            >
                {deleting ? '...' : 'Delete'}
            </button>
        </div>
    )
}
