'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AddBookmarkForm({ userId, onSuccess }: { userId: string, onSuccess?: () => void }) {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            const supabase = createClient()

            const { error: insertError } = await supabase
                .from('bookmarks')
                .insert({
                    user_id: userId,
                    title,
                    url,
                })

            if (insertError) throw insertError

            // Show success animation
            setSuccess(true)

            // Reset form
            setTitle('')
            setUrl('')

            // Call onSuccess callback to refresh the list
            if (onSuccess) {
                onSuccess()
            }

            // Clear success message after 2 seconds
            setTimeout(() => setSuccess(false), 2000)
        } catch (err: any) {
            setError(err.message || 'Failed to add bookmark')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 rounded-lg animate-slide-up">
                    {error}
                </div>
            )}

            {success && (
                <div className="p-3 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 rounded-lg animate-slide-up flex items-center gap-2">
                    <span className="text-xl">✅</span>
                    Bookmark added successfully!
                </div>
            )}

            <div className="space-y-2">
                <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-base bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300 hover:border-purple-400 shadow-sm"
                    placeholder="Enter bookmark title"
                />
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="url"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-200"
                >
                    URL
                </label>
                <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-base bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 dark:text-white placeholder-gray-400 transition-all duration-300 hover:border-purple-400 shadow-sm"
                    placeholder="https://example.com"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
            >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Adding...
                    </span>
                ) : (
                    'Add Bookmark'
                )}
            </button>
        </form>
    )
}
