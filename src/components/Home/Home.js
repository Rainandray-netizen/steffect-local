import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {steffectContext} from '../../Context'

const Home = () => {
  const [ featuredProducts, setFeaturedProducts ] = useState([])
  const { pages, loading, serverEndpoint} = useContext(steffectContext)
  
  if (pages.products !== undefined && featuredProducts[0] === undefined){
    let featured = pages.products.filter(product => product.featured)
    setFeaturedProducts(featured)
  }

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
      <Carousel>
        {featuredProducts.length > 0 ?
          featuredProducts.map(product =>
            <div>
              <img src={serverEndpoint+product.image[0].url} />
              <p>{product.title}</p>
            </div>
          )
          :
          <div>
            no featured products at this time
          </div>
        }
      </Carousel>
      }
      
    </section>

  </main>
  )
}

export default Home