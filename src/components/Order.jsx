import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "../styles/Order.css";
import moment from "moment";
import React from "react";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:ma")}</p>
      {order.data.basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order_total">Order Total : {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
