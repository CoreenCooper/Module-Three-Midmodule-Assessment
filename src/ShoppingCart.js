import React from "react";
import formatPrice from "./helpers/formatPrice";

const ShoppingCart = ({ cart, subtotal }) => {
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
      {/*fix this section*/}
      <h3>Subtotal: {formatPrice(subtotal)}</h3>
      <h3>Tax: {formatPrice(subtotal * 0.05)}</h3>
      <h3>Total: {formatPrice(subtotal * 0.05 + subtotal)}</h3>
    </section>
  );
};

export default ShoppingCart;
