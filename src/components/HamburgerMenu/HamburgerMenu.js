import React, { useContext } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import SteffectLogo from '../../assets/steffect-logo.png'
import { steffectContext } from '../../Context'

const Burger = () => {

  const { menuOpen, setMenuOpen } = useContext(steffectContext)

  // const handleMenu = (menuState) => {
  //   console.log(menuState)
  //   setMenuOpen(menuState.isOpen)
  // }

  return (
    <Menu

      width={'100vw'}
      customCrossIcon={<svg id="svgcross" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
      </svg>}
      customBurgerIcon={false}
      isOpen={menuOpen}
      onStateChange={(menuState) => setMenuOpen(menuState.isOpen)}
    >
      <div className="hamburger-menu">
        <img src={SteffectLogo} alt="logo" />
        <ul className="hamburger-links">
          <a href='/'>
            <li>Home</li>
          </a>
          <a href="/products">
            <li>Products</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="/contact">
            <li>Contact</li>
          </a>
          <a href={"/shipping&returns"}>
            <li>{'Shipping & Returns'}</li>
          </a>
          <a href="/faq">
            <li>FAQ</li>
          </a>
        </ul>
      </div>
    </Menu>
  );
}

export default Burger