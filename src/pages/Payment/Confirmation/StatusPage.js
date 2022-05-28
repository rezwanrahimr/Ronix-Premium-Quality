import React, { useEffect } from "react";
import { useStripe } from "@stripe/react-stripe-js";

const StatusPage = () => {
  const stripe = useStripe();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      console.log(paymentIntent);
      switch (paymentIntent.status) {
        case "succeeded":
          console.log("Payment succeeded!");
          break;
        case "processing":
          console.log("Your payment is processing.");
          break;
        case "requires_payment_method":
          console.log("Your payment was failed, please try again.");
          break;
        default:
          console.log("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const style = {
    textDecoration: "none",
    color: "#333",
    margin: "0 5px",
    fontSize: 15,
  };
  return (
    <React.Fragment>
      <div className="container w-2/4 mx-auto my-5 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="#61af43"
          class="bi bi-check-circle-fill text-center"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <h4 className="mt-3">Amazing!</h4>
        <h6>Thanks for your payment. Your order is being processed.</h6>
      </div>
    </React.Fragment>
  );
};

export default StatusPage;
