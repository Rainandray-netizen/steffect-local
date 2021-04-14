import React, { useContext, useState } from 'react'
import { steffectContext } from '../../Context'

const ShoppingBagItem = ( {item, quantity} ) => {
  const [ currentQuantity, setCurrentQuantity ] = useState(quantity)
  // console.log('shopping bag item rerendered')
  const { changeQuantity, serverEndpoint, removeFromCart } = useContext(steffectContext)

  const {id, image, title, price, sale_price } = item.product
  const handleChange = (e) => {
    if(e.target.value < 1) return
    changeQuantity(item.product, parseInt(e.target.value))
    setCurrentQuantity(parseInt(e.target.value))
  }

  const handleRemove = () => {
    removeFromCart(id)
  }

  return(
    <tr>
        <td>
          <div className="bag-info">
            <img src={serverEndpoint+image[0].url} alt="" />
            <p className="grid-product-name">{title}</p>
            {sale_price ? 
            <div className='prices-wrapper'>
              <p className='sale-price price'>£{sale_price.toFixed(2)}</p> 
              <p className='old-price price'>£{price.toFixed(2)}</p>
            </div>
            :
            <p>£{price.toFixed(2)}</p>}
          </div>
        </td>
        <td><input type="number" value={currentQuantity} onChange={handleChange}/></td>
        <td>£{(sale_price ? sale_price : price)*currentQuantity}</td>
        <td onClick={handleRemove} ><svg className="bin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
          </svg></td>
      </tr>
  )
}

export default ShoppingBagItem