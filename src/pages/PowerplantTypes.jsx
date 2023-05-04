import React, {useState, useEffect} from 'react'
import Loader from "../components/Loader"

const PowerplantTypes = () => {
  const [preloader, setPreloader] = useState(false)

  useEffect(() => {
    setPreloader(true)
    setTimeout(() => {
      setPreloader(false)
    }, 1500)
  }, [])


  return (
    <>
      {preloader ? <Loader/> : 
        <div>PowerplantTypes</div>
      }
    </>
  )
}

export default PowerplantTypes