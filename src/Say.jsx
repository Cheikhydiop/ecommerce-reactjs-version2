import { useState } from "react"

function Say({id,title,like,borderColor="yellow",onDelete,onlike,email,onSubmit}) {

  const handclick=(e)=>{
    console.log()
  }
const [colors,setColors]=useState();

const show=()=>{
  setColors(borderColor);
    }

    
    const ferme=()=>{
        setColors('');
          }


          
  return ( <div>
      

  
    <div className="bg-white">
    <div className=" absolute ">
         <button onClick={()=>{onDelete(id)}} ></button> 
         </div>
              <h1> {title }</h1>
              
        
          
             
    </div>
      
        <button onClick={()=>{onlike(id)}}>{like}</button>
        
</div>
  )
}


export default Say