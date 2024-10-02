import { useState } from "react"

function Kill() {
  const [title ,setTitle]=useState(false)
 
  
  return <div> 
              
     <Checked  checked={title} onCheck={setTitle}/>
     <Link to={'/Skill'}   >0.Skill</Link>
                      <Link to={'/Skill'}>1.Poject</Link>
                      <Link to={'/Skill'}>3.Contact</Link>
                      <div  onClick={switchDark}>{ !darkMode? <White/>: <Black/>}</div>
    </div>
        
  
}

function Checked({checked,onCheck}){
  
  <input type="checkbox"checked={checked} onChange={(e)=>onCheck(e.target.checked)} />
}

export default Kill