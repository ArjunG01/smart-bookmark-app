import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import GoogleSignInButton from '@/components/GoogleSignInButton'
import Navbar from '@/components/Navbar'

export default async function LoginPage() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data?.user) {
        redirect('/dashboard')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Navigation Bar */}
            <Navbar showAuthButtons={true} />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Login Card */}
            <div className="relative flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
                <div className="w-full max-w-md">
                    {/* Main Card */}
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 animate-slide-up">
                        <div className="text-center mb-8">
                            <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 animate-float">
                                <span className="text-5xl">🔐</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-3">
                                Sign In
                            </h2>
                            <p className="text-gray-200 text-lg">
                                Access your personal bookmark collection
                            </p>
                        </div>

                        <GoogleSignInButton />

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-400">
                                Secure authentication powered by Supabase
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
        </div>
    )
}
