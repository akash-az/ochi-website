import { motion } from 'framer-motion'
import React,{useState} from 'react'


function Featured() {
  const[isHovering,setHovering] = useState(false);

  
  
  return (
    <div className = "w-full bg-zinc-900 py-20">
        <div className="px-10 border-b-[1px] border-zinc-700 pb-10">
            <h1 className= "text-5xl font-[Neue_Montreal]">Featured Projects</h1>
        </div>
        <div className="cards px-20">
            <div className=" mt-20 flex gap-8">
                <div  className=" card-container relative w-1/2 h-[75vh]  rounded-lg">
                <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}  className=" heading absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2">
                  <h1 className=" flex overflow-hidden text-6xl leading-none text-[#CDEA68]">FYDE
                  {"FYDE".split('').map((item,index)=><motion.span 
                  initial={{y:"100%"}}
                   animate={isHovering ? {y:"0"}: {y:"100%"}} 
                   transition={{ease:[0.22,1,0.36,1], delay:index*0.6}}
                    className="inline-block">{}</motion.span>)}
                  </h1>
                </div>
                <div className=" card w-full h-[75vh] bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png')] rounded-lg"></div>
                </div>
                <div className=" card-container w-1/2 h-[75vh] relative rounded-lg">
                <div className="heading absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2">
                  <h1 className=" text-6xl leading-none text-[#CDEA68]">VISE
                    {"VISE".split('').map((item,index)=><span>{}</span>)}
                  </h1>

                </div>
                <div className=" card w-full h-[75vh] bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg')] rounded-lg"></div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Featured