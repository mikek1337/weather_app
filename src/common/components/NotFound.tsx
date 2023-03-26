function NotFound()
{
    return(
        //tailwindcss error page
        <div className="flex flex-col items-center justify-center min-h-screen py-2  sm:px-6 lg:px-8 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center w-full space-y-8">
                <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <div className="flex items-center justify-center w-16 h-16 text-white bg-red-500 dark:bg-purple-500 rounded-full">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900">404</h1>
                    <p className="text-xl font-medium text-gray-500">Page not found</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <p className="text-lg font-medium text-gray-500">The page you are looking for does not exist.</p>
                    <p className="text-lg font-medium text-gray-500">You may have mistyped the address or the page may have moved.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full space-y-2">
                    <a href="/" className="px-4 py-2 text-lg font-medium text-white bg-red-500 rounded-md dark:bg-purple-500 hover:bg-red-600">Go to home</a>
                </div>
            </div>
        </div>
        
    )
}

export default NotFound