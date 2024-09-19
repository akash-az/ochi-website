import React from 'react'

function Cards() {
 return (
    <div className="outer w-full h-screen bg-zinc-100 flex px-32 items-center gap-5">
            <div className="card-container  relative flex items-center justify-center w-1/2 h-[50vh] ">
            <img className="w-32 absolute" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
            <button className="b1 absolute left-10 px-2 py-1 border-[#CDEA68] text-[#CDEA68] bottom-10 border-2 rounded-full">&copy;2022</button>
            <div className="card1 w-full h-full bg-[#004D43] rounded-xl"></div>
            </div>
            <div className="card-container w-1/2   h-[50vh]  flex gap-5 ">
            <div className="card2 w-1/2 h-full flex items-center justify-center relative bg-[#192826] rounded-xl">
            <img className="w-30 absolute" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"></img>
            <button className="b1 absolute left-8 px-2 py-1 border-[#CDEA68] text-[#CDEA68] bottom-10 border-2 rounded-full">Rating 5.0</button>
            </div>
            <div className="card3 w-1/2 h-full  flex items-center justify-center relative bg-[#192826] rounded-xl">
            <img className="w-20 absolute" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"></img>
            <button className="b1 absolute left-8 px-2 py-1 border-[#CDEA68] text-[#CDEA68] bottom-10 border-2 rounded-full">Bussiness</button>
            </div>
            </div>


 
        </div>
  )
}

export default Cards