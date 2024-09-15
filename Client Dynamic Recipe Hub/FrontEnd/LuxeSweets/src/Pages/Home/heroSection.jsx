import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
const IceCreamHero = () => {
  const {
    data: dishes,
    loading,
    error,
  } = useFetch("http://localhost:1001/api/records");

  return (
    <>
      <div className="bg-[#f4ead2] min-h flex flex-col lg:flex-row items-center justify-center p-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#b0956e] rounded-full -translate-x-20 -translate-y-20 blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d1b894] rounded-full translate-x-36 translate-y-36 blur-3xl opacity-50"></div>

        {/* Content Container */}
        <div className="z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left px-4 lg:px-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#b0956e] mb-6 leading-tight">
              LuxeSweets
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-md mx-auto lg:mx-0">
              Explore delicious recipes and shop exquisite sweets at LuxeSweets.
              Enjoy exclusive recipes and order treats crafted with love and
              passion!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/AllChef"
                className="bg-[#b0956e] text-white px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-[#9a7f5b] transition-colors"
              >
                Dessert dishes <ShoppingCart className="ml-2" size={20} />
              </Link>
              <Link
                to="/Catalogrecipes"
                className="bg-white text-[#b0956e] px-6 sm:px-8 py-3 rounded-full font-semibold flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                All Recipes
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative flex justify-center lg:justify-end px-4 lg:px-0">
            <img
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-cheesecake-with-chocolate-png-image_13371131.png"
              alt="Colorful ice cream cone"
              className="rounded-full w-[300px] sm:w-[400px] lg:w-[512px] object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute top-0 right-0 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-1">
              <span className="text-[#b0956e] font-bold text-xl">
                {dishes ? dishes.length : 0}
              </span>
              <span className="text-gray-500 text-sm">All Dishes</span>
            </div>
          </div>
        </div>

        {/* Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            fill="#fff"
            className="transform rotate-180"
          >
            {/* <path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path> */}
            <path
              d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z"
              opacity=".6"
            ></path>
            {/* <path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path> */}
            <path
              d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"
              opacity=".8"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default IceCreamHero;
