import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, closeCart, cart, removeFromCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleCheckout = () => {
    closeCart(); // Close sidebar first

    // Navigate to checkout page and send cart data through route state
    navigate("/checkout", {
      state: { cart },
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay background */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 sm:w-96 bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold dark:text-white">Your Cart</h2>
              <button
                onClick={closeCart}
                className="text-2xl hover:text-primary transition-colors duration-200"
              >
                <IoClose />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-14 h-14 object-cover rounded-md"
                      />
                      <div>
                        <p className="font-semibold dark:text-gray-100">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ${item.price?.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer - Total + Checkout */}
            {cart.length > 0 && (
              <div className="border-t dark:border-gray-700 p-4 space-y-4">
                <div className="flex justify-between font-semibold dark:text-white">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
