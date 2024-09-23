import React from 'react'

function About() {
  return (
    <div  className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black "> 
        <h1 className = " font-['Neue_Montreal']  text-[4vw]  leading-[4.5vw] tracking-tighter">
        Ochi is a strategic presentation agency for forward thinking businesses that need to raise funds,
         sell products,
         explain commplex ideas, and hire great people.
         </h1>

         <div className = "w-full border-t-[1px] pt-10 mt-20 border-[#a1b562] flex ">
          <div className=" w-1/2"> 
           <h1 className ="text-7xl ">Our Approach</h1>
           <button className=" uppercase flex gap-10 px-10 py-6 rounded-full bg-zinc-900 mt-10 items-center text-white">Read More
            <div className =" w-2 h-2 rounded-full bg-zinc-100"></div>
           </button>
          </div>
          <div className=" w-1/2 h-[70vh] rounded-3xl bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')]"></div>
         </div>
    </div>
  )
}

export default About