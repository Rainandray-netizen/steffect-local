import React, {useState, useEffect } from 'react'
import getData from './utils/apiFunctions'
export const steffectContext = React.createContext()

const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT 

export const SteffectProvider = (props) => {
  const [ loading, setLoading ] = useState(false)
  const [ cart, setCart] = useState([])
  const [ pages, setPages ] = useState({})
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ products, setProducts ] = useState([])
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ cartCount, setCartCount ] = useState(0)
  console.log({cart})

  const countCart = (countableCart) => {
    let totalCount = 0
    countableCart.forEach(item=>{
      totalCount += item.quantity
    })
    setCartCount(totalCount)
  }

  const getDataWrapper = async () => {
    setLoading(true)
    const newProducts = await getData('products')
    const newFaq = await getData('faq-page')
    const newAbout = await getData('about-page')
    const newContact = await getData('contact-page')
    const newPages = {
      faq: newFaq,
      about: newAbout,
      contact: newContact
    }
    setPages(newPages)
    setProducts(newProducts)
    setLoading(false)
  }
  

  const sumTotal = (arr) => {
    if (arr === null) {
      setTotalPrice(0)
      return
    }
    let sum = 0
    arr.forEach((item)=>{
      sum += (item.product.sale_price ? item.product.sale_price : item.product.price) * item.quantity
    })
    setTotalPrice(sum)
  }

  const addToCart = (product) => {
    let tempCart = cart
    console.log({tempCart})
    let finalCart = []
    let filteredCart = tempCart.filter(item=>item.product.id === product.id)
    let remainingCart = tempCart.filter(item=>item.product.id !== product.id)
    if(filteredCart[0]){
      filteredCart[0].quantity++
      remainingCart.push(filteredCart[0])
      finalCart = remainingCart
    }else{
      tempCart.push({ product, quantity : 1 })
      finalCart = tempCart
    }
    //TODO:
    //need to determine in what form to store items in cart, how to handle duplicates

    //check if current obj exists in cart
    //if the obj does exist, quantity++
    //else set new property quantity : 1
    setCart(finalCart)
    saveCart(finalCart)
    sumTotal(finalCart)
    countCart(finalCart)
  }

  const removeFromCart = (id) => {
    let tempCart = cart
    let finalCart = tempCart.filter(item=> item.product.id !== id)
    console.log('cart after remove: ', finalCart)
    saveCart(finalCart)
    setCart(finalCart)
    sumTotal(finalCart)
    countCart(finalCart)
  }

  const emptyCart = () => {
    saveCart(null)
    setCart([])
    setTotalPrice(0)
    setCartCount(0)
  }

  const changeQuantity = (product, num) => {
    let tempCart = cart
    let finalCart = []
    const foundIndex = tempCart.findIndex(item=> item.product.id === product.id)
    tempCart[foundIndex].quantity = num
    finalCart = tempCart
    saveCart(finalCart)
    setCart(finalCart)
    sumTotal(finalCart)
    countCart(finalCart)

    console.log('context cart: ', finalCart)
  }

  const saveCart = (arr)=>{
    let stringyCart = JSON.stringify(arr)
    localStorage.setItem('myCart', stringyCart)
  }

  useEffect(()=>{
    console.log('getting cart info')
    if(localStorage.getItem('myCart')){
      console.log('local cart found')
      const savedCart = JSON.parse(localStorage.getItem('myCart'))
      setCart(savedCart)
      sumTotal(savedCart)
      countCart(savedCart)
    }
    getDataWrapper()
  },[])
  
  return(
      <steffectContext.Provider value={{
        addToCart,
        removeFromCart,
        loading,
        setLoading,
        cart,
        serverEndpoint,
        pages,
        products,
        changeQuantity,
        totalPrice,
        emptyCart,
        searchFilter,
        setSearchFilter,
        cartCount
      }}>
        {props.children}
      </steffectContext.Provider>
  )
}