function Stat()
{
    return(
        <div className="h-full">
            <h1 className="font-semibold text-3xl ">Stats</h1>
            <div className="flex  border-2 mt-5 w-[90%] p-2 h-20 items-center gap-20 rounded-lg">
                <div className=" ml-44">
                    <input className="rounded-lg border-2 p-2 w-96" type="text" placeholder="latitude"/>
                </div>
                <div>
                    <input className="rounded-lg border-2 p-2 w-96" type="text" placeholder="longtude"/>
                </div>
                <div className="">
                    <button className="border-2 rounded-lg p-2 px-6 bg-gray-100">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Stat