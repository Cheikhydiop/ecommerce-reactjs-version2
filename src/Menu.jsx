import React, { useState } from 'react'

function Menu() {
    const [check,setCheck]=useState(window.innerWidth)
  return (
    <div className="bg-red-5OO text-red-800 max-w-screen-lg lg: -translate-y-full">
            <nav className=' -translate-y-full  bg-red-500 w-fit '>

                {
                    check <900 &&  <button className='text-white'>
                      <img width="48" height="48" src="https://img.icons8.com/fluency/48/menu--v1.png" alt="menu--v1"/>
                </button>
                }
               
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
   </nav>

    </div>
  )
}

export default Menu