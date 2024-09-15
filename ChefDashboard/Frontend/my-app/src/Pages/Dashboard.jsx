import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ChefContext } from '../contexts/ChefContext';


function Dashboard() {
  const [totalDishes, setTotalDishes] = useState(0);
  const { chefProfit } = useContext(ChefContext); 
  const [chefId, setChefId] = useState(null);
  const [orderCount, setOrderCount] = useState(null);
  const [totalRecipes, setTotalRecipes] = useState(0); // State for total recipes


  const fetchDishes = async (page = 1) => {
    const chefId = sessionStorage.getItem('chefId');

    // Check if chefId exists
    if (!chefId) {
      throw new Error('Chef ID not found in session storage');
    }

    try {
      const response = await axios.get('http://localhost:3000/api/Dish/GetDish', {
        params: { page, limit: 10, chefId },
      });

      // Access totalDishes from response.data
      setTotalDishes(response.data.totalDishes);
    } catch (err) {
      console.error(err.message);
    }
  };


  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/recipes/'); // Adjust endpoint as necessary
      setTotalRecipes(response.data.length); // Assuming response.data is an array of recipes
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchDishes();
    fetchRecipes();
  }, []);
/***********order*********** */


useEffect(() => {
  const storedChefId = sessionStorage.getItem("chefId");
  setChefId(storedChefId);
  if (!chefId) return;

  const fetchPayments = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/order/getAllPayments/${chefId}`);
      setOrderCount(response.data.orderCount)
     

    } catch (error) {
      console.error("Error fetching payments:", error);
    
    }
  };

  fetchPayments();
}, [chefId]);


  return (
    <div className="flex">
      <div className="w-1/4"></div>
      <div className="w-3/4 min-h-screen px-4 py-8 mt-24 mr-5">
        <div className="container mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-[#b0956e]">Dashboard</h1>
          <div className="grid grid-cols-1 gap-6 mt-20 md:grid-cols-2 lg:grid-cols-2">
            {/* Total Profit Card */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-2 text-xl font-semibold text-[#b0956e]">Total Profit</h2>
              <p className="text-2xl font-bold text-[#b0956e]">{chefProfit}</p>
            </div>

            {/* Total Orders Card */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-2 text-xl font-semibold text-[#b0956e]">Total Orders</h2>
              <p className="text-2xl font-bold text-[#b0956e]">{orderCount}</p>
            </div>

            {/* Total Dishes Card */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-2 text-xl font-semibold text-[#b0956e]">Total Dishes</h2>
              <p className="text-2xl font-bold text-[#b0956e]">{totalDishes}</p>
            </div>

            {/* Total Recipes Card */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h2 className="mb-2 text-xl font-semibold text-[#b0956e]">Total Recipes</h2>
              <p className="text-2xl font-bold text-[#b0956e]">{totalRecipes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
