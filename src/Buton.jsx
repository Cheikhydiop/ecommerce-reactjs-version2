import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import White from "./White";
import Black from "./Black";


function Buton({setButton,image}) {

    const [darkMode,setDarkMode]=useState();

    const switchDark=()=>{
        setDarkMode(!darkMode)
    }
    
    
    useEffect(()=>{
    if(darkMode){
        localStorage.setItem("darkmode","true")
        window.document.documentElement.classList.add("dark")
    }else if(darkMode===false){
        localStorage.setItem("darkmode","false")
        window.document.documentElement.classList.remove("dark")
    }else{
        setDarkMode(localStorage.getItem("darkMode")==="false")
    }
    },[darkMode])
     
    const buton=()=>{

        setButton((set)=>!set)
        
    }
    
const [ok ,setOk]=useState(true)
const choix=()=>{
    setOk(!ok)
}
    
  return (
    <div className="fixed left-11 w-6 top-5  bg-transparent  lg:hidden" onClick={buton}>
        
        <button  onClick={choix} > 
           

            <div className="mt-7 ml-1 my-6"  >
            <svg height="23" width="23" viewBox="0 0 23"  >

          
             

                  
            {
                ok ?(<motion.path
            
            
               strokeWidth="4"
               stroke="blue"
               strokeLinecap="round"
              
               d="M 2 16.346 L 20  16.346"
               /> ):  (<motion.path
            
            
                 strokeWidth="4"
                 stroke="blue"
                 strokeLinecap="round"

                 d="M 3 2.5 L 17  16.346" />)
             }

             
               {ok && 
            <motion.path
            
            
            strokeWidth="4"
            stroke="blue"
            strokeLinecap="round"

            d="M 2 9.423 L 20  9.423" />


               }







             {
                ok ?(<motion.path
            
            
               strokeWidth="4"
               stroke="blue"
               strokeLinecap="round"
               d="M 2 2.5 L 20 2.5"
               /> ):  (<motion.path
            
            
                 strokeWidth="4"
                 stroke="blue"
                 strokeLinecap="round"

                 d=  "M 3 16.5 L 17 2.5"

                 
                 />)
             }


          

            
      

             <div>            <img width="48" height="48" src="https://img.icons8.com/fluency/48/menu--v1.png" alt="menu--v1"/></div>


            
              
      

                
               

            
               </svg>
            </div>
           
        </button>
            <div className=" mx-80 -my-12 list-none">
             <li onClick={switchDark}>{ !darkMode? <White/>: <Black/>}</li> 
            </div>
    </div>
  )
}

export default Buton