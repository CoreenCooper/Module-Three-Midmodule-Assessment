import React from "react";

const ProductListItems = ({product, addProduct}) => {
    const { name, price, description, img } = product;

    return (
        <li>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button>Add To Cart</button>
            <img src={img}/>
            <p>{description}</p>
        </li>
    )
}


export default ProductListItems;