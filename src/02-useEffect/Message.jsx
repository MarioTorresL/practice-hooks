import {useEffect, useState} from "react"

export const Message = () =>{

  const [cords, setCords] = useState({x:0, y:0})
  
  useEffect(() =>{

    const onMouseMOve = ({ x, y })=>{
      setCords({x, y})
    }
    window.addEventListener('mousemove', onMouseMOve)
    return()=> {
      // window.removeEventListener('mousemove', onMouseMOve)
    }
  })

  return (
    <>
      <div className="container">
      <div className="alert alert-primary mt-5">
      User already exist
      </div>
        <p>{JSON.stringify(cords)}</p>
      </div>
    </>
  )
}
