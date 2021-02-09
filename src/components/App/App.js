import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SteffectProvider } from '../../Context'
import TestComponent from '../TestComponent/TestComponent'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import About from '../About/About'
import Products from '../Products/Products'
import Contact from '../Contact/Contact'
import ShoppingBag from '../ShoppingBag/ShoppingBag'
import Footer from '../Footer/Footer'
import Faq from '../Faq/Faq'


const App = () => {
  return(
    <SteffectProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route path='/product/:id'>
            <p>single product</p>
          </Route>
          <Route exact path='/menu'>
            <p>menu</p>
          </Route>
          <Route exact path='/shopping-bag'>
            <ShoppingBag />
          </Route>
          <Route exact path='/faq'>
            <Faq />
          </Route>
          <Route path='/' default>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </SteffectProvider>
  )
}

export default App