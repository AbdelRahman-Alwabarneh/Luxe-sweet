// import Sidebar from "../components/sidebar/Sidebar";
import  { useState, useEffect, useContext, } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ChefContext } from '../contexts/ChefContext';
import UseSweetAlert from '../components/useSweetAlert.jsx';


function ViewDish(){


    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [openEditPopup, setOpenEditPopup] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null); 
    const [searchQuery, setSearchQuery] = useState(""); 
    const [showFilter, setShowFilter] = useState("all"); 
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { setChefImage } = useContext(ChefContext);
    const {setChefName} = useContext(ChefContext);
    const {setChefEmail} = useContext(ChefContext);
    
    const { showSuccessAlert, showErrorAlert } = UseSweetAlert();


   
    
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
        const chefImage = response.data.dishes[0].chef.image; // Get the chef's image
        const chefName = response.data.dishes[0].chef.name;
        const chefEmail = response.data.dishes[0].chef.email;
   
        setChefImage(chefImage);
        setChefEmail(chefEmail);
        setChefName(chefName);
        console.log(response.data.dishes[0].chef.image);
        setDishes(response.data.dishes);
        setCurrentPage(response.data.page);
        setTotalPages(response.data.totalPages);
        setLoading(false);
 
     
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    /**************************** */
    useEffect(() => {
 
  
      fetchDishes();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    /**********updateDish******** */


    /**************************** */
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      fetchDishes(newPage);
    };
    
    /**************************** */
    /******************************* */
  

  const handleSuccessClick = (title, message) => {
    showSuccessAlert(title, message);
  };

  const handleErrorClick = (title, message) => {
    showErrorAlert(title, message);
  };
/*************************************** */
    const updateDish = async (id, updatedData) => {
        try {
          const response = await axios.put(`http://localhost:3000/api/Dish/UpdateDish/${id}`, updatedData);
          handleSuccessClick("successfully", "The operation was completed successfully");
          console.log('Dish updated successfully:', response.data);
          // Optionally update the local state to reflect the change
          setDishes((prevDishes) =>
            prevDishes.map((dish) =>
              dish._id === id ? { ...dish, ...updatedData } : dish
            )
          );
        } catch (err) {
          handleErrorClick("Error", "Error updating dish:")
          console.error('Error updating dish:', err);
        }
      };
    /**********end updateDish******** */

      const handleCheckboxChange = (id, event) => {
        const newShowState = event.target.checked;
        updateDish(id, { show: newShowState });
      };

      
      const handleDelete = async (id) => {
        try {
          await updateDish(id, { isDeleted: true });
          handleSuccessClick("successfully", "The operation was completed successfully");
          setDishes((prevDishes) =>
            prevDishes.filter((dish) => dish._id !== id)
          );
        } catch (err) {
          console.error('Error deleting dish:', err);
        }
      };
    /*********popup******* */  
    const handleedetePopup = (dish) =>{
        setSelectedDish(dish);
        setOpenEditPopup(true);
    }
      const handlePopup = (dish) => {
        setSelectedDish(dish); // Set the selected dish to show in the popup
        setOpenPopup(true);
    };
      const closePopup = () => {
        setOpenPopup(false);
        setOpenEditPopup(false);  
        setSelectedDish(null); 
      };
/************end popup******* */
       // Filter dishes based on search query
       const filteredDishes = dishes.filter(dish => {
        const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesShowFilter =
          showFilter === "all" ||
          (showFilter === "true" && dish.show) ||
          (showFilter === "false" && !dish.show);
        return matchesSearch && matchesShowFilter;
      });
/******************************* */

const handleUpdateDish = async (e, id) => {
    e.preventDefault();
    try {
      await updateDish(id, selectedDish);
    
      closePopup(); // Close the modal after updating
    } catch (err) {
      console.error('Error updating dish:', err);
    }
  };
  
    return(



<div className="flex">
  <div className="w-1/4">
    {/* <Sidebar/> */}
 </div>  


<div className="relative w-3/4 mt-48 mb-20 mr-20 overflow-x-auto shadow-md sm:rounded-lg">

{/**************** */}
    <div className="flex flex-wrap items-center justify-between pb-4 space-y-4 bg-white flex-column md:flex-row md:space-y-0">
        {/*************Dropdowns*************** */}
      
        <div>
           
            {/************ */}
       
         
            <div className="relative">
            <label htmlFor="show-filter" className="sr-only">Filter by Show</label>
            <select
              id="show-filter"
              className="block w-40 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              value={showFilter}
              onChange={(e) => setShowFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="true">Show = True</option>
              <option value="false">Show = False</option>
            </select>
          </div>
        </div>
        {/*************end Dropdowns*************** */}
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="absolute inset-y-0 flex items-center pointer-events-none rtl:inset-r-0 start-0 ps-3">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for dishes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
            />
          </div>
    </div>
{/*************************** */}
    
    <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Show
                </th>
                <th scope="col" className="px-6 py-3">
                    image
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                    approved
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
                   
                <th scope="col" className="px-6 py-3">
                    Details
                </th>
               
            </tr>
        </thead>

        
        <tbody>
        {filteredDishes.map(dish => (
            <tr className="bg-white border-b hover:bg-gray-50" key={dish._id}>
                   <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${dish._id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      checked={dish.show}
                      onChange={(e) => handleCheckboxChange(dish._id, e)}
                    />
                    <label htmlFor={`checkbox-table-search-${dish._id}`} className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                    <img className="w-10 h-10 rounded-full" src={dish.images[0]} alt="Jese image"/>
                </th>
                <td className="px-6 py-4">
                {dish.name}
                </td>
                <td className="px-6 py-4">
                        {dish.availableQuantity === 0 ? (
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                            <span>Not available</span>
                        </div>
                        ) : (
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                            <span>Available</span>
                        </div>
                )}

                </td>
                <td className="px-6 py-4">
                    {dish.approved ?  <a href="#" className="font-medium text-green-600 hover:underline">approved</a> :  <a href="#" className="font-medium text-red-600 hover:underline">not approved</a>}
                   
                </td>
                <td className="px-6 py-4">
                    {dish.price} JD 
                </td>
                <td className="flex gap-3 px-6 py-4">
                    <FaTrashAlt onClick={() => handleDelete(dish._id)} className="cursor-pointer " />
                    <FaEdit onClick={() => handleedetePopup(dish)} className="cursor-pointer" />
                </td>
                 <td className="px-6 py-4 ">
                  
                    <button onClick={() => handlePopup(dish)} className="px-4 py-2 font-semibold text-[#b0956e] bg-transparent border border-[#b0956e] rounded hover:bg-[#a0785d] hover:text-white hover:border-transparent">
                        details
                    </button>
                    
                  
                </td>
                
            </tr>
         ))}
      
      
        </tbody>
    </table>
   { /************pagination *********** */}
    <div className="flex justify-center my-4 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded disabled:opacity-50"
      >
        <FaChevronLeft/>
      </button>
      <span className="px-4 py-2 text-sm font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded disabled:opacity-50"
      >
        <FaChevronRight/>
      </button>
    </div>
   { /************end pagination *********** */}

</div>
{/**********************popup********************* */}
{openPopup && selectedDish && (
<div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${openPopup ? "" : "hidden"}`}>
            <div className="relative w-3/4 p-12 bg-white rounded-lg shadow-lg md:w-1/2 lg:w-1/3">
                {/* Close Button */}
                <button 
                    onClick={closePopup}
                    className="absolute text-gray-600 top-4 right-4 hover:text-gray-900"
                >
                    &times;
                </button>

                {/* Image Section */}
                <div>
                    <div className="flex gap-3">
                        <img 
                            alt="sweet"
                            className="w-2/3 h-48"
                            src={selectedDish.images[0]}
                        />
                        <img
                            alt="sweet"
                            className="w-1/3 h-48"
                            src={selectedDish.images[1]}
                        />
                    </div>
                    <div className="flex gap-3 mt-3">
                        <img
                            alt="sweet"
                            className="w-1/3 h-48"
                            src={selectedDish.images[2]}
                        />
                        <img
                            alt="sweet"
                            className="w-2/3 h-48"
                            src={selectedDish.images[3]}
                        />
                    </div> 
                </div>

                {/* Details Section */}
                <div className="mt-6">
                    <div className="pb-6 border-b border-gray-200">
                        <h1 className="mt-2 text-xl font-semibold leading-7 text-gray-800 lg:text-2xl lg:leading-6">
                            {selectedDish.name}
                        </h1>
                        <div className="flex gap-7">
                            <p className="mt-2 leading-none text-gray-600">
                                <span className="font-bold"> Price</span> {selectedDish.price} 
                            </p>
                          
                        </div>
                            {selectedDish.approved ? 
                        <p className="mt-2 text-sm font-semibold leading-7 text-green-500 lg:text-sm lg:leading-6">approved</p> : <p className="mt-2 text-sm font-semibold leading-7 text-red-500 lg:text-sm lg:leading-6">not approved</p>}
                        <p className="mt-2 text-sm leading-none text-gray-600 ">
                            <span className="font-bold"> Available Quantity</span> {selectedDish.availableQuantity}
                        </p>
                        <p className="mt-2 text-sm leading-none text-gray-600 ">
                            <span className="font-bold"> Size</span> {selectedDish.size}
                        </p>
                        <p className="mt-2 leading-none text-gray-600 ">
                            <span className="font-bold"> orderCount</span> {selectedDish.orderCount}
                        </p>
                        <p className="mt-2 leading-none text-gray-600">
                            <span className="font-bold"> description</span> {selectedDish.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
         )}
{/******************end popup********************* */}
{openEditPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative flex flex-col px-5 py-10 space-y-5 bg-white border rounded-lg shadow-xl w-[60rem] sm:mx-auto">
          <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-[#b0956e] sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-3xl font-bold text-center text-gray-700">Edit Dish</h1>
          </div>

          <form onSubmit={(e) => handleUpdateDish(e, selectedDish._id)}>
            <div className="grid w-full grid-cols-1 gap-4 mt-2 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  value={selectedDish.name}
                  onChange={(e) => setSelectedDish({ ...selectedDish, name: e.target.value })}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]">
                  Enter the name of the dish
                </label>
              </div>

              <div className="relative">
                <input
                  type="number"
                  value={selectedDish.price}
                  onChange={(e) => setSelectedDish({ ...selectedDish, price: e.target.value })}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]">
                  Enter the price of dish
                </label>
              </div>
            </div>

            <div className="relative w-full mt-2">
              <textarea
                value={selectedDish.description}
                onChange={(e) => setSelectedDish({ ...selectedDish, description: e.target.value })}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
              />
              <label className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]">
                Enter the description of dish
              </label>
            </div>
            

            <div className="flex items-center w-full mt-4 gap-7">
              <button
                type="submit"
                className="shrink-0 inline-block w-36 rounded-lg bg-[#b0956e] py-3 font-bold text-white shadow-lg hover:bg-[#a08463] hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                Update
              </button>
              <button
                type="button"
                className="shrink-0 inline-block w-36 rounded-lg bg-[#e3c4a1] py-3 font-bold text-white shadow-lg hover:bg-[#edd0af] hover:shadow-2xl transition-all duration-300 ease-in-out"
                onClick={closePopup}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
{/********************************************* */}
</div>

    );
}

export default ViewDish;