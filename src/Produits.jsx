import React, { useEffect } from 'react'
import Pied from './Pied';
import { Link, NavLink, useParams } from 'react-router-dom';
import Feature from './Feature';
import Hero from './Hero';
import Card from './Card';




 function Produits ({product=[]}) {

  
  
  

  return (
    <div>
      <Hero/>
 <Card/>    

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 lg:mx-44 md:mx-4">
    <div className="flex flex-wrap border-t-4 border-orange-500 ">
  
      {
        product.map((product)=>{
        const {id,title,newPrice,category,img}=product;
        return(<a href={id}  key={id} className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer hover:scale-110">
      
            
      
            
  
               <img alt="ecommerce" className="object-cover object-center " src={img}/>
               

              <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
              
                <p className="mt-1">{newPrice} Francs</p>
                
              </div>
              <div className="border-t-4 border-r-4 border-orange-500 ..."></div>

          </a>
      )}
        )
      }
  </div> 
  </div>

  <Feature/>
  <Pied/>
</section>
    </div>
  )
}
export default Produits
