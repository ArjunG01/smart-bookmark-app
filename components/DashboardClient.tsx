'use client'

import { useState } from 'react'
import BookmarkList from '@/components/BookmarkList'
import AddBookmarkForm from '@/components/AddBookmarkForm'
import SignOutButton from '@/components/SignOutButton'
import Link from 'next/link'

export default function DashboardClient({ userId, userEmail }: { userId: string, userEmail: string }) {
    const [refreshTrigger, setRefreshTrigger] = useState(0)

    const handleBookmarkAdded = () => {
        // Trigger refresh by changing the number
        setRefreshTrigger(prev => prev + 1)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Navbar */}
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 animate-slide-in-left">
                            <Link href="/" className="flex items-center gap-2 group">
                                <span className="text-2xl group-hover:scale-110 transition-transform">📚</span>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 cursor-pointer">
                                    Smart Bookmark
                                </h1>
                            </Link>
                            <span className="text-sm text-gray-500 dark:text-gray-400 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                                {userEmail}
                            </span>
                        </div>
                        <div className="animate-fade-in">
                            <SignOutButton />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Add Bookmark Form */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slide-up">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl animate-pulse-slow">✨</span>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Add New Bookmark
                            </h2>
                        </div>
                        <AddBookmarkForm userId={userId} onSuccess={handleBookmarkAdded} />
                    </div>

                    {/* Bookmarks List */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}>📚</span>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                My Bookmarks
                            </h2>
                        </div>
                        <BookmarkList userId={userId} refreshTrigger={refreshTrigger} />
                    </div>
                </div>
            </main>

            {/* Floating Background Decoration */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
        </div>
    )
}
