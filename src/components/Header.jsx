import  { useEffect,useState } from 'react'
import White from './White';
import Black from './Black';
import Section from '../Section';
import { motion } from 'framer-motion';


function Header() {

<div className='Parent flex min-h-screen flex-col '>
  
  <div className='container mx-auto'>
    <div className='grid lg:grid-cols-6  md:grid-cols-2 gap-2'>
        <div className='p-6 md:col-span-4 flex md:mx-14 mt-4 space-x-6 text-white'>

            <div className='flex space-x-1' >
              <img className="-mt-2 md:h-10 w-10 "  src="logo512.png" alt=""/>
              
          
              <motion.div 
              whileHover={{scale:1.2}}
              animate={{x:0}}
              initial={{x:100}}
              >Cheikh</motion.div>
              </div>
            <div className="text-gray-400">Home</div>
        </div> 
          <div className='p-6  flex mr-12 mt-4 space-x-4 text-white '>
            <div>0.SKill</div>
            
        
          </div> 
        </div>
    </div>
   
    
  
</div>

}

export default Header