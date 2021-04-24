import React from "react";
import formatPrice from "./helpers/formatPrice";

const ShoppingCart = ({ cart, total }) => {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => {
          console.log(product);
          const { name, price, id } = product;
          return (
            <li key={id}>
              {name}: {formatPrice(price)}
            </li>
          );
        })}
      </ul>
      <h3>Subtotal: {formatPrice(total)}</h3>
      <h3>Tax: {formatPrice(total * .05)}</h3> {/*fix this section*/}
      <h3>Total: {formatPrice(total)}</h3>
    </section>
  );
};

export default ShoppingCart;
