import './index.css'
import './App.css';


import './index.css'

import { Link, NavLink, Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Headerse from './Headerse';
import HomePage from './HomePage';
import Produits from './Produits';
import Pied from './Pied';
import Hero from './Hero';
import Produit from './Produit';
import Panier from './Panier';
import Accueil from './Accueil';





const r=createBrowserRouter([
  {
    path:'/',
    element:(<div>
   
   <Accueil />

      <Headerse/>
      
      <HomePage/>


    </div>
     ) ,
    
  },
  
  {
    path:'/:id',
    element:<div>
    <Headerse/>      
    <Produit/><Pied/>
 
 </div> 
  },
  {
    path:'/Pied',
    element:  <div><Headerse/> <Pied/></div>
  },
  {
    path:'/hero/:id2',
    element:<Hero/>
  },
  {
    path:'/Panier',
    element:  <div><Headerse/> <Panier/>  <Pied/></div>
  },
  {
    path:'*',
    element:<div className="text-center text-4xl mt-24">PAGE 404</div>
  },
   
   ])

  




function App() {

  return<div>
     <RouterProvider  router={r}/>
  </div>

}

export default App;
