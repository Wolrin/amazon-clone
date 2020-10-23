import { useStateValue } from "../hooks/useStateValue";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../redux/reducer";
import { useHistory } from "react-router-dom";
import "../styles/Subtotal.css";
import React from "react";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
