'use client'

import { useState } from 'react'
import BookmarkList from '@/components/BookmarkList'
import AddBookmarkForm from '@/components/AddBookmarkForm'
import Navbar from '@/components/Navbar'
import { createClient } from '@/lib/supabase/client'

export default function DashboardClient({ userId, userEmail }: { userId: string, userEmail: string }) {
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    const handleBookmarkAdded = () => {
        // Trigger refresh by changing the number
        setRefreshTrigger(prev => prev + 1)
    }

    const handleSignOut = async () => {
        try {
            const supabase = createClient()
            await supabase.auth.signOut()
            // Use window.location for a clean redirect after sign out
            window.location.href = '/'
        } catch (error) {
            console.error('Sign out error:', error)
            // Still redirect even if there's an error
            window.location.href = '/'
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <Navbar showAuthButtons={false} userEmail={userEmail} onSignOut={handleSignOut} />

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto space-y-6">
                    {/* Page Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookmarks</h1>
                        <p className="text-gray-600 text-lg">Manage and organize your personal bookmark collection</p>
                    </div>

                    {/* Add Bookmark Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">✨</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Add New Bookmark
                            </h2>
                        </div>
                        <AddBookmarkForm userId={userId} onSuccess={handleBookmarkAdded} />
                    </div>

                    {/* Bookmarks List Section */}
                    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                Saved Bookmarks
                            </h2>
                        </div>
                        <BookmarkList userId={userId} refreshTrigger={refreshTrigger} />
                    </div>
                </div>
            </main>
        </div>
    )
}
