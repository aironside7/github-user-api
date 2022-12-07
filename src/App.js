import React, { useEffect, useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const plus=()=>{
    setCount(count+1)
  }
   
  useEffect(()=>{
    console.log("hello useeffect")
    if(count>0){
      document.title=`count (${count})`
    }else{
      document.title=`count`

    }
  },[count])
  return (
    <div>
      <h1>hello</h1>
      <h1>{count}</h1>
      <button onClick={plus}>clickme</button>
    </div>
  )
}

export default App
