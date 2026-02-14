'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar({
    showAuthButtons = true,
    userEmail,
    onSignOut
}: {
    showAuthButtons?: boolean,
    userEmail?: string,
    onSignOut?: () => void
}) {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const isLogin = pathname === '/login'
    const isDashboard = pathname === '/dashboard'

    return (
        <nav className="bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📚</span>
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300">
                            Smart Bookmark
                        </h1>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4">
                        {!isDashboard && showAuthButtons && (
                            <>
                                <Link
                                    href="/"
                                    className={`px-5 py-2 rounded-lg transition-all duration-300 font-semibold ${isHome
                                            ? 'bg-indigo-600 text-white shadow-md'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
                                        }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/login"
                                    className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md ${isLogin
                                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'
                                        }`}
                                >
                                    Sign In
                                </Link>
                            </>
                        )}

                        {isDashboard && userEmail && (
                            <>
                                <span className="text-sm text-gray-700 px-4 py-2 bg-gray-100 rounded-lg hidden md:block font-medium border border-gray-200">
                                    {userEmail}
                                </span>
                                <button
                                    onClick={onSignOut}
                                    className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-md"
                                >
                                    Sign Out
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
