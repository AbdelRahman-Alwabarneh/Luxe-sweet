import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Catalogrecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10); // Number of items per page
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, [searchTerm, currentPage]);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:1001/api/recipe", {
        params: {
          search: searchTerm,
          page: currentPage,
          limit: limit
        }
      });
      const { totalPages, records } = response.data;
      setRecipes(records);
      setTotalPages(totalPages);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCardClick = (recipe) => {
    sessionStorage.setItem("selectedRecipe", JSON.stringify(recipe));
    navigate(`/Recipesdetail`);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-[#EEE9DB] from-[#F4EAD2] to-[#E6D5B8] min-h-screen">
        {/* Header and Filters */}
        <header className="bg-gradient-to-r from-[#A0785D] to-[#d3966d] text-white py-8">
          <div className="container px-4 mx-auto">
            <h1 className="text-5xl font-bold text-center">Luxe Sweets</h1>
            <p className="mt-3 text-xl italic text-center text-amber-200">
            Recipes Section
            </p>
          </div>
        </header>

        <div className="container mx-auto ">
          <main className="container px-4 py-16 mx-auto">
            <div className="mb-12 text-center">
              {/* Search Input */}
              <div className="relative inline-block mb-8">
                <input
                  type="text"
                  className="px-4 py-2 text-lg font-semibold border-2 shadow-lg appearance-none rounded-2xl bg-[#fff7e2] text-amber-900 border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Search by title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
              </div>
              <h2 className="mb-6 font-serif text-5xl font-extrabold text-amber-900">Exquisite Dessert Creations</h2>
              <p className="mb-8 text-2xl italic text-amber-700">{recipes.length} Delightful Recipes to Indulge In</p>
            </div>
          </main>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 gap-10 px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="overflow-hidden transition duration-300 transform bg-white shadow-xl cursor-pointer rounded-2xl hover:scale-105 hover:shadow-2xl"
                onClick={() => handleCardClick(recipe)}
              >
                <div className="relative">
                  <img
                    src={recipe.images[0]}
                    alt={recipe.title}
                    className="object-cover w-full h-64"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black opacity-0 bg-opacity-20 hover:opacity-100">
                    <span className="text-white text-lg font-semibold px-4 py-2 bg-[#8C6D46] bg-opacity-75 rounded-full">
                      View Recipe
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#8C6D46] mb-2">{recipe.title}</h3>
                  <p className="text-[#B0956E] text-sm italic">Click to learn more</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center pb-20 mt-16">
            <button
              className="px-4 py-2 mx-2 text-white rounded-lg bg-gradient-to-r from-[#A0785D] to-[#d3966d]"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 mx-2 text-white rounded-lg bg-gradient-to-r from-[#A0785D] to-[#d3966d]"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogrecipes;
