import { useState } from "react"
import UseFetchHook from "../../common/hooks/UseFetchHook";
import { getFullDay } from "../../common/utils/utils";
import { Line } from 'react-chartjs-2';
import { weatherInfo } from "../../common/models/weathermodel";
interface IData {
    label: string;
    data: weatherInfo
}
function Stat() {
    const [latitude, setLatitude] = useState(8.9806);
    const [longtiude, setLongtude] = useState(38.7578);
    const [data, setData] = useState<weatherInfo>();
    const [error, setError] = useState(null);
    const [graphData, setGraphData] = useState<IData[]>([]);
    const [filters, setFilters] = useState<string[]>([]);
    const query = () => {

        let searchFilters = filters;
        if (filters.length == 0) {
            searchFilters = ["temperature_2m_max"];
        }
        let search: string = searchFilters.join(',');
        setGraphData([])
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtiude}&daily=${search}&timezone=auto`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                searchFilters.map((value: string, index: number) => {
                    let dataset = {
                        label: value.split('_').join(' '),
                        data: data.daily[value]
                    }
                    setGraphData(prevData => [...prevData, dataset])
                })
            })
            .catch((reason: any) => {
                setError(reason);
            })

    }
    return (
        <div className="h-full w-fit ">
            <h1 className="font-semibold text-3xl dark:text-gray-300">Stats</h1>
            <div className="grid grid-flow-row gap-5 md:gap-5">
                <div className="w-full">
                    <div className="flex shadow-sm md:flex-row flex-col justify-center h-fit  border-2 dark:border-0 dark:bg-black dark:shadow-black mt-5 md:w-[90%]  lg:w-fit   p-10  items-center  gap-10 rounded-lg">
                        <div className="lg:ml-28 ">
                            <input className="rounded-lg border-2 p-2 w-96" type="number" placeholder="latitude" onChange={(e) => setLatitude
                                (parseInt(e.target.value))} />
                        </div>
                        <div>
                            <input className="rounded-lg border-2 p-2 w-96" type="number" placeholder="longtude" onChange={(e) => setLongtude
                                (parseInt(e.target.value))} />
                        </div>
                        <div className="">
                            <button className="border-2 rounded-lg p-2 px-6 bg-gray-100" onClick={query}>Search</button>
                        </div>
                    </div>
                    <div className="mt-2 ">
                        <button data-target="defaultModal" data-toggle="defaultModal" className="block  shadow-sm  w-full border-2  hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                    <div id="defaultModal" aria-hidden="true" className="dark:bg-black  block-foucs:block  dark:text-white w-full mt-3  justify-center items-center rounded-lg shadow-xl   p-2">
                        <div className="grid grid-cols-3">
                            <div className="flex justify-center items-center gap-2">
                                <label htmlFor="max_temp">Maximum Temperature</label>
                                <input type="checkbox" name="" id="max_temp" onChange={(e) => { e.target.checked ? setFilters(prevFilter => [...prevFilter, "temperature_2m_max"]) : "" }} />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <label htmlFor="max_temp">Precipitation Sum</label>
                                <input type="checkbox" name="" id="max_temp" onChange={(e) => { e.target.checked ? setFilters(prevFilter => [...prevFilter, "precipitation_sum"]) : "" }} />
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <label htmlFor="max_temp">Maximum Wind Speed</label>
                                <input type="checkbox" name="" id="max_temp" onChange={(e) => { e.target.checked ? setFilters(prevFilter => [...prevFilter, "windspeed_10m_max"]) : "" }} />
                            </div>

                        </div>


                    </div>
                </div>
                <div className="dark:bg-black">
                    {data && <Line className="w-full"
                        datasetIdKey='id'
                        data={{
                            labels: data.daily.time.map((value: any, index: number) => getFullDay(new Date(value).getDay())),
                            datasets: graphData
                        }}
                    />}

                </div>
            </div>

        </div>
    )
}

export default Stat