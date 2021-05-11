import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { steffectContext } from '../../Context'
import loadingGif from '../../assets/icons/loading-spinner.gif'
import NotFound from '../404/404'
import SingleProductCarousel from '../Carousels/SingleProductCarousel'

const SingleProduct = () => {
  const { loading, products, serverEndpoint, addToCart } = useContext(steffectContext)

  const [productLocated, setProductLocated] = useState(false)

  let { id } = useParams()

  const locateProduct = () => {
    const tempProduct = products.find(product => product.id === parseInt(id))
    setProductLocated(tempProduct)
  }

  const handleAddToBag = () => {
    addToCart(productLocated)
  }

  useEffect(() => {
    console.log({productLocated})
  }, [productLocated])

  //if loading completes while page is being viewed, set the product
  useEffect(() => {
    products && locateProduct()
  }, [loading])

  //try to locate product the first time page rerenders
  useEffect(() => {
    products && locateProduct()
  }, [])

  useEffect(() => {
    products && locateProduct()
  }, [products])

  //Invalid Id provided => 404
  if (!id) {
    return (
      <NotFound />
    )
  }

  if (!productLocated && !loading) {
    return (
      <NotFound />
    )
  }

  return (
    <main className="single-product-page">

      {loading ? //show loading wheel when loading
        <div id="loading-container">
          <img id="loading-spinner" src={loadingGif} alt="loading" />
        </div>
        :
        //christine work here
        <>
          <div className="linktree">
            <Link to='/'>Home</Link>
            <p>{'>'}</p>
            <Link to='/products'>Products</Link>
            <p>{'>'}</p>
            <span>{productLocated.title}</span>

          </div>
          <div className="single-product">
            {productLocated.image.length > 1 ?
              <SingleProductCarousel>
                {productLocated.image.map((image) =>
                  <div>
                    <img src={image.url.default} alt='#' />
                  </div>
                )}
              </SingleProductCarousel>
              :
              <img src={productLocated.image[0].url.default} alt="" />
            }

            <div className="single-product-info">
              <p className="single-product-name">{productLocated.title}</p>
              {productLocated.sale_price ?
                <div className='single-product-prices-wrapper'>
                  <p className='sale-price price'>£{productLocated.sale_price.toFixed(2)}</p>
                  <p className='old-price price'>£{productLocated.price.toFixed(2)}</p>
                </div>
                :
                <p>£{productLocated.price.toFixed(2)}</p>
              }
              <button className={productLocated.sold_out ? "add-to-bag disabled" : "add-to-bag"} onClick={handleAddToBag}>{productLocated.sold_out? "Sold Out" : "Add to Bag"}</button>
              <h4>Product Description</h4>
              <div>
                <p>{productLocated.description}</p>
              </div>
            </div>
          </div>
        </>
      }

    </main>
  )
}

export default SingleProduct