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
        <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📚</span>
                        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                            Smart Bookmark
                        </h1>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4">
                        {!isDashboard && showAuthButtons && (
                            <>
                                <Link
                                    href="/"
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${isHome
                                            ? 'bg-white/20 text-white font-semibold'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/login"
                                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${isLogin
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                                            : 'bg-white text-purple-600 hover:bg-gray-100 hover:scale-105'
                                        }`}
                                >
                                    Sign In
                                </Link>
                            </>
                        )}

                        {isDashboard && userEmail && (
                            <>
                                <span className="text-sm text-white/80 px-3 py-1 bg-white/20 rounded-full hidden md:block">
                                    {userEmail}
                                </span>
                                <button
                                    onClick={onSignOut}
                                    className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 hover:scale-105 transition-all duration-300 shadow-lg"
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
