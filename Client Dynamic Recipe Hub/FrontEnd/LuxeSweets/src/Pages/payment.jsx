import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { FaCcStripe, FaPaypal } from "react-icons/fa";
import Headar from "../Components/Header/Header";

// Initialize Stripe
const stripePromise = loadStripe(
  "pk_test_51Po3xJA4L1QDrrEEECST7zzuz3EwgAvliyrzirIXNUtRvRBxHoSGucEZfKX6JyA1Z5A5OpSdpSh5VUuvkwGTFAj2007tEPrtx7"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const { data, loading } = useFetch(
    "http://localhost:1001/api/auth/getAllUsers"
  );
  const users = data ? data.Users : [];
  const user = users.length > 0 ? users[0] : null;

  const [total, setTotal] = useState(0);
  const [Alldata, seAlldata] = useState({});
  useEffect(() => {
    const cartData = localStorage.getItem("cart");

    if (cartData) {
      const cart = JSON.parse(cartData);
      seAlldata(cart);
      setTotal(cart.total);
    }
  }, []);

  const fixedAmount = total; // Fixed price in cents
  console.log(Alldata);

  const handleStripeSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const response = await axios.post("http://localhost:1001/api/auth/pay", {
        userId: user._id, // Use null as default
        productId: null, // Use null as default
        fullName,
        email,
        Prise: total,
        Alldata: Alldata,
      });

      const { error: backendError, clientSecret } = response.data;

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              email: email,
              name: fullName,
            },
          },
        });

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === "succeeded") {
        Swal.fire({
          title: "Payment Successful!",
          text: "Thank you for your payment.",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("cart");
            window.location.assign("/"); // Redirect to home page
          }
        });
      }

      setProcessing(false);
    } catch (error) {
      console.error("Error:", error.message);
      setError(error.message);
      setProcessing(false);
    }
  };

  const handlePaypalSubmit = () => {
    window.location.href = "https://www.paypal.com"; // Redirect to PayPal
  };

  return (
    <>
      <Headar />

      <div className="bg-[#f4ead2] min-h-screen flex items-center justify-center py-8 px-4">
        <form
          onSubmit={handleStripeSubmit}
          className="w-full max-w-md p-6 bg-[#f5f3f0] shadow-lg rounded-lg border border-gray-300"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Checkout Page
            </h2>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Card Details
            </label>
            <CardElement
              className="p-3 border border-gray-300 rounded-md shadow-sm"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <div className="mb-4 text-center">
            <p className="text-lg font-semibold text-gray-800">
              Total Amount: ${fixedAmount}
            </p>{" "}
            {/* Fixed price display */}
          </div>
          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}
          <div className="flex space-x-4 mb-4">
            <button
              type="submit"
              disabled={!stripe || processing}
              className={`w-full p-4 text-white font-semibold rounded-md shadow-md flex items-center justify-center ${
                processing ? "bg-gray-600" : "bg-gray-800"
              } transition duration-150`}
            >
              <FaCcStripe className="w-6 h-6 mr-2 text-white" />
              {processing ? "Processing..." : "Pay with Stripe"}
            </button>
            <button
              type="button"
              onClick={handlePaypalSubmit}
              className="w-full p-4 text-white font-semibold rounded-md shadow-md flex items-center justify-center bg-[#0070ba] hover:bg-[#005a9c] transition duration-150"
            >
              <FaPaypal className="w-6 h-6 mr-2 text-white" />
              Pay with PayPal
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

const PaymentComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;
