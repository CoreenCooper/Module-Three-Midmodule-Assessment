import React from "react";

const CheckoutForm = () => {
    return (
<section>
    <h2>Checkout</h2>
    <form>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName"/>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName"/>
        <label htmlFor="email">Email</label>
        <input id="email"/>
        <label htmlFor="creditCard">Credit Card</label>
        <input id="creditCard"/>
        <label htmlFor="zipCode">Zip Code</label>
        <input id="zipCode"/>
        <button>Buy Now</button>
    </form>
</section>
    )
}

export default CheckoutForm;
