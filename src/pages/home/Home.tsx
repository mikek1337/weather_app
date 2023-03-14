import React from "react";

function Home() {
    return (
        <div>
            <div className="flex gap-32 ">
                <div className="rounded-lg w-80 h-fit border-2 ">
                    <div className="p-2 mt-10">
                        <img src="cloudy.png" alt="" width="200px" height="200px" />
                    </div>
                    <div className="ml-2 pr-4 mt-4">
                        <h1 className="font-bold text-4xl">26 &deg;C</h1>
                        <div className="mt-4 flex items-center gap-2">
                            <img src="cloudy.png" width="30px" height="30px" />
                            <h5 className="text-sm">Cloudy</h5>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                            <span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            <h5 className="text-sm">Addis Ababa, ET</h5>
                        </div>
                        <div className="mt-1 flex items-center gap-2 pb-1">
                            <span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                            </span>
                            <h5>{new Date().toLocaleString()}</h5>
                        </div>
                    </div>

                </div>
                <div className="rounded-lg border-2 w-fit  flex">
                    <div className="p-2">
                        <div className="rounded-lg border-2 w-72 h-fit p-5">
                            <h5 className="py-2">Wind status</h5>
                            <div className="m-auto py-6">
                                <img className="m-auto" src="wind-energy.png" alt="" width="100px" height="100px" />
                            </div>
                            <div className="flex justify-between mt-2">
                                <h5 className="font-bold">26 km/hr</h5>
                                <h5 className="font-bold">{new Date().toLocaleTimeString()}</h5>
                            </div>
                        </div>
                        <div className="rounded-lg border-2 w-full h-fit mt-5">
                            <div className="flex justify-between px-1 items-center">
                                <h5>Humdity</h5>
                                <img className="m-1" src="humidity.png" width="30px" height="30px" />
                            </div>
                            <h5 className="font-bold text-xl px-2">26%</h5>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="rounded-lg border-2 w-72 h-fit p-5">
                            <h5 className="py-2">UV index</h5>
                            <div className="m-auto py-6">
                                <img className="m-auto" src="uv.png" alt="" width="100px" height="100px" />
                            </div>
                            <div className="flex justify-center mt-2">
                                <h5 className="font-bold">26UV</h5>

                            </div>
                        </div>
                        <div className="rounded-lg border-2 w-full h-fit mt-3">
                            <div className="flex justify-between px-1 items-center">
                                <h5>Visiblity</h5>
                                <img src="view.png" width="40px" height="40px" />
                            </div>
                            <h5 className="font-bold text-xl px-2">26%</h5>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="rounded-lg border-2 w-72 h-fit p-5">
                            <h5 className="py-1">Sunrise and Sunset</h5>
                            <div className="m-auto py-6">
                                <img className="m-auto" src="uv.png" alt="" width="100px" height="100px" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col items-center">
                                    <img className="self-center" src="sunrise.png" alt="" width="20px" height="20px" />
                                    <h5 className="font-bold text-sm">sunrise</h5>
                                </div>
                                <div className="flex flex-col  items-center">
                                    <img src="sunrise.png" width="20px" height="20px" />
                                    <h5 className="font-bold text-sm">sunset</h5>
                                </div>

                            </div>
                        </div>
                        <div className="rounded-lg border-2 w-full h-fit mt-3">
                            <div className="flex justify-between px-1 items-center">
                                <h5>Feels like</h5>
                                <img src="hot.png" width="40px" height="40px" />
                            </div>
                            <h5 className="font-bold text-xl px-2">26%</h5>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex gap-32">
                <div className="mt-10">
                    <div className="rounded-lg border-2 w-80">
                        <div className="flex justify-between p-3">
                            <h3>26 &deg;C</h3>
                            <h3>Tuesday</h3>
                        </div>
                        <div className="flex justify-between p-3">
                            <h3>26 &deg;C</h3>
                            <h3>Wednesday</h3>
                        </div>
                        <div className="flex justify-between p-3">
                            <h3>26 &deg;C</h3>
                            <h3>Thursday</h3>
                        </div>
                        <div className="flex justify-between p-3">
                            <h3>26 &deg;C</h3>
                            <h3>Friday</h3>
                        </div>
                        <div className="flex justify-between p-3">
                            <h3>26 &deg;C</h3>
                            <h3>Tuesday</h3>
                        </div>
                        <div className="flex justify-between px-3 pt-3">
                            <h3>26 &deg;C</h3>
                            <h3>Tuesday</h3>
                        </div>
                        <div  className="shadow-lg rounded-full bg-white relative left-[40%] bottom-1 border-2 w-fit p-2 -z-10">
                            <span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="border-2 rounded-lg mt-10 w-full">

                </div>
            </div>
        </div>

    )
}

export default Home