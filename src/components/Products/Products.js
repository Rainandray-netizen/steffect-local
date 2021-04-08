import React, { useContext, useState } from 'react'
import { steffectContext } from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'
import GridProduct from '../GridProduct/GridProduct'
import { useEffect } from 'react/cjs/react.development'

//TODO: explain fork

const Products = () => {
  const { loading, pages } = useContext(steffectContext)
  const [ allProducts, setAllProducts ] = useState([])
  const [ data, setData ] = useState([])
  const [ forceRerender, triggerRerender ] = useState(true)
  const [ selectFilter, setSelectFilter ] = useState('newest')
  const [ searchFilter, setSearchFilter ] = useState('')

  useEffect(()=>{
    if(pages){
      setAllProducts(pages.products)
      setData(pages.products)
    }
  },[pages])

  useEffect(()=>{
    if(pages){
      setAllProducts(pages.products)
      setData(pages.products)
    }
  },[])

  // useEffect(()=>{
  //   // console.log('filter changed')
  //   applyFilters(allProducts)
  // },[selectFilter])

  useEffect(()=>{
    applyFilters(allProducts)
  },[loading])

  useEffect(()=>{
    applyFilters(allProducts)
  })

  // useEffect(()=>{
  //   console.log('search filter changed')
  //   applyFilters(allProducts)
  // },[searchFilter])

  const applyFilters = (passedData) => {
    let tempData = passedData

    if(searchFilter!==''){
      let lowerCasedFilter = searchFilter.toLowerCase()
      tempData = tempData.filter((product)=> product.title.toLowerCase().includes(lowerCasedFilter))
      // tempData
    }else{
      tempData = allProducts
    }

    if(selectFilter === 'newest' && tempData){
      tempData = tempData.sort((a,b)=>{
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      })
    }

    if(selectFilter === 'price-low-high'){
      tempData = tempData.sort((a,b)=>{
        let aPrice = a.sale_price ? a.sale_price : a.price
        let bPrice = b.sale_price ? b.sale_price : b.price
        return aPrice - bPrice
      })
    }

    if(selectFilter === 'price-high-low'){
      tempData = tempData.sort((a,b)=>{
        let aPrice = a.sale_price ? a.sale_price : a.price
        let bPrice = b.sale_price ? b.sale_price : b.price
        return bPrice - aPrice
      })
    }

    setData(tempData)
    //manually rerendering because life is pain and changes to 
    //the internals of an array doesn't result in a change of state
    triggerRerender(!forceRerender)
  }

  const handleSelectChange = (e) =>{
    setSelectFilter(e.target.value)
  }

  const handleSearchChange = e => {
    setSearchFilter(e.target.value)
  }

  return(
    <main className="products-page">
    <h1>Products</h1>
    <div className="all-grid">
      <form className="products-dropdown">
        <input onChange={handleSearchChange}/>
        <select onChange={handleSelectChange} name="product-sorter" id="product-sorter">
          <option value="newest">NEWEST</option>
          {/* <option value="best-selling">BEST SELLING</option> */}
          <option value="price-high-low">PRICE HIGH - LOW</option>
          <option value="price-low-high">PRICE LOW - HIGH</option>
        </select>
        {/* <!-- <br><br> */}
      {/* /* <input type="submit" value="Submit"> --> */}
      </form>
      { loading ? 
        <div id="loading-container">
          <img id="loading-spinner" src={ loadingGif } alt="loading" />
        </div> 
        : 
        <section id="products-grid" className="products-grid">
          {data && data.map((product)=>
            <GridProduct key={product.id} product={product}/>
          )}
        </section>
        }
      {/* <!-- Loading Graphic --> */}
      {/* <div id="loading-container">
        <img id="loading-spinner" src="/assets/icons/loading-spinner.gif" alt="loading" />
      </div> */}

      {/* <!-- Products Grid --> */}

        {/* <!-- <div className="grid-product">
          <img src="./assets/images/products/1.jpeg" alt="">
          <p className="grid-product-name">Product Name</p>
          <p>£50</p>
          <button className="add-to-bag">Add to Bag</button>
        </div> --> */}
      
    </div>
  </main>
  )
}

export default Products