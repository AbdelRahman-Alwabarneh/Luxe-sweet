import React from 'react';
import { Star } from 'lucide-react';
import useFetch from '../../hooks/useFetch';

const DishCard = ({ title, description, image, rating }) => (
  <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
    <div className="absolute top-4 right-4 flex space-x-1">
      <span className="bg-white text-black inline-block text-sm font-semibold px-3 py-1 rounded-full">
        Soon
      </span>
    </div>
  </div>
);

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <div key={i} className={`text-yellow-500 ${i < rating ? 'text-yellow-500' : 'text-gray-400'}`}>
        <Star size={16} />
      </div>
    ))}
  </div>
);

const UpcomingSection = () => {
  const { data: dishes, loading, error } = useFetch('http://localhost:1001/api/records/comingsoon');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Take the latest 6 dishes
  const latestDishes = dishes.slice(-6).reverse();

  return (
    <div className="relative bg-[#e2ceb1] bg-opacity-50 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center text-[#b0956e]">
          Coming soon
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestDishes.map((dish) => (
            <DishCard
              key={dish._id}
              title={dish.name}
              description={dish.description}
              image={dish.images[0]}
              rating={dish.ratings.length > 0 ? Math.round(dish.ratings[0].likes.length / 5) : 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSection;
