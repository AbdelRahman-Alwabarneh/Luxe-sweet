import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : { items: [], total: 0 };
};

const clearCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
};

const CartPage = () => {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [totalPrice, setTotalPrice] = useState(cart.total);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.items.length === 0) {
      navigate("/Catalogdishes");
    } else {
      calculateTotalPrice();
    }
  }, [cart, navigate]);

  const calculateTotalPrice = () => {
    const total = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.dish.price,
      0
    );
    setTotalPrice(total);
    const updatedCart = { ...cart, total };
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    clearCartFromLocalStorage();
    setCart({ items: [], total: 0 });
    setTotalPrice(0);
    navigate("/PaymentComponent");
  };

  const handleRemoveItem = (index) => {
    const updatedCart = { ...cart };
    updatedCart.items.splice(index, 1);
  
    if (updatedCart.items.length === 0) {
      clearCartFromLocalStorage();
      setCart({ items: [], total: 0 });
      setTotalPrice(0); // تأكد من تعيين السعر الإجمالي إلى 0 بعد حذف السلة
    } else {
      calculateTotalPrice(); // حساب السعر الإجمالي أولاً
      setCart(updatedCart); // ثم تعيين الحالة الجديدة
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // وأخيرًا تحديث الـ Local Storage
    }
  };
  

  const adjustQuantity = (index, change) => {
    const updatedCart = { ...cart };
    const item = updatedCart.items[index];
    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) return;

    if (newQuantity > item.dish.availableQuantity) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Cannot add more than available quantity (${item.dish.availableQuantity})!`,
      });
      return;
    }

    item.quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice();
  };

  if (!cart)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#EEE9DB] min-h-screen">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-gray-800 tracking-tight">
          Your Cart
        </h1>
        {cart.items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md mx-auto"
          >
            <FaShoppingCart className="mx-auto text-4xl sm:text-6xl text-gray-400 mb-4" />
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Your cart is empty.
            </p>
            <a
              href="/catalog"
              className="text-blue-500 font-semibold hover:underline transition duration-300"
            >
              Go back to the catalog
            </a>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-xl"
          >
            <ul className="space-y-6 sm:space-y-8">
              {cart.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-6 mb-6 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 w-full">
                    <img
                      src={item.dish.images[0]}
                      alt={item.dish.name}
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md mb-4 sm:mb-0"
                    />
                    <div className="flex-grow text-center sm:text-left">
                      <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                        {item.dish.name}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start mt-3 bg-gray-100 rounded-lg inline-flex">
                        <button
                          onClick={() => adjustQuantity(index, -1)}
                          className="bg-gray-200 text-gray-600 px-3 py-1 sm:px-4 sm:py-2 rounded-l hover:bg-gray-300 transition duration-300"
                        >
                          -
                        </button>
                        <p className="px-4 sm:px-6 py-1 sm:py-2 text-gray-700 font-medium">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => adjustQuantity(index, 1)}
                          className="bg-gray-200 text-gray-600 px-3 py-1 sm:px-4 sm:py-2 rounded-r hover:bg-gray-300 transition duration-300"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        Price: ${item.dish.price.toFixed(2)}
                      </p>
                      <p className="text-sm font-medium text-gray-700 mt-1">
                        Total: ${(item.quantity * item.dish.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="mt-4 sm:mt-0 p-2 rounded-full hover:bg-red-100 focus:outline-none transition duration-300"
                  >
                    <FaTrashAlt className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 hover:text-red-600" />
                  </button>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
                Total: ${totalPrice.toFixed(2)}
              </h2>
              <button
                onClick={handleCheckout}
                className="w-full sm:w-auto bg-[#A0785D] text-white px-6 py-3 rounded-lg hover:bg-[#c49779] transition duration-300 shadow-md text-lg"
              >
                Proceed to Payment
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
