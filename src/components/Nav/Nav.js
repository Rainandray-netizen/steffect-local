import React, { useContext } from 'react'
import { steffectContext } from '../../Context'
import '../../CSS/styles.css'

const Nav = () => {
  const { cart, setCart, serverEndpoint } = useContext(steffectContext)
  console.log({serverEndpoint})
  return(
    
  <header>
    {/* <!-- Mobile Nav Bar --> */}
    <nav id="nav-mobile">
      <div className="nav-buttons">
        <a href="menu.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg></a>
        <div className="search-bag">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
          <a href="/shopping-bag.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path
                d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
            </svg></a>
        </div>
      </div>
      {/* <!-- Logo --> */}
      <div id="logo">
        <img src={`${serverEndpoint}/uploads/steffect_logo_587f2bd348.png`} alt="logo"/>
      </div>
    </nav>

    {/* <!-- Desktop and Tablet Nav Bar --> */}
    <nav id="nav-desktop">
      <div className="nav-buttons">
        <div className="search-bag">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
          <a href="/shopping-bag.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path
                d="M20 7h-4v-3c0-2.209-1.791-4-4-4s-4 1.791-4 4v3h-4l-2 17h20l-2-17zm-11-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6v-3zm-4.751 18l1.529-13h2.222v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h2.222l1.529 13h-15.502z" />
            </svg></a>
        </div>
      </div>
      {/* <!-- Logo --> */}
      <div id="logo">
        <img src={`${serverEndpoint}/uploads/steffect_logo_587f2bd348.png`} alt="logo"/>
      </div>
      {/* <!-- Nav Links --> */}
      <ul className="home-navlinks">
        <a href="/index.html">
          <li>Home</li>
        </a>
        <a href="/products.html">
          <li>Products</li>
        </a>
        <a href="/about.html">
          <li>About</li>
        </a>
        <a href="/contact.html">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  </header>
    
  )
}

export default Nav