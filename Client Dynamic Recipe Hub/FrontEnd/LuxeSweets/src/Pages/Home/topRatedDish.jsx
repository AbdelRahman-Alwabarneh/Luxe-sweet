import React from "react";
import { Star } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const DishCard = ({ name, description, images, orderCount, onClick }) => (
  <div 
    className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl cursor-pointer"
    onClick={onClick}
  >
    <img src={images[0]} alt={name} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
    <div className="absolute top-4 right-4 flex space-x-1">
      <StarRating rating={Math.min(5, Math.floor(orderCount / 10))} />
    </div>
  </div>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5`}
        style={{
          fill: i < rating ? "#FBBF24" : "none",
          stroke: i < rating ? "#FBBF24" : "none",
        }}
      />
    ))}
  </div>
);

const TopRatedDish = () => {
  const navigate = useNavigate();
  const {
    data: dishes,
    loading,
    error,
  } = useFetch("http://localhost:1001/api/records");

  const handleCardClick = (data) => {
    sessionStorage.setItem("selectedDessert", JSON.stringify(data));
    navigate(`/DishDetail`);
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  const sortedDishes =
    dishes?.sort((a, b) => b.orderCount - a.orderCount) || [];
  const mainDish = sortedDishes[0];
  const topRatedDishes = sortedDishes.slice(1, 7);

  return (
    <div className="container mx-auto px-4 py-20 bg-[#e2ceb1] bg-opacity-10">
      <div className="max-w-6xl mx-auto">
        {mainDish && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#b0956e]">
              Our Top Rated Dish
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <DishCard {...mainDish} onClick={() => handleCardClick(mainDish)} />
              </div>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#b0956e] text-center">
            Top Rated Dishes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRatedDishes.map((dish) => (
              <DishCard
                key={dish._id}
                {...dish}
                onClick={() => handleCardClick(dish)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedDish;
