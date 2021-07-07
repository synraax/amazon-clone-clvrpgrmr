/* eslint-disable no-unused-vars */
import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="http://cdn-blog.cpcstrategy.com/wp-content/uploads/2017/03/CPC_Billboard-Banner_Blog-Amazon-SPG-2017-c.png"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Keranjangmu raono isine ndes</h2>
            <p>
              Raono item nang keranjangmu. To buy one, click on "Add to basket"
              next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Keranjangmu</h2>
            {/* list item to checkout */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      <div className="checkout_right">
          <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
