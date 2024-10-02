import React, { useEffect, useRef, useState } from 'react'
import Say from './Say';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';





    
    
   function Mail() {
    
    const [error,setError]=useState(false);
    const [ok,setOk]=useState(false)
    
   const formR = useRef();
  
   const sendMail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_kql1e8g', 'template_x1l9bgl', formR.current, '-9Jg5S7Dto1Cq3dEy')
      .then(() => {
          setOk(true);
      }, () => {
        setError(true);
      });  
   };
   

  

    
    return <>
    
         
      
    


   <div className="m-auto justify-between flex items-center h-full max-w-7xl mt-2 float-right ">
   <button className=" rounded-lg animate-spin mr-20  text-white  lg:hidden"><img width="64" height="64" src="https://img.icons8.com/nolan/64/phone.png" alt="phone"/></button>
     <motion.form  ref={formR} onSubmit={sendMail}
     whileInView={{x:[250,0]}}
     transition={{delay:0.5,ease:'easeInOut'}}
     className="gap-2 flex flex-col text-black z-10 " >

     <input  type="text" name="name" placeholder="Nom" required lassName="rounded-sm"/> 
     <input  type="email" placeholder="email" name='email' required className="rounded-sm"/>
     <textarea  placeholder="comment"name='message'  className="rounded-sm" rows={5}/>
     <input type='submit' placeholder='valider'  className="bg-yellow-500 rounded-lg"/>
      {error && "erreur"}
      {ok && "succes"}
     </motion.form>

    </div>
          
           


    
      

  
    
    
    </>
  
    
    }
    
 
 
   
   


export default Mail