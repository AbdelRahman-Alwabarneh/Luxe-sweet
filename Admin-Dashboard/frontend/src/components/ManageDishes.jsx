// // src/components/ManageDishes.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ManageDishes = () => {
//   const [dishes, setDishes] = useState([]);

//   // Fetch dishes from the server
//   const fetchDishes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/dishes');
//       setDishes(response.data);
//     } catch (error) {
//       console.error('Error fetching dishes:', error.message);
//     }
//   };

//   // Update approval status of a dish
//   const updateApprovalStatus = async (dishId, approved) => {
//     try {
//       await axios.put('http://localhost:5000/api/dishes/approval', { dishId, approved });
//       // Update local state to reflect changes
//       setDishes(dishes.map(dish => dish._id === dishId ? { ...dish, approved } : dish));
//     } catch (error) {
//       console.error('Error updating approval status:', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   return (
//     <div className="dish-container">
//       {dishes.map(dish => (
//         <div key={dish._id} className="dish-card">
//           <img src={dish.images[0]} alt={dish.name} className="dish-image" />
//           <h3>{dish.name}</h3>
//           <p>{dish.description}</p>
//           <p>Price: ${dish.price.toFixed(2)}</p>
//           <div className="buttons">
//             <button
//               className="approve-button"
//               onClick={() => updateApprovalStatus(dish._id, true)}
//               disabled={dish.approved}
//             >
//               {dish.approved ? 'Approved' : 'Approve'}
//             </button>
//             <button
//               className="disapprove-button"
//               onClick={() => updateApprovalStatus(dish._id, false)}
//               disabled={!dish.approved}
//             >
//               Disapprove
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ManageDishes;



// // src/components/ManageDishes.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ManageDishes = () => {
//   const [dishes, setDishes] = useState([]);

//   // Fetch dishes from the server
//   const fetchDishes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/dishes');
//       setDishes(response.data);
//     } catch (error) {
//       console.error('Error fetching dishes:', error.message);
//     }
//   };

//   // Update approval status of a dish
//   const updateApprovalStatus = async (dishId, approved) => {
//     try {
//       await axios.put('http://localhost:5000/api/dishes/approval', { dishId, approved });
//       // Update local state to reflect changes
//       setDishes(dishes.map(dish => dish._id === dishId ? { ...dish, approved } : dish));
//     } catch (error) {
//       console.error('Error updating approval status:', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {dishes.map(dish => (
//         <div
//           key={dish._id}
//           className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
//         >
//           <img
//             src={dish.images[0]}
//             alt={dish.name}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
//             <p className="text-gray-600 mb-2">{dish.description}</p>
//             <p className="text-gray-800 font-bold mb-4">Price: ${dish.price.toFixed(2)}</p>
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${dish.approved ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//                 onClick={() => updateApprovalStatus(dish._id, true)}
//                 disabled={dish.approved}
//               >
//                 {dish.approved ? 'Approved' : 'Approve'}
//               </button>
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${!dish.approved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
//                 onClick={() => updateApprovalStatus(dish._id, false)}
//                 disabled={!dish.approved}
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

// export default ManageDishes;


/////////////////////////////////////////////work correct////////////////

// // src/components/ManageDishes.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ManageDishes = () => {
//   const [dishes, setDishes] = useState([]);

//   // Fetch dishes from the server
//   const fetchDishes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/dishes');
//       setDishes(response.data);
//     } catch (error) {
//       console.error('Error fetching dishes:', error.message);
//     }
//   };

//   // Show confirmation alert before updating approval status
//   const handleApproval = async (dishId, approved) => {
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this dish?`,
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
//         await axios.put('http://localhost:5000/api/dishes/approval', { dishId, approved });
//         // Update local state to reflect changes
//         setDishes(dishes.map(dish => dish._id === dishId ? { ...dish, approved } : dish));
//         Swal.fire(
//           'Updated!',
//           `Dish has been ${approved ? 'approved' : 'disapproved'}.`,
//           'success'
//         );
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire(
//           'Error!',
//           'There was a problem updating the dish status.',
//           'error'
//         );
//       }
//     }
//   };

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {dishes.map(dish => (
//         <div
//           key={dish._id}
//           className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
//         >
//           <img
//             src={dish.images[0]}
//             alt={dish.name}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
//             <p className="text-gray-600 mb-2">{dish.description}</p>
//             <p className="text-gray-800 font-bold mb-4">Price: ${dish.price.toFixed(2)}</p>
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${dish.approved ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//                 onClick={() => handleApproval(dish._id, true)}
//                 disabled={dish.approved}
//               >
//                 {dish.approved ? 'Approved' : 'Approve'}
//               </button>
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${!dish.approved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
//                 onClick={() => handleApproval(dish._id, false)}
//                 disabled={!dish.approved}
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

// export default ManageDishes;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';  // مكتبة Framer Motion

// const ManageDishes = () => {
//   const [dishes, setDishes] = useState([]);

//   // Fetch dishes from the server
//   const fetchDishes = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/dishes');
//       setDishes(response.data);
//     } catch (error) {
//       console.error('Error fetching dishes:', error.message);
//     }
//   };

//   // Show confirmation alert before updating approval status
//   const handleApproval = async (dishId, approved) => {
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this dish?`,
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
//         await axios.put('http://localhost:5000/api/dishes/approval', { dishId, approved });
//         // Update local state to reflect changes
//         setDishes(dishes.map(dish => dish._id === dishId ? { ...dish, approved } : dish));
//         Swal.fire(
//           'Updated!',
//           `Dish has been ${approved ? 'approved' : 'disapproved'}.`,
//           'success'
//         );
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire(
//           'Error!',
//           'There was a problem updating the dish status.',
//           'error'
//         );
//       }
//     }
//   };

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
//       {dishes.map(dish => (
//         <motion.div
//           key={dish._id}
//           className="bg-white shadow-md rounded-lg overflow-hidden"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           whileHover={{ scale: 1.05 }}
//         >
//           <img
//             src={dish.images[0]}
//             alt={dish.name}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2 text-[#a0785d]">{dish.name}</h3>
//             <p className="text-gray-600 mb-2">{dish.description}</p>
//             <p className="text-gray-800 font-bold mb-4">Price: ${dish.price.toFixed(2)}</p>
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${dish.approved ? 'bg-green-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
//                 onClick={() => handleApproval(dish._id, true)}
//                 disabled={dish.approved}
//               >
//                 {dish.approved ? 'Approved' : 'Approve'}
//               </button>
//               <button
//                 className={`px-4 py-2 rounded text-white font-semibold 
//                   ${!dish.approved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
//                 onClick={() => handleApproval(dish._id, false)}
//                 disabled={!dish.approved}
//               >
//                 Disapprove
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ManageDishes;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';  // مكتبة Framer Motion

const ITEMS_PER_PAGE = 6; // عدد الأطباق في كل صفحة

const ManageDishes = () => {
  const [dishes, setDishes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch dishes from the server
  const fetchDishes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
      setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching dishes:', error.message);
    }
  };

  // Show confirmation alert before updating approval status
  const handleApproval = async (dishId, approved) => {
    const result = await Swal.fire({
      title: `Are you sure you want to ${approved ? 'approve' : 'disapprove'} this dish?`,
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
        await axios.put('http://localhost:5000/api/dishes/approval', { dishId, approved });
        // Update local state to reflect changes
        setDishes(dishes.map(dish => dish._id === dishId ? { ...dish, approved } : dish));
        Swal.fire({
          title: 'Updated',
          text: `Dish has been ${approved ? 'approved' : 'disapproved'}.`,
          icon: 'success',
          confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
        });
        
      } catch (error) {
        console.error('Error updating approval status:', error.message);
        Swal.fire(
          'Error!',
          'There was a problem updating the dish status.',
          'error'
        );
      }
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  // Get dishes for the current page
  const currentDishes = dishes.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className=" p-6 bg-[#f8f4f0] min-h-screen scrollable-page">
            <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Manage Dish</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentDishes.map(dish => (
          <motion.div
            key={dish._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={dish.images[0]}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#a0785d]">{dish.name}</h3>
              <p className="text-gray-600 mb-2">{dish.description}</p>
              <p className="text-gray-800 font-bold mb-4">Price: ${dish.price.toFixed(2)}</p>
              <div className="flex space-x-2">
                <button
                  className={`px-4 py-2 rounded text-white font-semibold 
                    ${dish.approved ? 'bg-[#ccb9a4] cursor-not-allowed' : 'bg-[#a0785d] hover:bg-[#896b57]'}`}
                  onClick={() => handleApproval(dish._id, true)}
                  disabled={dish.approved}
                >
                  {dish.approved ? 'Approved' : 'Approve'}
                </button>
                <button
                  className={`px-4 py-2 rounded text-white font-semibold 
                    ${!dish.approved ? 'bg-red-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                  onClick={() => handleApproval(dish._id, false)}
                  disabled={!dish.approved}
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

export default ManageDishes;
