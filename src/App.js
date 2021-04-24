import React from "react";
import "./App.css";
import CheckoutForm from "./CheckoutForm";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

class App extends React.Component {
  state = { cart: [] };

  addProduct = (item) => {
    this.setState((prevState) => {
      return { cart: [item, ...prevState.cart] };
    });
  };

  render() {
    const { cart } = this.state;
    let total = 0;
    this.state.cart.forEach((item) => total += item.price);
    return (
      <section>
        <ProductList addProduct={this.addProduct} />
        <ShoppingCart cart={cart} total={total || 0}/>
        <CheckoutForm total={total || 0}/>
      </section>
    );
  }
}

export default App;
