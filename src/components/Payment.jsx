import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../hooks/useStateValue";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { ErrorOutline } from "@material-ui/icons";
import { getBasketTotal } from "../redux/reducer";
import CheckoutProduct from "./CheckoutProduct";
import { db } from "../config/firebase";
import FlipMove from "react-flip-move";
import axios from "../config/axios";
import "../styles/Payment.css";

function Payment() {
  const [clientSecret, setClientSecret] = useState(true);
  const [{ basket, user }, dispatch] = useStateValue();
  const [processing, setProcessing] = useState("");
  const [succeded, setSucceded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const elements = useElements();
  const history = useHistory();
  const stripe = useStripe();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      setProcessing(true);
      const shop = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent?.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });
          setSucceded(true);
          setError(null);
          setProcessing(false);
          dispatch({
            type: "EMPTY_BASKET",
          });
          history.replace("/orders");
        });
    } else {
      alert("You want to signup or signin first, then you can shop .");
      history.replace("/login");
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.messege : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Lose Angulas, CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
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
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                {basket.length ? (
                  <button
                    className="abled"
                    disabled={processing || disabled || succeded}
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                ) : (
                  <button className="disabled" style={{ opacity: "0.5" }}>
                    <span>Buy Now</span>
                  </button>
                )}
              </div>
              {error && (
                <div>
                  <ErrorOutline />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
