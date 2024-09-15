import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
import Header from "../../Components/Header/Header";
import Sidebar from "./Sidebar";
import Footer from "../../Components/Footer/Footer";
import useFetch from '../../hooks/useFetch'; // تأكد من صحة المسار
import RecipeFavorites from './RecipeFavorites';
import { ChevronRight } from 'lucide-react';
function Favorites() {
  const { data, loading, error } = useFetch('http://localhost:1001/api/dish/getFavorites');
  const navigate = useNavigate(); // استخدام useNavigate

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // الوصول إلى المصفوفة من خلال مفتاح 'Favorite'
  const favorites = data?.Favorite || [];

  const handleCardClick = (data) => {
    sessionStorage.setItem("selectedDessert", JSON.stringify(data));
    navigate(`/DishDetail`);
  };

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar className="w-64" /> {/* تحديد عرض للسايد بار */}
        
        <div className="flex-1 p-4">
        <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
        <thead className="bg-[#A0785D] text-white uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-4 text-left">Name</th>
            <th className="py-3 px-4 text-left sm:hidden">Show more</th>
            <th className="py-3 px-4 text-center hidden sm:table-cell">Price</th>
            <th className="py-3 px-4 text-left hidden md:table-cell">Description</th>
            <th className="py-3 px-4 text-center hidden lg:table-cell">Image</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-600">
          {favorites.map((item) => (
            <tr
              key={item._id}
              onClick={() => handleCardClick(item)}
              className="cursor-pointer transition-colors duration-200 hover:bg-gray-50"
            >
              <td className="py-3 px-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded mr-3 sm:hidden"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500 sm:hidden">${item.price}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 border-b text-center hidden sm:table-cell">${item.price}</td>
              <td className="py-3 px-4 border-b hidden md:table-cell">
                <p className="truncate max-w-xs">{item.description}</p>
              </td>
              <td className="py-3 px-4 border-b text-center hidden lg:table-cell">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded inline-block"
                />
              </td>
              <td className="py-3 px-4 border-b text-right sm:hidden">
                <ChevronRight size={20} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

          <RecipeFavorites/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Favorites;
