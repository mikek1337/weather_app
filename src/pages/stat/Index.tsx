import { useState } from "react"
import UseFetchHook from "../../common/hooks/UseFetchHook";
function Stat()
{
    const [latitude,setLatitude] = useState(8.9806);
    const [longtiude, setLongtude] = useState( 38.7578);
    const query = ()=>{
        
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&${longtiude}&hourly=relativehumidity_2m,apparent_temperature,visibility`;
        const {isLoading, error, data} = UseFetchHook("search",url);
    }
    return(
        <div className="h-full w-fit ">
            <h1 className="font-semibold text-3xl dark:text-gray-300">Stats</h1>
            <div className="flex shadow-lg md:flex-row flex-col justify-center h-fit  border-2 dark:border-0 dark:bg-black dark:shadow-black mt-5 md:w-[90%] lg:w-fit  p-2  items-center  gap-10 rounded-lg">
                <div className=" lg:ml-28 ">
                    <input className="rounded-lg border-2 p-2 w-96" type="text" placeholder="latitude" onChange={(e)=>setLatitude
                    (parseInt(e.target.value))}/>
                </div>
                <div>
                    <input className="rounded-lg border-2 p-2 w-96" type="text" placeholder="longtude" onChange={(e)=>setLongtude
                    (parseInt(e.target.value))}/>
                </div>
                <div className="">
                    <button className="border-2 rounded-lg p-2 px-6 bg-gray-100">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Stat