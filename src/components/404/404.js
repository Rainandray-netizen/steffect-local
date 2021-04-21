import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return(
    <main className="page-404">
      <h1>404 Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <button className="add-to-bag">Continue Shopping</button>
    </main>
  )
}

export default NotFound