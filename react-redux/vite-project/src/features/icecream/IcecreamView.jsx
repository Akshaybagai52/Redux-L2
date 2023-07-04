import React from 'react'
import { useSelector } from 'react-redux'

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams )

  return (
    <div>
        <h2>Number of icecream -{numOfIcecreams} </h2>
        <button>Order icecream</button>
        <button>Restock icecream</button>
    </div>
  )
}

export default IcecreamView