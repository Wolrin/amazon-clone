import { useStateValue } from "../hooks/useStateValue";
import { Button } from "@material-ui/core";
import React, { forwardRef } from "react";
import { Star } from "@material-ui/icons";
import "../styles/CheckoutProduct.css";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div ref={ref} className="checkoutProdact">
        <img className="checkoutProdact_image" src={image} alt={image} />
        <div className="checkoutProdact_info">
          <p className="checkoutProdact_title">{title}</p>
          <p className="checkoutProdact_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProdact_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>
                  <Star style={{ color: "yellow" }} />
                </p>
              ))}
          </div>
          {!hideButton && (
            <Button onClick={removeFromBasket}>Remove from Basket</Button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
