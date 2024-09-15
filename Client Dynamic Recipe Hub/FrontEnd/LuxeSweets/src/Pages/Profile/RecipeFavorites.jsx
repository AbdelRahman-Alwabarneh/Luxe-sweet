import { useNavigate } from "react-router-dom"; // استيراد useNavigate
import Header from "../../Components/Header/Header";
import Sidebar from "./Sidebar";
import Footer from "../../Components/Footer/Footer";
import useFetch from "../../hooks/useFetch"; // تأكد من صحة المسار
import { ChevronRight } from "lucide-react";

function RecipeFavorites() {
  const { data, loading, error } = useFetch(
    "http://localhost:1001/api/recipe/getFavorites"
  );
  const navigate = useNavigate(); // استخدام useNavigate

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // الوصول إلى المصفوفة من خلال مفتاح 'Favorite'
  const favorites = data?.Favorite || [];

  const handleCardClick = (data) => {
    sessionStorage.setItem("selectedRecipe", JSON.stringify(data));
    navigate(`/Recipesdetail`);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
                <thead className="bg-[#A0785D] text-white uppercase text-sm leading-normal">
                  <tr>
                    <th className="py-3 px-4 text-left">Title</th>
                    <th className="py-3 px-4 text-left sm:hidden">Show more</th>
                    <th className="py-3 px-4 text-center hidden sm:table-cell">
                      Instructions
                    </th>
                    <th className="py-3 px-4 text-left hidden md:table-cell">
                      Images
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-gray-600">
                  {favorites.map((item) => (
                    <tr
                      key={item._id}
                      onClick={() => handleCardClick(item)}
                      className="transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <div className="text-lg font-bold text-gray-800">
                          {item.title}
                        </div>
                        <div className="md:hidden mt-2 ">
                          <p className="text-sm text-gray-600 whitespace-pre-wrap line-clamp-2 ">
                            {item.instructions}
                          </p>
                        </div>
                        <div className="lg:hidden mt-2 flex space-x-2 overflow-x-auto">
                          {item.images.slice(0, 2).map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Recipe ${index}`}
                              className="w-16 h-16 object-cover rounded flex-shrink-0"
                            />
                          ))}
                          {item.images.length > 2 && (
                            <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                              <span className="text-gray-600 font-medium">
                                +{item.images.length - 2}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="whitespace-pre-wrap line-clamp-3">
                          {item.instructions}
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="flex space-x-2 overflow-x-auto">
                          {item.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Recipe ${index}`}
                              className="w-20 h-20 object-cover rounded flex-shrink-0"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 border-b text-right sm:hidden">
                        <ChevronRight size={20} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeFavorites;
