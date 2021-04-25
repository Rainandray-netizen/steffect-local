import React, { useContext } from 'react'
import {steffectContext} from '../../Context'
import Burger from '../HamburgerMenu/HamburgerMenu'

export default TestComponent => {
  const {
    data,
    setData,
    loading,
    setLoading,
    cart,
    setCart
  } = useContext(steffectContext)

  return(
    <div>
      <Burger />
      {loading ? 'loading' : 'not loading'}
    </div>
  )
}