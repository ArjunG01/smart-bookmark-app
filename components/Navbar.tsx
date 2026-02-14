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
        <nav className="bg-transparent backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">📚</span>
                        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:scale-105 transition-all duration-300">
                            Smart Bookmark
                        </h1>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4">
                        {!isDashboard && showAuthButtons && (
                            <>
                                <Link
                                    href="/"
                                    className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isHome
                                            ? 'bg-white/30 text-white font-semibold shadow-lg'
                                            : 'text-white/90 hover:text-white hover:bg-white/20'
                                        }`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/login"
                                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg ${isLogin
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                            : 'bg-white text-purple-600 hover:bg-gray-100 hover:scale-105'
                                        }`}
                                >
                                    Sign In
                                </Link>
                            </>
                        )}

                        {isDashboard && userEmail && (
                            <>
                                <span className="text-sm text-white px-4 py-2 bg-white/20 rounded-full hidden md:block font-medium shadow-md">
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
