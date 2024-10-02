import React, { useEffect, useState } from 'react'

function Qup() {

    const [data ,setData]=useState({}) 

    useEffect(() =>{

      const PostData=()=>{
        const response= await axios.post('http://localhost',{

          

        });
        setData(response.data)

      }

    },[])
  return (
    <div>
      
    </div>
  )
}

export default Qup
