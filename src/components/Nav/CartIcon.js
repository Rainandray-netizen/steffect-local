import React from 'react'

const CartIcon = () => {
  const { cart, serverEndpoint } = useContext(steffectContext)

  return(
    <div id='logo'>
      <img src={`${serverEndpoint}/uploads/steffect_logo_587f2bd348.png`} alt="logo"/>
    </div>
  )
}

export default CartIcon