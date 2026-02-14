import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default async function Home() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data?.user) {
        redirect('/dashboard')
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            {/* Navigation Bar */}
            <Navbar showAuthButtons={true} />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20 animate-fade-in">
                        <div className="mb-8 text-9xl animate-float">📚</div>
                        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
                            Smart Bookmark Manager
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Professional bookmark organization system. Secure, fast, and accessible from anywhere.
                        </p>
                        <Link
                            href="/login"
                            className="inline-block px-10 py-5 bg-white text-indigo-700 font-bold text-lg rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-900/50 animate-slide-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Get Started →
                        </Link>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-24">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-4xl">🔐</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Secure Authentication
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Enterprise-grade security with Google OAuth integration. Your data is protected with industry-standard encryption.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-4xl">⚡</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Real-Time Sync
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Instant synchronization across all your devices. Changes appear immediately without manual refresh.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                            <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                                <span className="text-4xl">🔒</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Private & Secure
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your bookmarks are completely private. Row-level security ensures data isolation between users.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack Section */}
                    <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <p className="text-blue-100 text-lg font-medium">
                            Built with Next.js 14 • Supabase • TypeScript • Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
