import React from "react";

const ProductListItems = ({product, addProduct}) => {
    const { name, price, description, img } = product;

    return (
        <li>
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <button>Add To Cart</button>
            <img src={img} alt="item"/>
            <p>{description}</p>
        </li>
    )
}


export default ProductListItems;