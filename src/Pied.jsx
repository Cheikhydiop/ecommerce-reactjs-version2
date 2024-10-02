
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';




function Pied() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kql1e8g', 'template_wm8hqip', form.current, '-9Jg5S7Dto1Cq3dEy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
<footer className="bg-gray-200 body-font shadow-lg text-white bg-" >
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl ">NdiguelShop</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Societe Agreer De Vente A Des Prix Abordable De Toutes Catogories</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
        <li>
            <a className="text-gray-600 hover:text-gray-800">Vetement</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Chessure</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Electronique</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Acceseoire</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
        <li>
            <a className="text-gray-600 hover:text-gray-800">Vetements</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Electroniques</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Acceseoires</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Chessures</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
        <li>
            <a className="text-gray-600 hover:text-gray-800">Vetement</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Chessure</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Electronique</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Acceseoire</a>
          </li>
  
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUGGESTION</h2>
      
   <div className="m-auto justify-between flex items-center h-full max-w-7xl mt-2 float-right ">
   <button className=" rounded-lg animate-spin mr-20  text-white  lg:hidden"><img width="64" height="64" src="https://img.icons8.com/nolan/64/phone.png" alt="phone"/></button>
     <motion.form  
     whileInView={{x:[250,0]}}
     transition={{delay:2.1,ease:'easeInOut'}}
     className="gap-2 flex flex-col text-black z-10 " >
      <form ref={form} onSubmit={sendEmail}>
 
     <input  type="email" placeholder="email" name='email' required className="rounded-sm"/>
     <textarea  placeholder="comment" name='message'  className="rounded-sm" rows={5}/>
     <input type='submit' placeholder='valider'  className="bg-yellow-500 rounded-lg"/>
     </form>
  
     </motion.form>

    </div>
      </div>
    </div>
  </div>
  <div className=" bg-orange-500">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Ndiguel —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@cheikh</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Pied