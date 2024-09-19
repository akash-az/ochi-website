import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

function Landing(){
    return (
        <div className = 'w-full h-screen bg-zinc-900 pt-1 '>
            <div className="text-container mt-40 px-20">
                {["come","Look At","this"].map((item,index) => {
                      return  <div className="masker">
                        <div className="w-fit flex">
                        {index === 1 && (<div className=" mt-[1vw] mr-[0.6vw] rounded w-[8vw] h-[5vw] relative -top-[0.1vw] bg-red-500"></div>)}
                      <h1 className="uppercase leading-[6vw] font-[Founders-Grotesk_X-condensed] tracking-tight font-bold text-[7vw]">{item}</h1>
                    </div>
                  </div> 
                })}  
            </div>

            <div className="border-t-[2px] border-zinc-700 mt-32 flex justify-between item-center py-5 px-12">
                {["For public and private companies","From the first pitch to IPO"].map((item,index) => <p className=" text-lg uppercase tracking-tight leading-none">{item}</p>)}
            
            <div className="start flex items-center gap-2">
                <div className =" px-4 py-1 border-[1px] rounded-full border-zinc-400 font-md text-lg uppercase">Start The Project</div>
                <div className ="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full"><span className="rotate-[45deg]"><FaArrowUpLong /></span></div>
            </div>
            </div>
        </div>
    )
}

export default Landing