import React, {useState, useEffect, useContext} from 'react'
import getData from './utils/apiFunctions'
export const steffectContext = React.createContext()

const serverEndpoint = process.env.REACT_APP_STEFFECT_SERVER_ENDPOINT 

export const SteffectProvider = (props) => {
  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [cart, setCart] = useState([])

  const getDataWrapper = async () => {
    setLoading(true)
    const newData = await getData()
    setData(newData)
    setLoading(false)
  }
  
  useEffect(()=>{
    getDataWrapper()
  },[])
  
  return(
      <steffectContext.Provider value={{data, setData, loading, setLoading, cart, setCart, serverEndpoint}}>
        {props.children}
      </steffectContext.Provider>
  )
}