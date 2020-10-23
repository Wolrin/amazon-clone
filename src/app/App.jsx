import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "../hooks/useStateValue";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "../components/Checkout";
import Payment from "../components/Payment";
import { auth } from "../config/firebase";
import Header from "../components/Header";
import Orders from "../components/Orders";
import React, { useEffect } from "react";
import Login from "../components/Login";
import Home from "../components/Home";
import "../styles/App.css";

const promise = loadStripe(
  "pk_test_51HQAYRCzvNMXiuSQuz0CQESh2vfFLS0iNVGmn8Iq2RgDDCdfebp38j741bzIEcnITDyY3DOeB7xN5CASabgchBKL007I2U9MnS"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
