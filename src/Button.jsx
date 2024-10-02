import { motion } from "framer-motion"


function Button({setImage,image}) {
    const button=()=>{
        setImage(!image)
    }
  return (
    <div>

        <button onClick={button}>
            <svg height="23" width="23" viewBox="0 0 23">
                 <motion.path
                 
                 
                 strokeWidth="3"
                 stroke="black"
                 strokeLinecap="round"
                 variants={{open: {d:"M 3 16.5 L 17 2.5"} ? 
                 closed: {d:"M 2 2.5 L 20 2.5"}
                
                }}
                 >


                 </motion.path>
            </svg>
        </button>
    </div>
  )
}

export default utton