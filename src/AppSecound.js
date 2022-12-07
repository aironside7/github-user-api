import React, { useEffect, useState } from 'react'

const AppSecound = () => {
  const[width,widthCount]=useState(window.screen.width)
  const accWidth=()=>{
    widthCount(window.innerWidth)
  }
  useEffect(()=>{
     window.addEventListener("resize",accWidth)
     return ()=>{
      window.removeEventListener("resize",accWidth)
     }
  })
  return (
    <div>
      <h1>hello my display resulation</h1>
      <h1>{width}</h1>
    </div>
  )
}

export default AppSecound
