import React from 'react'
import { Link, NavLink, Route, Router, createBrowserRouter } from 'react-router-dom';
import { motion } from "framer-motion"
import Mysid from './Mysid';
import Section from './Section';
import Skill from './Skill';
import Contact from './Contact';
import Head from './Head';




const listes=['Vetement','Accessoire','Jouets','Fourniture']

const variant={
       
       open:{
              opacity:1,
               x:0,
              transition: {staggerChildren:0.3}
             }
   }

  
  

     

 
     function Navbar({setPage}){  
     
          
const buton1=()=>{

  setPage((set)=>set)
}
  return <>


      <div className="items-stretch lg:hidden text-center justify-center list-none bg-white lg:w-auto text-blue-500">
                  
      <img 
     
     src="https://https://melvynx.com/images/my-face.png" alt=""
     className=" lg:mr-24 lg:-mt-40  lg:float-right lg:h-64 lg:w-64 hover:rotate-45 lg:ease-in"  />
      <br/> <p className="text-5xl text-black">C</p>
              {listes.map(liste=><li  className="my-7">   
              
              <a key={liste} href={liste} >
                {liste}
              </a>
              
              </li>

              )} 
                  
             
           
      </div>
    
      
  </>
  }

export default Navbar