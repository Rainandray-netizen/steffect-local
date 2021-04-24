import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return(
    <main className="page-404">
      <h1>404 Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to='/products'>
        <button className="add-to-bag">Continue Shopping</button>
      </Link>
    </main>
  )
}

export default NotFound