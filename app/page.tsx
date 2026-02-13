import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Home() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data?.user) {
        redirect('/dashboard')
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Hero Section */}
                    <div className="mb-16 animate-fade-in">
                        <div className="mb-6 text-8xl animate-float">📚</div>
                        <h1 className="text-7xl font-bold text-white mb-6 animate-slide-up hover:scale-105 transition-transform duration-300 cursor-default">
                            Smart Bookmark
                        </h1>
                        <p className="text-2xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            Organize, manage, and access your bookmarks from anywhere
                        </p>
                        <Link
                            href="/login"
                            className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 hover:scale-110 transition-all duration-300 transform shadow-2xl hover:shadow-purple-500/50 animate-slide-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 mt-20">
                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 card-hover animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="text-5xl mb-4 animate-float">🔐</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Secure Authentication
                            </h3>
                            <p className="text-white/80">
                                Sign in securely with your Google account
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 card-hover animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '0.5s' }}>⚡</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Instant Updates
                            </h3>
                            <p className="text-white/80">
                                Your bookmarks update automatically without refresh
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 card-hover animate-slide-up" style={{ animationDelay: '0.5s' }}>
                            <div className="text-5xl mb-4 animate-float" style={{ animationDelay: '1s' }}>🔒</div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Private & Secure
                            </h3>
                            <p className="text-white/80">
                                Your bookmarks are private and secure with RLS
                            </p>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <p className="text-white/70 text-lg">
                            Built with Next.js 14, Supabase, and Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
