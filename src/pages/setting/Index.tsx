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
        <div className="mt-2">
            <h2 className="text-3xl font-semibold dark:text-white">Settings</h2>
            <div className="flex border-2  w-[90%] justify-between mt-5 items-center px-5 rounded-full shadow-xl dark:bg-slate-900 dark:shadow-slate-800">
                <h4 className="font-semibold dark:text-white">Dark mode</h4>
                <div className="pt-5">
                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" onChange={toggleDarkMode}/>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Setting