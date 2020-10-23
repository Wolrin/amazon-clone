import { useStateValue } from "../hooks/useStateValue";
import { Button } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import "../styles/Prodact.css";
import React from "react";

function Prodact({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="prodact">
      <div className="prodact_info">
        <p>{title}</p>
        <p className="prodact_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prodact_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <Star style={{ color: "yellow" }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt={image} />
      <Button onClick={addToBasket}>Add to Basket</Button>
    </div>
  );
}

export default Prodact;
