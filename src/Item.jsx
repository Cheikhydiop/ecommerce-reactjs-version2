import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';

const v={
  p:{
    transition:{staggerChildren:0.5}
  }
}
function Item() {
    const items=["Head","Project", "Skill","Contact"];
    
  return (
    <motion.div className='text-center mb-10 gap-4 p-9 flex'
   

    >

    { items.map((item)=>(<a   href={item} key={item}  >{item}</a> )) }
  

 </motion.div>
    
  )
}

export default Item