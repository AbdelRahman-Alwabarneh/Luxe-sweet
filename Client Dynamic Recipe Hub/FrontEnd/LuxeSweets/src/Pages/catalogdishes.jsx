import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Swal from "sweetalert2";

// Utility functions to manage the cart in local storage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : null;
};

const Catalogdishes = () => {
  
  const [desserts, setDesserts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [searchTerm]);


  
  const chefname = sessionStorage.getItem("selectedChefName");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:1001/api/records", {
        params: {
          search: searchTerm
     
        },
      });
      const data = response.data;

      const chefId = sessionStorage.getItem("selectedChefId");
      const filteredDesserts = data.filter(
        (dessert) => dessert.chef === chefId
      );
      setDesserts(filteredDesserts);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCardClick = (dessert) => {
    sessionStorage.setItem("selectedDessert", JSON.stringify(dessert));
    navigate(`/DishDetail`);
  };

  // Function to add a dish to the cart
  const addToCart = (dessert) => {
    let cart = getCartFromLocalStorage();

    if (!cart) {
      cart = {
        items: [],
        chef: dessert.chef,
        total: 0,
      };
    }

    // Check if the dish is from the same chef
    if (cart.chef !== dessert.chef) {
      Swal.fire({
        icon: "error",
        title: "Invalid Action",
        text: "You can only add items from the same chef.",
      });
      return;
    }

    // Add or update the item in the cart
    const existingItem = cart.items.find(
      (item) => item.dish._id === dessert._id
    );
    if (existingItem) {
      // Check if adding one more would exceed the available quantity
      if (existingItem.quantity + 1 > dessert.availableQuantity) {
        Swal.fire({
          icon: "error",
          title: "Quantity Exceeded",
          text: "Cannot add more items. Exceeds available quantity.",
        });
        return;
      }
      existingItem.quantity += 1;
    } else {
      // Check if adding this item would exceed the available quantity
      if (1 > dessert.availableQuantity) {
        Swal.fire({
          icon: "error",
          title: "Quantity Exceeded",
          text: "Cannot add more items. Exceeds available quantity.",
        });
        return;
      }
      cart.items.push({ dish: dessert, quantity: 1 });
    }

    // Update total price
    cart.total = cart.items.reduce(
      (acc, item) => acc + item.dish.price * item.quantity,
      0
    );

    saveCartToLocalStorage(cart);
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: "Dish added to cart!",
    });
  };



  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#EEE9DB]">
        <header className="bg-gradient-to-r from-[#A0785D] to-[#d3966d] text-white py-8">
          <div className="container px-4 mx-auto">
            <h1 className="text-5xl font-bold text-center">Luxe Sweets</h1>
            <p className="mt-3 text-xl italic text-center text-amber-200">
              Chef's Section {chefname}
            </p>
          </div>
          
        </header>

        <main className="container px-4 py-16 pb-12 mx-auto">
        <div className="flex justify-center mt-5">
          <div className="relative inline-block mb-8">
              <input
                type="text"
                className="px-4 py-2 text-lg font-semibold border-2 shadow-lg appearance-none rounded-2xl bg-[#fff7e2] text-amber-900 border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              />
            </div>
          </div>

        
          


     
          <div className="mb-20 text-center ">
            <h2 className="mb-6 font-serif text-5xl font-extrabold text-amber-900">
              Our Signature Collection
            </h2>
            <p className="mb-8 text-2xl italic text-amber-700">
              {desserts.length} Decadent Creations
            </p>
            
          </div>

  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {desserts.map((dessert, index) => (
              <div
                key={index}
                className="relative overflow-hidden transition duration-300 transform bg-white shadow-xl group rounded-2xl hover:scale-105"
              >
                <div className="relative cursor-pointer">
                  <img
                    src={dessert.images[0]}
                    alt={dessert.name}
                    className="object-cover w-full h-64 transition-transform duration-300 "
                    onClick={() => handleCardClick(dessert)}
                  />
                  <div
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click event from triggering on the image
                      handleCardClick(dessert); // Add your handler for showing details here
                    }}
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100"
                  >
                    <button className="text-white font-bold py-2 px-4 rounded-full bg-[#ad856b] hover:bg-[#cf9c7b] transition duration-300 ease-in-out">
                      Show details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-amber-900">
                    {dessert.name}
                  </h3>
                  <button
                    onClick={() => addToCart(dessert)}
                    className="w-full bg-[#ad856b] hover:bg-[#cf9c7b] text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out text-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Catalogdishes;
