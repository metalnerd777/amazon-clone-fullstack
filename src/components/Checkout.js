import React from "react";
import { useStateValue } from "../dataLayer/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* el anuncio ya no aparece en el carro */}
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2 className="checkout__subTitle"></h2>
      </div>
    </div>
  );
}

export default Checkout;
