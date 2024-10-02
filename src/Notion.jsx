import React from 'react'
import { motion, spring } from 'framer-motion';

function Notion() {
  return (
    <motion.div 
              transition={{type:'inertia',velocity:150}}
              animate={{x:0}}
              initial={{x:100}}
              >X DIOP</motion.div>
              
  )
}

export default Notion