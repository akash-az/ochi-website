import React from 'react'

function Featured() {
  return (
    <div className = "w-full bg-zinc-900 py-20">
        <div className="px-10 border-b-[1px] border-zinc-700 pb-10">
            <h1 className= "text-5xl font-[Neue_Montreal]">Featured Projects</h1>
        </div>
        <div className="cards px-20">
            <div className="cardcontainer  mt-20 flex gap-8">
                <div className=" w-1/2 h-[75vh] bg-red-600 rounded-lg"></div>
                <div className=" w-1/2 h-[75vh] bg-green-500 rounded-lg"></div>
            </div>
        </div>
    </div>
  )
}

export default Featured