import React from 'react'
import { RingLoader } from 'react-spinners'

const Loader = () => {

  // const override = {
  //   display: "flex",
  //   justifyContent: 'center',
  //   borderColor: "red",
  // };

  return (
    <div className='position-absolute top-50 start-50 translate-middle w-auto responsive-loader'>
        <RingLoader
        color={"#ffc107"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>


  )
}

export default Loader