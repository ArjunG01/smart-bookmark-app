export default function AuthCodeErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                    Authentication Error
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Sorry, we couldn't sign you in. Please try again.
                </p>
                <a
                    href="/login"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Back to Login
                </a>
            </div>
        </div>
    )
}
