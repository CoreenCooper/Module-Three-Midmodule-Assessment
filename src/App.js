import "./App.css";
import CheckoutForm from "./CheckoutForm";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

const App = () => {
  return (
    <section>
      <ProductList />
      <ShoppingCart />
      <CheckoutForm />
    </section>
    );
};

export default App;
