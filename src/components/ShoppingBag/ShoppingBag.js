import React, { useContext, useEffect, useState } from 'react'
import ShoppingBagItem from '../ShoppingBagItem/ShoppingBagItem'
import { steffectContext } from '../../Context'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { loadStripe } from "@stripe/stripe-js";

const ShoppingBag = () => {
  const stripeKey = process.env.REACT_APP_STRIPE_TOKEN
  const validationServer = process.env.REACT_APP_VALIDATION_SERVER_ENDPOINT
  const history = useHistory()
  const stripePromise = loadStripe(stripeKey);
  const { cart, totalPrice, cartCount, emptyCart } = useContext(steffectContext)

  //Stripe things

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      emptyCart()
      history.push({
        pathname: '/order-success'
      })
    }

    if (query.get("canceled")) {
      history.push({
        pathname: '/order-cancelled'
      })
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch(`${validationServer}/create-checkout-session`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cart
      })
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  //End stripe things

  return(
    <main className="shopping-bag-page">
    <h1>Shopping Bag</h1>
    <p className="bag-counter">Your bag ({cartCount})</p>

    {/* <!-- If bag is empty, display 'Your shopping bag is empty.' with a 'continue shopping' button--> */}
    <Link to="/products"><button className="add-to-bag">Continue Shopping</button></Link>

    <table className="bag-contents">
      <tbody>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Remove</th>
        </tr>
        
        {cart && cart.map((item)=>
          <ShoppingBagItem key={item.product.id} item={item} quantity={item.quantity}/>
          
        )}

        <tr className="total-price">
          <td>Total:</td>
          <td></td>
          <td>£{totalPrice}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <button onClick={handleClick} role="link" className="add-to-bag">Check Out</button>
  </main>
  )
}

export default ShoppingBag