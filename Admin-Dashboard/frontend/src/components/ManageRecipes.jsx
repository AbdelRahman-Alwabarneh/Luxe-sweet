//////////////////////////////work correct//////////////////



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ManageRecipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   // Fetch recipes from the server
//   const fetchRecipes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/recipes');
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error.message);
//     }
//   };

//   // Show confirmation alert before updating approval status
//   const handleApproval = async (recipeId, approved) => {
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this recipe?`,
//       text: "This action cannot be undone.",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, confirm!',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/recipes/approval', { recipeId, approved });
//         // Update local state to reflect changes
//         setRecipes(recipes.map(recipe => recipe._id === recipeId ? { ...recipe, isApproved: approved } : recipe));
//         Swal.fire(
//           'Updated!',
//           `Recipe has been ${approved ? 'approved' : 'disapproved'}.`,
//           'success'
//         );
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire(
//           'Error!',
//           'There was a problem updating the recipe status.',
//           'error'
//         );
//       }
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {recipes.map(recipe => (
//         <div
//           key={recipe._id}
//           className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
//         >
//           <img
//             src={recipe.images[0]} // تأكد من أن هذا المسار صحيح
//             alt={recipe.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
//             <p className="text-gray-600 mb-2">{recipe.instructions}</p>
//             <p className="text-gray-800 font-bold mb-4">Cooking Time: {recipe.cookingTime} minutes</p>
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${recipe.isApproved ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//                 onClick={() => handleApproval(recipe._id, true)}
//                 disabled={recipe.isApproved}
//               >
//                 {recipe.isApproved ? 'Approved' : 'Approve'}
//               </button>
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${!recipe.isApproved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
//                 onClick={() => handleApproval(recipe._id, false)}
//                 disabled={!recipe.isApproved}
//               >
//                 Disapprove
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ManageRecipes;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';

// const ManageRecipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   // Fetch recipes from the server
//   const fetchRecipes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/recipes');
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error.message);
//     }
//   };

//   // Show confirmation alert before updating approval status
//   const handleApproval = async (recipeId, approved) => {
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this recipe?`,
//       text: "This action cannot be undone.",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#a0785d',  // Consistent color with the design
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, confirm!',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/recipes/approval', { recipeId, approved });
//         // Update local state to reflect changes
//         setRecipes(recipes.map(recipe => recipe._id === recipeId ? { ...recipe, isApproved: approved } : recipe));
//         Swal.fire(
//           'Updated!',
//           `Recipe has been ${approved ? 'approved' : 'disapproved'}.`,
//           'success'
//         );
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire(
//           'Error!',
//           'There was a problem updating the recipe status.',
//           'error'
//         );
//       }
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Recipes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recipes.map(recipe => (
//           <motion.div
//             key={recipe._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={recipe.images[0]} // Ensure this path is correct
//               alt={recipe.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h3>
//               <p className="text-gray-600 mb-2">{recipe.instructions}</p>
//               <p className="text-gray-800 font-bold mb-4">Cooking Time: {recipe.cookingTime} minutes</p>
//               <div className="flex space-x-2">
//                 <button
//                   className={`px-4 py-2 rounded text-white font-semibold 
//                     ${recipe.isApproved ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//                   onClick={() => handleApproval(recipe._id, true)}
//                   disabled={recipe.isApproved}
//                 >
//                   {recipe.isApproved ? 'Approved' : 'Approve'}
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded text-white font-semibold 
//                     ${!recipe.isApproved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
//                   onClick={() => handleApproval(recipe._id, false)}
//                   disabled={!recipe.isApproved}
//                 >
//                   Disapprove
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageRecipes;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';

// const ManageRecipes = () => {
//   const [recipes, setRecipes] = useState([]);

//   // Fetch recipes from the server
//   const fetchRecipes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/recipes');
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error.message);
//     }
//   };

//   // Show confirmation alert before updating approval status
//   const handleApproval = async (recipeId, approved) => {
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this recipe?`,
//       text: "This action cannot be undone.",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#a0785d',  // Consistent color with the design
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, confirm!',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/recipes/approval', { recipeId, approved });
//         // Update local state to reflect changes
//         setRecipes(recipes.map(recipe => recipe._id === recipeId ? { ...recipe, isApproved: approved } : recipe));
//         Swal.fire(
//           'Updated!',
//           `Recipe has been ${approved ? 'approved' : 'disapproved'}.`,
//           'success'
//         );
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire(
//           'Error!',
//           'There was a problem updating the recipe status.',
//           'error'
//         );
//       }
//     }
//   };

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Recipes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recipes.map(recipe => (
//           <motion.div
//             key={recipe._id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//             whileHover={{ scale: 1.05 }}  // Scale up on hover
//             transition={{ duration: 0.3 }} // Smooth transition
//           >
//             <img
//               src={recipe.images[0]} // Ensure this path is correct
//               alt={recipe.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h3>
//               <p className="text-gray-600 mb-2">{recipe.instructions}</p>
//               <p className="text-gray-800 font-bold mb-4">Cooking Time: {recipe.cookingTime} minutes</p>
//               <div className="flex space-x-2">
//                 <button
//                   className={`px-4 py-2 rounded text-white font-semibold 
//                     ${recipe.isApproved ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//                   onClick={() => handleApproval(recipe._id, true)}
//                   disabled={recipe.isApproved}
//                 >
//                   {recipe.isApproved ? 'Approved' : 'Approve'}
//                 </button>
//                 <button
//                   className={`px-4 py-2 rounded text-white font-semibold 
//                     ${!recipe.isApproved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
//                   onClick={() => handleApproval(recipe._id, false)}
//                   disabled={!recipe.isApproved}
//                 >
//                   Disapprove
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ManageRecipes;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 3; // عدد الأطباق في كل صفحة

const ManageRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch recipes from the server
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/recipes');
      setRecipes(response.data);
      setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching recipes:', error.message);
    }
  };

  // Show confirmation alert before updating approval status
  const handleApproval = async (recipeId, approved) => {
    const result = await Swal.fire({
      title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this recipe?`,
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#a0785d',  // Consistent color with the design
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      try {
        await axios.put('http://localhost:5000/api/recipes/approval', { recipeId, approved });
        // Update local state to reflect changes
        setRecipes(recipes.map(recipe => recipe._id === recipeId ? { ...recipe, isApproved: approved } : recipe));
        Swal.fire({
          title: 'Updated',
          text: `Recipe has been ${approved ? 'approved' : 'disapproved'}.`,
          icon: 'success',
          confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
        });
        
      } catch (error) {
        console.error('Error updating approval status:', error.message);
        Swal.fire(
          'Error!',
          'There was a problem updating the recipe status.',
          'error'
        );
      }
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Get recipes for the current page
  const currentRecipes = recipes.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="p-6 bg-[#f8f4f0] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Manage Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRecipes.map(recipe => (
          <motion.div
            key={recipe._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}  // Scale up on hover
            transition={{ duration: 0.3 }} // Smooth transition
          >
            <img
              src={recipe.images[0]} // Ensure this path is correct
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#a0785d]">{recipe.title}</h3>
              <p className="text-gray-600 mb-2">{recipe.instructions}</p>
              <p className="text-gray-800 font-bold mb-4">Cooking Time: {recipe.cookingTime} minutes</p>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded text-white font-semibold 
                    ${recipe.isApproved ? 'bg-[#ccb9a4] cursor-not-allowed' : 'bg-[#a0785d] hover:bg-[#896b57]'}`}
                  onClick={() => handleApproval(recipe._id, true)}
                  disabled={recipe.isApproved}
                >
                  {recipe.isApproved ? 'Approved' : 'Approve'}
                </button>
                <button
                  className={`px-4 py-2 rounded text-white font-semibold 
                    ${!recipe.isApproved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                  onClick={() => handleApproval(recipe._id, false)}
                  disabled={!recipe.isApproved}
                >
                  Disapprove
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Previous
        </button>
        <span className="text-[#8c674f] font-bold">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageRecipes;
