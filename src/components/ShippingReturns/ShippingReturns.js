import React, { useContext } from 'react'
import { steffectContext } from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'
import { Link } from 'react-router-dom'

const ShippingReturns = () => {
  const { pages, loading } = useContext(steffectContext)
  const shipping = pages.shipping

  return(
    <main className="shipping-page">
      <div className="linktree">
        <Link to='/'>Home</Link>
        <p>{'>'}</p>
        <span>{'Shipping & Returns'}</span>
      </div>
      <h1>{'Shipping & Returns'}</h1>

      {!loading? 
      <>
        <h3>Shipping</h3>
        
        <div id="shippingText">
          <p>{shipping && shipping.shippingText}</p>
        </div> 
        
        <h3>Returns</h3>
        <div id="returnsText">
          <p>{shipping && shipping.returnsText}</p>
        </div>
      </>
      :
      <img src={loadingGif} alt='loading...'/>}
    </main>
  )
}

export default ShippingReturns