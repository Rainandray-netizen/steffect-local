import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { steffectContext } from '../../Context'
import { Link } from 'react-router-dom'
import '../../CSS/styles.css'
import CartIcon from './CartIcon'

const Nav = () => {
  const history = useHistory()
  const { setMenuOpen, serverEndpoint, searchFilter, setSearchFilter } = useContext(steffectContext)
  const [searchActive, setSearchActive] = useState(false)

  useEffect(()=>{
    if (searchFilter){
      setSearchActive(true)
    }
  },[searchFilter])

  const handleSearchActive = () => {
    if (searchFilter){
      console.log(searchFilter)
      history.push({
        pathname: '/products'
      })
    }else{
      setSearchActive(!searchActive)
    }
  }

  const handleSearchInput = (e) => {
    //TODO: Check if search bar is empty, then either close bar or go to products page
    //on submit go to products page
    e.preventDefault()
    console.log('BING BONG')
    history.push({
      pathname: '/products'
    })
  }

  const handleSearchChange = e => {
    setSearchFilter(e.target.value)
  }

  return (

    <header>
      {/* <!-- Mobile Nav Bar --> */}
      <nav id="nav-mobile">
        <div className="nav-buttons">
          <svg onClick ={()=>setMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
          <div className="search-bag">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg> */}
            <Link to="/shopping-bag">
              <CartIcon />
            </Link>
          </div>
        </div>
        {/* <!-- Logo --> */}
        <div id="logo">
          <img src={`${serverEndpoint}/uploads/steffect_logo_587f2bd348.png`} alt="logo" />
        </div>
        <form onSubmit={handleSearchInput} id="form-mobile">
          <svg onClick={handleSearchActive} id="searchicon-mobile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
          </svg>
          <input onChange={handleSearchChange} value={searchFilter} type="text" id="searchbar-mobile" name="searchbar-mobile" min="1" max="20" placeholder="Search" />
        </form>
      </nav>

      {/* <!-- Desktop and Tablet Nav Bar --> */}
      <nav id="nav-desktop">
        <div className="nav-inner">
          <div className="nav-buttons">
            <form id="form"  onSubmit={handleSearchInput} className={searchActive ? 'form-active' : 'form'}>
              <input value={searchFilter} onChange={handleSearchChange} type="text" id="searchbar" className={searchActive ? 'searchbar-active' : 'searchbar'} name="searchbar" min="1" max="20" placeholder="Search" />
              <svg onClick={handleSearchActive} id="searchicon" className={searchActive ? 'searchicon-active' : 'searchicon'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
              </svg>
            </form>

            <div className="search-bag">

              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
            </svg> */}
              <Link to="/shopping-bag">
                <CartIcon />
              </Link>
            </div>
          </div>
          {/* <!-- Logo --> */}
          <div id="logo">
            <img src={`${serverEndpoint}/uploads/steffect_logo_587f2bd348.png`} alt="logo" />
          </div>
        </div>
        {/* <!-- Nav Links --> */}
        <ul className="home-navlinks">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Products</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>

  )
}

export default Nav