function Setting() {
    const toggleDarkMode = ()=>{
        
        if (document.documentElement.classList.contains('dark'))
        {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light")
        }
        else
        {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        }
        console.log('here')
    }
    return (
        <div>
            <h2 className="text-5xl font-semibold dark:text-gray-300">Settings</h2>
            <div className="mt-5 flex justify-between w-[90%] shadow-xl rounded-lg p-2 items-center border-2 dark:border-0 dark:bg-black px-5 h-16">
                <span className="dark:text-gray-200">Dark Mode</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onChange={toggleDarkMode} />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
    )
}

export default Setting