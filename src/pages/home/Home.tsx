import React, { useState } from "react";
import UseFetchHook from '../../common/hooks/UseFetchHook';
import { getFullDay } from '../../common/utils/utils';
import Loading from "../../common/components/Loading";
import Chart from 'chart.js/auto'
function Home() {
    // request to the api using a custom hook
    const [latitude, setLatitude] = useState(9.02);
    const [longitude, setLongtude] = useState(38.75);
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) =>{ setLatitude(position.coords.latitude); setLongtude(position.coords.longitude)}, (error: any) => console.log(error));
    const { isLoading, error, data } = UseFetchHook('currentWeather', `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=relativehumidity_2m,apparent_temperature,visibility&daily=temperature_2m_max,sunrise,sunset,uv_index_max&current_weather=true&timezone=auto`);
    if (isLoading) { return <Loading /> }
    if (error) return 'reload me';
    const createChart = () => {
        const ctx = document.getElementById('chart') as HTMLCanvasElement;
        const chart = new Chart(
            ctx,
            {
                type: 'line',
                data: {
                    labels: data.daily.time.map((lable: string, index: number) => lable),
                    datasets: [
                        {
                            label: "Date",
                            data: data.daily.temperature_2m_max.map((value: number, index: number) => value)
                        }
                    ]
                }
            }
        )
        console.log("here")
    }

    // get the index from the current timestamp
    let index: string = data.current_weather.time.split("T")[1].split(":")[0];
    index = index[0].includes('0') ? index.substring(1, 2) : index

    return (
        <div className="px-16">
            <div className="grid grid-cols-[2fr_80%_2fr] gap-10 w-full items-center ">
                <div className="rounded-lg w-80 h-fit border-2 shadow-xl dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                    <div className="p-2 mt-10">
                        <img className="" src="cloudy.gif" alt="" width="200px" height="200px" />
                    </div>
                    <div className="ml-2 pr-4 mt-4">
                        <h1 className="font-bold text-4xl dark:text-gray-300">{data.current_weather.temperature} &deg;C</h1>
                        <div className="mt-4 flex items-center gap-2">
                            <img src="cloudy.png" width="30px" height="30px" />
                            <h5 className="text-sm dark:text-gray-300">Cloudy</h5>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                            <span>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            <h5 className="text-sm dark:text-gray-300">Addis Ababa, ET</h5>
                        </div>
                        <div className="mt-1 flex items-center gap-2 pb-1 ">
                            <span dark:text-gray-300>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                            </span>
                            <h5>{new Date(data.current_weather.time).toDateString() + ' ' + new Date(data.current_weather.time).toLocaleTimeString()}</h5>
                        </div>
                    </div>

                </div>
                <div className="rounded-lg  w-full  grid grid-cols-3  dark:shadow-black">
                    <div className="p-2 w-full shadow-xl ">
                        <div className="rounded-lg border-2 w-full h-80 p-5 dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                            <h5 className="py-2">Wind status</h5>
                            <div className="m-auto py-6">
                                <img className="m-auto" src="windmill.gif" alt="" width="150px" height="150px" />
                            </div>
                            <div className="flex justify-between mt-2  ">
                                <h5 className="font-bold">{data.current_weather.windspeed} km/hr</h5>
                                <h5 className="font-bold">{ }</h5>
                            </div>
                        </div>
                        <div className="rounded-lg border-2 w-full h-fit mt-5 dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                            <div className="flex justify-between px-1 items-center">
                                <h5>Humdity</h5>
                                <img className="m-1" src="humidity.png" width="30px" height="30px" />
                            </div>
                            <h5 className="font-bold text-xl px-2">{data.hourly.relativehumidity_2m[index] + data.hourly_units.relativehumidity_2m}</h5>
                        </div>
                    </div>
                    <div className="p-2 w-full shadow-xl">
                        <div className="rounded-lg border-2 w-full h-80 p-5 dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                            <h5 className="py-2">UV index</h5>
                            <div className="m-auto py-6">
                                <img className="m-auto" src="uv-protection.gif" alt="" width="150px" height="150px" />
                            </div>
                            <div className="flex justify-center mt-2">
                                <h5 className="font-bold">{data.daily.uv_index_max[0]}UV</h5>

                            </div>
                        </div>
                        <div className="rounded-lg border-2 w-full h-fit mt-3 dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                            <div className="flex justify-between px-1 items-center">
                                <h5>Visiblity</h5>
                                <img src="view.png" width="40px" height="40px" />
                            </div>
                            <h5 className="font-bold text-xl px-2">{data.hourly.visibility[index] / 1000} KM</h5>
                        </div>
                    </div>
                    <div className="p-2 w-full shadow-xl">
                        <div className="rounded-lg border-2 w-full h-80 p-5 dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                            <h5 className="py-1">Sunrise and Sunset</h5>
                            <div className="m-auto py-6">
                                <img className="m-auto" src="uv.png" alt="" width="150px" height="150px" />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col items-center">
                                    <img className="self-center" src="sunrise.gif" alt="" width="40px" height="40px" />
                                    <h5 className="font-bold text-sm">{new Date(data.daily.sunrise[0]).toLocaleTimeString()}</h5>
                                </div>
                                <div className="flex flex-col  items-center">
                                    <img src="sunset.gif" width="40px" height="40px" />
                                    <h5 className="font-bold text-sm">{new Date(data.daily.sunset[0]).toLocaleTimeString()}</h5>
                                </div>

                            </div>
                        </div>
                        <div className="rounded-lg border-2 w-full h-fit mt-3 dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0">
                            <div className="flex justify-between px-1 items-center">
                                <h5>Feels like</h5>
                                <img src="hot.png" width="40px" height="40px" />
                            </div>
                            <h5 className="font-bold text-xl px-2">{data.hourly.apparent_temperature[index]} &deg;C</h5>
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-[2fr_80%_2fr] gap-10 w-full ">
                <div className="mt-10 shadow-xl dark:shadow-black dark:text-gray-300 dark:bg-black ">
                    <div className="rounded-lg border-2 w-80 object-contain">
                        {data.daily.temperature_2m_max.map((index: number, value: any) =>
                            <div className="flex justify-between p-3" key={value}>
                                <h3 className="font-semibold text-lg">{index} &deg;C</h3>
                                <h3>{getFullDay(new Date(data.daily.time[value]).getDay())}</h3>
                            </div>
                        )}
                    </div>
                </div>
                <div className="border-2 rounded-lg mt-10 w-full shadow-xl dark:shadow-black dark:text-gray-300 dark:bg-black dark:border-0" >
                    <canvas id="chart" onLoad={createChart} ></canvas>
                </div>
            </div>
        </div>

    )
}

export default Home