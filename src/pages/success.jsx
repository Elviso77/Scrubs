import React from "react";
import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const paymentData = location.state;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ Payment Successful!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Thank you for your order. Your payment was processed successfully.
        </p>

        {paymentData && (
          <div className="mt-4 text-left text-gray-600 dark:text-gray-300">
            <p><strong>Reference:</strong> {paymentData.reference}</p>
            <p><strong>Amount Paid:</strong> ₦{(paymentData.amount / 100).toFixed(2)}</p>
            <p><strong>Email:</strong> {paymentData.email}</p>
          </div>
        )}

        <Link
          to="/"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
