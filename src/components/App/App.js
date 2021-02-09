import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Products from '../Products/Products'
import { SteffectProvider } from '../../Context'
import TestComponent from '../TestComponent/TestComponent'
import Nav from '../Nav/Nav'


const App = () => {
  return(
    <SteffectProvider>
      <Nav />
      <Router>
        <TestComponent />
      </Router>
    </SteffectProvider>
  )
}

export default App