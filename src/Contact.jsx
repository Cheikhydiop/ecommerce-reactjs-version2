import { motion } from 'framer-motion'
import React from 'react'
import Section from './Section'
import Mail from './Mail'
import May from './May'


function Contact() {
  const variant={
    hidden:{
        opacity:0
    },
    visible:{
        x:[-100,0],
        opacity:1,
        transition:{
            delay:1.5,
            duration:1.5
        }
    },
    exit:{ 
      x:'100vw',
     transition:{ease:'easeInOut'}
  }
}

  return (
    <motion.div className='md:space-x-2 lg:space-x-6 lg:mx-80 md:mx-0'
    
    variants={variant}      
    initial="hidden"
    animate="visible"
    exit="exit"
    
    >
    
 <motion.h1 className="text-white  text-center text-4xl"
            
            whileInView={{x:[100,0]}}
            transition={{ease:'easeInOut'}}
  > Contact</motion.h1><br/><br/>
            <h2 className="text-white  md:whitespace-nowrap md:text-start mx-3 lg:text-center">👋Feel free to contact me my email or through </h2>
         <br/>
          <div className='container mx-auto'>
        <div className='grid lg:grid-cols-5 lg:-mx-10 sm:grid-cols-3 gap-2 text-white ' >
          
          <button className="bg-sky-500 rounded-lg hover:scale-110  hover:bg-slate-500 ">Discord</button>
          <button className="bg-sky-500 rounded-lg hover:scale-110  hover:bg-slate-500">Github</button>
          <button className="bg-sky-500 rounded-lg hover:scale-110  hover:bg-slate-500">Linkdln</button>
          <button className="bg-sky-500 rounded-lg hover:scale-110  hover:bg-slate-500">Newsletter</button>
          <button className="bg-sky-500 rounded-lg hover:scale-110  hover:bg-slate-500 ">781373956</button>
          <button className="bg-sky-500 rounded-lg hover:scale-110  hover:bg-slate-500">Facebook</button><br/>
          <p className=" text-center text-white col-span-6"><Mail/></p>
        </div>
         
           <br/>
           <p className=" text-center text-white col-span-6"> ©Copyright 2023 - Cheikh DioP</p>
          <br/>
        </div>

          
   
</motion.div>


        

  )
}

export default Contact