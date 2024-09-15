import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const ChefCard = ({ name, image, bio }) => (
  <div className="w-96 relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[0.99] hover:shadow-xl">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-[12px] font-semibold text-white mb-2">{bio}</p>
    </div>
  </div>
);

function AllChef() {
  const [chefs, setChefs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching data from API
    axios
      .get("http://localhost:1001/api/chef/getChef")
      .then((response) => {
        // Set all chefs data without filtering
        setChefs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the chefs data:", error);
      });
  }, []);

  // Function to handle click on a card
  const handleCardClick = (chefId, chefName) => {
    // Save the chefId to sessionStorage
    sessionStorage.setItem("selectedChefId", chefId);
    sessionStorage.setItem("selectedChefName", chefName);
    navigate(`/Catalogdishes`);
  };

  return (
    <>
      <Header />
      <div className="bg-[#EEE9DB] min-h-screen flex flex-col items-center justify-center py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Talented Chefs
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the culinary masterpieces created by our talented chefs,
            each bringing unique flavors and exceptional skills to the table.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
          {chefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl relative group"
              onClick={() => handleCardClick(chef._id, chef.name)}
            >
              <div className="relative">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold px-4 py-2 bg-[#8C6D46] bg-opacity-75 rounded-full">
                    Show details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl  font-bold text-[#8C6D46] mb-2">
                  {chef.name}
                </h3>
                <p className="text-[#B0956E] text-sm ">Click to learn more</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllChef;
