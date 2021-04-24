import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { steffectContext } from '../../Context'
import FeaturedCarousel from '../Carousels/FeaturedCarousel'

const Home = () => {
  const [ featuredProducts, setFeaturedProducts ] = useState([])
  const { products, loading, serverEndpoint} = useContext(steffectContext)
  
  useEffect(()=>{
    if (products !== undefined && featuredProducts[0] === undefined){
      let featured = products.filter(product => product.featured)
      setFeaturedProducts(featured)
    }
  },[loading])
  
  useEffect(()=>{
    if (products !== undefined && featuredProducts[0] === undefined){
      let featured = products.filter(product => product.featured)
      setFeaturedProducts(featured)
    }
  },[loading])
  

  console.log(featuredProducts[0])

  return(
    <main>
    {/* <!-- Hero Banner --> */}
    <section className="hero-image">
      <Link to="/products"><button className="hero-button">Shop Now</button></Link>
    </section>

    {/* <!-- Featured Products Carousel --> */}
    <section className="featured-products">
      <h1>Featured Products</h1>
      {loading ?
      <div>
        loading
      </div>
      :
      <FeaturedCarousel>
        {featuredProducts.length > 0 ?
          featuredProducts.map(product =>
            <Link to={`/product/${product.id}`}>
              <div className='carousel-block'>
                <img src={serverEndpoint+product.image[0].url} />
                <p>{product.title}</p>
              </div>
            </Link >
          )
          :
          <div>
            no featured products at this time
          </div>
        }
      </FeaturedCarousel>
      // <Carousel>
      //   {featuredProducts.length > 0 ?
      //     featuredProducts.map(product =>
      //       <div>
      //         <img src={serverEndpoint+product.image[0].url} />
      //         <p>{product.title}</p>
      //       </div>
      //     )
      //     :
      //     <div>
      //       no featured products at this time
      //     </div>
      //   }
      // </Carousel>
      }
      
    </section>

  </main>
  )
}

export default Home