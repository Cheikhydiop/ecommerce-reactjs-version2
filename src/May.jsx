import React from 'react'

function May() {
  return (
    <div className="m-auto justify-between flex items-center h-full max-w-7xl mt-2 float-right">
      <h1>nnnnnn</h1>
     <form className="gap-2 flex flex-col">

     <input type="text"  placeholder="Nom"className="rounded-sm"/> 
     <input type="text" placeholder="Email" className="rounded-sm"/>
     <textarea placeholder="comment"  className="rounded-sm" rows={5}/>
     <input type='submit' placeholder='vali'/>
     <button className="bg-yellow-500 rounded-lg">Valider</button>
      
     </form>

    </div>
  )
}

export default May