import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <main>
    {/* <!-- Hero Banner --> */}
    <section className="hero-image">
      <Link to="/products"><button className="hero-button">Shop Now</button></Link>
    </section>

    {/* <!-- Featured Products Carousel --> */}
    <section className="featured-products">
      <h1>Featured Products</h1>
    </section>

  </main>
  )
}

export default Home