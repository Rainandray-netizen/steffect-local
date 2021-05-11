import React, { useContext } from 'react'
import { steffectContext } from '../../Context'
import { Link } from 'react-router-dom'

const GridProduct = ({ product }) => {
  const { addToCart } = useContext(steffectContext)

  const handleAddToBag = () => {
    addToCart(product)
  }


  const { id, image, title, price, sale_price, sold_out } = product
  const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT

  return (
    <div id={id} className="grid-product">
      <Link to={`/product/${id}`}>
        {sale_price || sold_out? <div className="product-tag sale-tag">{sold_out? 'Sold Out':'Sale'}</div> : null}
        <img src={image[0].url.default} alt="" />
        <p className="grid-product-name">{title}</p>
        {sale_price ?
          <div className='prices-wrapper'>
            <p className='sale-price price'>£{sale_price.toFixed(2)}</p>
            <p className='old-price price'>£{price.toFixed(2)}</p>
          </div>
          :
          <p>£{price.toFixed(2)}</p>}
      </Link>
      <button onClick={handleAddToBag} className={sold_out ? "add-to-bag disabled" : "add-to-bag" }>{sold_out ? "Sold Out" : "Add to Bag"}</button>
    </div>
  )
}

export default GridProduct