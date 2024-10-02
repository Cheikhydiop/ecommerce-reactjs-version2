import React from 'react'
import { useParams } from 'react-router-dom'

function Arttile() {
    const {id} =useParams()
  return (
    <div>Arttile{id}</div>
  )
}

export default Arttile