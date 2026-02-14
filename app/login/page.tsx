import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import GoogleSignInButton from '@/components/GoogleSignInButton'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default async function LoginPage() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (data?.user) {
        redirect('/dashboard')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
            {/* Navigation Bar */}
            <Navbar showAuthButtons={true} />

            {/* Login Card */}
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
                <div className="w-full max-w-md">
                    {/* Main Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-10 animate-slide-up">
                        <div className="text-center mb-8">
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
                                <span className="text-5xl">🔐</span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                                Sign In
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Access your personal bookmark collection
                            </p>
                        </div>

                        {/* Sign In Button */}
                        <GoogleSignInButton />

                        {/* Footer */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-center text-sm text-gray-500">
                                Secure authentication powered by{' '}
                                <span className="font-semibold text-indigo-600">Supabase</span>
                            </p>
                        </div>
                    </div>

                    {/* Back Link */}
                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="text-white hover:text-blue-100 font-medium transition-colors duration-300 inline-flex items-center gap-2"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
