import { div } from 'framer-motion/client';
import React, { useEffect,useRef,useState } from 'react'

function Eyes(){

    const [rotate,setRotate] = useState(0);

    useEffect(()=> {
            window.addEventListener("mousemove", (e)=>{
                
                let mouseX = e.clientX;
                let mouseY = e.clientY;

                let deltaX = mouseX - (window.innerWidth/2);
                let deltaY = mouseX - (window.innerHeight/2);

                var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
                setRotate(180 - angle);
            })
        })
    
    
    return(

        <div className="w-full h-full overflow-hidden">
        <div data-scroll data-scroll-section data-scroll-speed="-0.9" className = " relative w-full h-screen bg-cover bg-center  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div  className=" flex gap-8 absolute    top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full h-32">
            <div className =" relative h-2/3 w-2/3 bg-zinc-900 rounded-full">
            <div style={{transform : `translate(-50%, -50%)  rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 ">
            <div className =" w-8 rounded-full h-8 bg-zinc-100 "></div>
            </div>
            
        </div>
        </div>
        <div className=" flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full h-32">
        <div className ="  relative h-2/3 w-2/3 bg-zinc-900 rounded-full">
        <div  style={{transform : `translate(-50%, -50%)  rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  line w-full h-10 ">
            <div className =" w-8 rounded-full h-8 bg-zinc-100 "></div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Eyes