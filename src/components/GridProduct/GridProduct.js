import React, { useContext } from 'react'
import { steffectContext } from '../../Context'

const GridProduct = ({product}) => {
  const { addToCart } = useContext(steffectContext)

  const handleAddToBag = () => {
    addToCart(product)
  }

  const {id, image, title, price, sale_price } = product
  const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT

  return(
    <div id={id} className="grid-product">
      <img src={serverEndpoint+image[0].url} alt="" />
      <p className="grid-product-name">{title}</p>
      {sale_price ? 
        <div className='prices-wrapper'>
          <p className='sale-price price'>£{sale_price.toFixed(2)}</p> 
          <p className='old-price price'>£{price.toFixed(2)}</p>
        </div>
      :
      <p>£{price.toFixed(2)}</p>}
      <button onClick={handleAddToBag} className="add-to-bag">Add to Bag</button>
    </div>
  )
}

export default GridProduct