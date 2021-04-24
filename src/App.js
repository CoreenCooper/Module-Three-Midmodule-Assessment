import React from "react";
import "./App.css";
import CheckoutForm from "./CheckoutForm";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = { cart: [], total: 0, subtotal: 0, tax: 0 };

  addProduct = (item) => {
    this.setState((prevState) => {
      return { cart: [item, ...prevState.cart] };
    });
  };

  render() {
    const { cart } = this.state;
    let subtotal = 0;
  
    this.state.cart.forEach((item) => subtotal += item.price);
  

    return (
      <section>
        <ProductList addProduct={this.addProduct} />
        <ShoppingCart cart={cart} subtotal={subtotal || 0}/>
        <CheckoutForm subtotal={subtotal || 0}/>
      </section>
    );
  }
}

export default App;
