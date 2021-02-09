import React, { useContext } from 'react'
import {steffectContext} from '../../Context'

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
      {loading ? 'loading' : 'not loading'}
    </div>
  )
}