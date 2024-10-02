import React, { useEffect } from 'react'

function Favori() {

    useEffect(()=>{
        const fetchFavori= async ()=>{

            const reponse = await axois.get("/favori",{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                
            });

        }
    }
    ,[]);
  return (
    <div>
      
    </div>
  )
}

export default Favori

