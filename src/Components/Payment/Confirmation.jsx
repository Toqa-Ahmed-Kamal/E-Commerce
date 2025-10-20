import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../Home/CartContext";

import Checkout1 from "../../Img/Checkout1.png";
import Confirm1 from "../../Img/Confirm1.png";
import PaymentPic from "../../Img/PaymentPic.png";

import Courier from "../../Img/Courier.png";
import Time from "../../Img/Time.png";
import ConfirmationPage from "../../Img/ConfirmationPage.png";

import "../Css/Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const { formData, totals } = location.state || {};
  const { cartItems } = useCart();

  return (
    <>
      <div className="tricking">
        <div className="checkOutTap">
          <img src={Checkout1} alt="" className="trickingImg" />
          <p className="trickingText">
            1. Checkout <hr className="trickingHr" />
          </p>
        </div>
        <div className="paymentTap">
          <img src={PaymentPic} alt="" className="trickingImg" />
          <p className="trickingText">
            2. Payment <hr className="trickingHr" />
          </p>
        </div>

        <div className="confirmationTap">
          <img src={Confirm1} alt="" className="trickingImg" />
          <p className="trickingText" style={{ color: "#D84727" }}>
            3. Confirmation{" "}
          </p>
        </div>
      </div>
      <br /> <br />
      <div className="confirmationParent">
        <div className="orderConfirmationParent">
          <img
            src={ConfirmationPage}
            alt="ConfirmationPage"
            className="orderConfirmationImg"
          />
          <p className="orderConfirmation">Order Confirmed</p>
          <p className="orderConfirmationTitle">
            Your order have been confirmed, please wait and <br /> track your
            order
          </p>
          <button
            className="orderConfirmationBtn"
            onClick={() => window.history.back()}
          >
            Go to track page
          </button>
        </div>

        <div className="orderSummary">
          <div className="orderTimeAndCourier">
            <p className="orderTime">
              <img src={Time} alt="Time" /> 10 days delivery
            </p>
            <p className="orderCourier">
              <img src={Courier} alt="Courier" /> {formData.courier}
            </p>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <p key={item.id} className="confirmationItem">
                {item.title} <br />{" "}
                <span className="paymentOrderDetailsSpan2">
                  {item.quantity} x Rp {item.price.toLocaleString()}
                </span>
              </p>
            ))
          ) : (
            <p>No items found in the cart.</p>
          )}

          <p className="detailsOrderPrice">
            Subtotal{" "}
            <span className="detailsOrderPriceSpan">
              Rp {totals.subtotal.toLocaleString()}0.000
            </span>
          </p>
          <p className="detailsOrderPrice">
            Shipping Cost{" "}
            <span className="detailsOrderPriceSpan">
              Rp {totals.shippingCost.toLocaleString()}.000
            </span>
          </p>
          <p className="detailsOrderPrice">
            Packaging{" "}
            <span className="detailsOrderPriceSpan">
              Rp {totals.packaging.toLocaleString()}.000
            </span>
          </p>
          <hr className="detailsOrderHr" />
          <p className="detailsOrderPrice">
            Grand Total{" "}
            <span className="detailsOrderPriceSpanGrand">
              {" "}
              Rp {totals.grandTotal.toLocaleString()}
            </span>
          </p>
          <hr className="detailsOrderHr" />

          <p className="confirmationShippingAddress">
            Shipping Address{" "}
            <span className="confirmationShippingAddressSpan">
              {formData.shippingAddress}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
