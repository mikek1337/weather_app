import React from "react";

function Home()
{
    return(
        <div>
            <div className="rounded-lg w-fit h-fit border-2">
                <div className="p-2">
                    <img src="cloudy.png" alt="" width="100px" height="100px" />
                </div>
                <div className="ml-2">
                    <h1 className="font-bold text-3xl">26 &deg;C</h1>
                </div>

            </div>
        </div>
    )
}

export default Home