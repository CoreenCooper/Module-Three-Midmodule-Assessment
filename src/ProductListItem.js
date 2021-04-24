import React from "react";
import formatPrice from "./helpers/formatPrice"

const ProductListItems = ({product, addProduct}) => {
    const { name, price, description, img } = product;

    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {formatPrice(price)}</p>
            <button onClick={()=> addProduct(product)}>Add To Cart</button>
            <img src={img} alt="item"/>
            <p>{description}</p>
        </li>
    )
}


export default ProductListItems;