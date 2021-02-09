import React, {useState, useEffect } from 'react'
import getData from './utils/apiFunctions'
export const steffectContext = React.createContext()

const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT 

export const SteffectProvider = (props) => {
  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ cart, setCart] = useState([])
  const [ faq, setFaq ] = useState(null)

  const getDataWrapper = async () => {
    setLoading(true)
    const newData = await getData('products')
    const newFaq = await getData('faq-page')
    setData(newData)
    setFaq(newFaq)
    setLoading(false)
  }
  
  const addToCart = (id) => {
    //need to determine in what form to store items in cart, how to handle duplicates
    setCart(cart.push(id))
  }

  useEffect(()=>{
    getDataWrapper()
  },[])
  
  return(
      <steffectContext.Provider value={{
        data,
        setData,
        loading,
        setLoading,
        cart,
        setCart,
        serverEndpoint,
        faq
      }}>
        {props.children}
      </steffectContext.Provider>
  )
}