import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Initialize Stripe with your public key
const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// ================== CARD PAYMENT COMPONENT ==================
const CardPaymentForm = ({ total, handleOrderSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!stripe || !elements) return;

    // Simulated success (replace with backend PaymentIntent in real use)
    setTimeout(() => {
      setLoading(false);
      handleOrderSuccess();
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <CardElement
        className="border border-gray-300 dark:border-gray-600 p-3 rounded-md bg-transparent"
        options={{
          style: {
            base: { color: "#111", fontSize: "16px", "::placeholder": { color: "#888" } },
            invalid: { color: "#e5424d" },
          },
        }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-primary text-white py-3 rounded-md font-semibold mt-2"
      >
        {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </motion.button>
    </form>
  );
};

// ================== MAIN CHECKOUT PAGE ==================
const CheckoutPage = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({ name: "", email: "", address: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOrderSuccess = () => {
    setPaymentSuccess(true);
    setCart([]); // ✅ Clear cart after successful payment
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-green-600 mb-4"
        >
          ✅ Payment Successful!
        </motion.h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Thank you, {formData.name}! Your payment has been processed successfully.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"
      >

{/* 🛒 Cart Summary */}
<div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Order Summary</h2>

  {cart.length === 0 ? (
    <p className="text-gray-500 dark:text-gray-400">No items in your cart.</p>
  ) : (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {cart.map((item) => {
        // ✅ Normalize image field
        const imageSrc =
          item.image || item.img || item.imageUrl || item.picture || "/placeholder.png";

        return (
          <li key={item.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <img
                src={imageSrc}
                alt={item.title || "Product"}
                className="w-14 h-14 object-cover rounded-md border border-gray-300 dark:border-gray-700"
              />
              <div>
                <p className="font-semibold dark:text-white text-gray-800">
                  {item.title || "Unnamed Product"}
                </p>
                {item.quantity && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Qty: {item.quantity}
                  </p>
                )}
              </div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              ${item.price ? item.price.toFixed(2) : "0.00"}
            </span>
          </li>
        );
      })}
    </ul>
  )}

  <div className="mt-4 flex justify-between text-lg font-semibold dark:text-white">
    <span>Total:</span>
    <span>${cart.reduce((sum, item) => sum + (item.price || 0), 0).toFixed(2)}</span>
  </div>
</div>


        {/* 💳 Checkout Form */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Checkout Details</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 dark:border-gray-600 bg-transparent p-3 rounded-lg w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 dark:border-gray-600 bg-transparent p-3 rounded-lg w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 dark:border-gray-600 bg-transparent p-3 rounded-lg w-full"
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                rows="2"
                className="border border-gray-300 dark:border-gray-600 bg-transparent p-3 rounded-lg w-full"
              ></textarea>
            </div>

            {/* 🏦 Payment Method Selector */}
            <div>
              <h3 className="text-lg font-semibold mb-3 dark:text-gray-200">Select Payment Method</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {["paypal", "wire", "card"].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer ${
                      paymentMethod === method
                        ? "border-primary bg-primary/10"
                        : "border-gray-300 dark:border-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    {method === "paypal"
                      ? "PayPal"
                      : method === "wire"
                      ? "Wire Transfer"
                      : "Credit/Debit Card"}
                  </label>
                ))}
              </div>
            </div>

            {/* ✅ PayPal Option */}
            {paymentMethod === "paypal" && (
              <PayPalScriptProvider
                options={{ "client-id": "AfyD_3Ke-F26-73wbJnTGpZ3ix6JlVzYPT8p-56dyzyg-nAVZjXZ6ToUpMPBFNZgxQa_v1ErHF-CB3cB", currency: "USD" }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) =>
                    actions.order.create({
                      purchase_units: [{ amount: { value: total.toFixed(2) } }],
                    })
                  }
                  onApprove={(data, actions) => actions.order.capture().then(handleOrderSuccess)}
                  onError={(err) => alert("❌ Payment failed: " + err)}
                />
              </PayPalScriptProvider>
            )}

            {/* 💸 Wire Transfer Info */}
            {paymentMethod === "wire" && (
              <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg text-gray-700 dark:text-gray-300">
                <p>
                  💵 To pay via <strong>Wire Transfer</strong>, send to:
                  <br />
                  <strong>Bank:</strong> Chase Bank
                  <br />
                  <strong>Account Name:</strong> His & Hers Scrubs LLC
                  <br />
                  <strong>Routing:</strong> 021000021
                  <br />
                  <strong>Acct No:</strong> 1234567890
                </p>
                <div className="flex items-center gap-3">
                  <label className="flex items-center px-4 py-2 dark:bg-gray-600 text-gray-700 rounded-lg shadow cursor-pointer hover:bg-orange-100 transition">
                    <input type="file" />
                  </label>

                  <button className="px-5 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg shadow hover:bg-gray-300 transition">Upload</button>
                </div>
              </div>
            )}

            {/* 💳 Stripe Card Payment */}
            {paymentMethod === "card" && (
              <Elements stripe={stripePromise}>
                <CardPaymentForm total={total} handleOrderSuccess={handleOrderSuccess} />
              </Elements>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutPage;
