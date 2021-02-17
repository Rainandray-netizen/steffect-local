import React, { useContext } from 'react'
import { steffectContext } from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'
import GridProduct from '../GridProduct/GridProduct'

const Products = () => {
  const { loading, pages } = useContext(steffectContext)
  const data = pages.products

  return(
    <main className="products-page">
    <h1>Products</h1>
    <div className="all-grid">
      <form className="products-dropdown">
        <select name="product-sorter" id="product-sorter">
          <option value="newest">NEWEST</option>
          <option value="best-selling">BEST SELLING</option>
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