import React, {useState, useEffect } from 'react'
import getData from './utils/apiFunctions'
export const steffectContext = React.createContext()

const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT 

export const SteffectProvider = (props) => {
  const [ products, setProducts ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ cart, setCart] = useState([])
  const [ pages, setPages ] = useState({})

  const getDataWrapper = async () => {
    setLoading(true)
    const newProducts = await getData('products')
    const newFaq = await getData('faq-page')
    const newAbout = await getData('about-page')
    const newContact = await getData('contact-page')
    const newPages = {
      products: newProducts,
      faq: newFaq,
      about: newAbout,
      contact: newContact
    }
    setPages(newPages)
    setLoading(false)
  }
  
  const addToCart = (id) => {
    let tempCart = cart
    let finalCart = []
    let filteredCart = tempCart.filter(item=>item.id === id)
    let remainingCart = tempCart.filter(item=>item.id !== id)
    if(filteredCart[0]){
      filteredCart[0].quantity++
      remainingCart.push(filteredCart[0])
      finalCart = remainingCart
    }else{
      tempCart.push({ id, quantity : 1 })
      finalCart = tempCart
    }
    //TODO:
    //need to determine in what form to store items in cart, how to handle duplicates

    //check if current obj exists in cart
    //if the obj does exist, quantity++
    //else set new property quantity : 1
    console.log('new cart: ', finalCart)
    setCart(finalCart)
  }

  useEffect(()=>{
    getDataWrapper()
  },[])
  
  return(
      <steffectContext.Provider value={{
        addToCart,
        loading,
        setLoading,
        cart,
        setCart,
        serverEndpoint,
        pages
      }}>
        {props.children}
      </steffectContext.Provider>
  )
}