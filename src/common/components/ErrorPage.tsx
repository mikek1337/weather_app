function ErrorPage() {
    return (
        //tailwindcss 500 error page
        <div className="flex flex-col items-center justify-center min-h-screen py-2  sm:px-6 lg:px-8 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center w-full space-y-8">
                <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                </div>

    )
}

export default ErrorPage