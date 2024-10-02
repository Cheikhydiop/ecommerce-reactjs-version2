

import { motion } from "framer-motion"
import { useState } from "react"
import Navbar from "./Navbar"
import Buton from "./Buton"
import Head from "./Head"

function Lien() {
    
    const [page,setPage]=useState(false)
    const [image,setImage]=useState(false)

    const handClick=()=>{
      setImage(!image)
    }
    
    const variant={
    closed:{
           clipPath:"circle(1200px at 50px 50px)",
           transition:{  type:'spring',
           damping:40,
           stiffness:400,
           delay:0.5,
           type:"spring",
           opacity:0
            
          },

        },   
    open:{
          
      clipPath:"circle(20px at 50px 50px )",
         transition:{
          type:"spring",
          stiffness:20, 
         }
       }

          
        
    }


  return (
    <>
    
    <div className=" md:flex md:flex-col  md:mt-1  text-black m-2 max-h-1">
            <motion.div
              
              variants={variant}
              animate={image ? 'open' :'closed'}
              > 
                     <motion.div variants={variant}>
                        <Navbar/>
                      </motion.div>     
                      
            </motion.div>
           <Buton setButton={setImage}/> 
           <Navbar setPage={setPage}/> 
          
       </div>
  
       
    </>
  )
}


export default Lien