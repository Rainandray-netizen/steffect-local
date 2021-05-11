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
import OrderSuccess from '../OrderSuccess/OrderSuccess'
import OrderCancelled from '../OrderCancelled/OrderCancelled'
import SingleProduct from '../SingleProduct/SingleProduct'
import NotFound from "../404/404";
import ShippingReturns from '../ShippingReturns/ShippingReturns'
import Burger from '../HamburgerMenu/HamburgerMenu'

const App = () => {
  return (
    <SteffectProvider>
      <Router>
        <Burger />
        <Nav />
        <Switch>
          <Route exact path='/test'>
            <TestComponent />
          </Route>
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
            <SingleProduct /> 
          </Route>
          <Route exact path='/shopping-bag'>
            <ShoppingBag />
          </Route>
          <Route exact path='/faq'>
            <Faq />
          </Route>
          <Route exact path={'/shipping&returns'}>
            <ShippingReturns />
          </Route>
          <Route exact path='/order-success'>
            <OrderSuccess />
          </Route>
          <Route exact path='/order-cancelled'>
            <OrderCancelled />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <NotFound default />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </SteffectProvider>
  )
}

export default App