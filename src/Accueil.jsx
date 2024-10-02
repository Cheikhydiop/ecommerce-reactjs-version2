import Section from './Section';
import Head from './Head';
import Skill from './Skill';
import Contact from './Contact';
import Mysid from './Mysid';
import { AnimatePresence, motion } from 'framer-motion';
import {useLocation} from 'react-router-dom';


function Accueil() {
    const location=useLocation();

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
        exit:{ x:'100vw',
        transition:{ease:'easeInOut'}
     }
    }
  return (
    <motion.div   
    variants={variant}      
    initial="hidden"
    animate="visible"
   exit="exit"
    
    >
    <AnimatePresence>
        <switch location={location} key={location.key}>
            <Mysid/>    
        </switch>
    </AnimatePresence>
    </motion.div>
  )
}

export default Accueil