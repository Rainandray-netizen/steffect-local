import React, { useContext } from 'react'
import { steffectContext } from '../../Context'

const GridProduct = ({product}) => {
  const { setCart } = useContext(steffectContext)

  console.log({product})
  const {id, image, title, price} = product
  const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT

  return(
    <div id={id} className="grid-product">
      <img src={serverEndpoint+image[0].url} alt="" />
      <p className="grid-product-name">{title}</p>
      <p>£{price.toFixed(2)}</p>
      <button className="add-to-bag">Add to Bag</button>
    </div>
  )
}

export default GridProduct