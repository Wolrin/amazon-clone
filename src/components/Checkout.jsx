import { useStateValue } from "../hooks/useStateValue";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";
import Subtotal from "./Subtotal.jsx";
import "../styles/Checkout.css";
import React from "react";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      {basket.length ? (
        <div className="checkout">
          <div className="checkout_left">
            <img
              className="checkout_ads"
              src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
              alt="ads"
            />
            <div>
              <h3>Hello {user?.email ? user?.email : "Unknow"}</h3>
              <h2 className="checkout_title">Your shopping Basket is full</h2>
              <FlipMove duration={555} appearAnimation="elevator">
                {basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                  />
                ))}
              </FlipMove>
            </div>
          </div>
          <div className="checkout_right">
            <Subtotal />
          </div>
        </div>
      ) : (
        <div
          className="checkout"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h3>Hello {user?.email ? user?.email : "Unknow"}</h3>
          <h2 className="checkout_title">Your shopping Basket is empty</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
