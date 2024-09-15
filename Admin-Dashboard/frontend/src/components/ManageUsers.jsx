// import React, { useState, useEffect } from 'react';
// import API from '../api';

// function ManageUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await API.get('/users');
//         setUsers(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const updateUserRole = async (userId, role) => {
//     try {
//       await API.put('/users/update', { userId, role });
//       alert('User updated successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>User Management</h2>
//       {users.map((user) => (
//         <div key={user._id}>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
// <button>Active </button>
// <button>DeActive </button>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default ManageUsers;


// import React, { useState, useEffect } from 'react';
// import API from '../api';

// function ManageUsers() {
//   const [users, setUsers] = useState([]);

//   // Fetch users from the server
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await API.get('/users');
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Function to update user role and activation status
//   const updateUserStatus = async (userId, isActive) => {
//     try {
//       await API.put('/users/update', { userId, isActive });
//       alert(`User ${isActive ? 'activated' : 'deactivated'} successfully`);
//       // Update local state to reflect changes
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, isActive } : user
//         )
//       );
//     } catch (error) {
//       console.error('Error updating user status:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">User Management</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No users available.
//                 </td>
//               </tr>
//             ) : (
//               users.map((user) => (
//                 <tr key={user._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {user.isActive ? (
//                       <span className="text-green-600 font-semibold">Active</span>
//                     ) : (
//                       <span className="text-red-600 font-semibold">Inactive</span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => updateUserStatus(user._id, true)}
//                       disabled={user.isActive}
//                       className={`px-4 py-2 mr-2 rounded text-white font-semibold ${
//                         user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-green-500 hover:bg-green-600'
//                       }`}
//                     >
//                       Activate
//                     </button>
//                     <button
//                       onClick={() => updateUserStatus(user._id, false)}
//                       disabled={!user.isActive}
//                       className={`px-4 py-2 rounded text-white font-semibold ${
//                         !user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       Deactivate
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ManageUsers;


// // ManageUsers.js
// import React, { useState, useEffect } from 'react';
// import API from '../api';

// function ManageUsers() {
//   const [users, setUsers] = useState([]);

//   // Fetch users from the server
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await API.get('/users');
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);



// const updateUserStatus = async (userId, isActive) => {
//   try {
//     const response = await API.put('/users/update', { userId, isActive });
//     alert(response.data.message || 'User status updated successfully'); // Display success message from the server or a default message
//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user._id === userId ? { ...user, isActive } : user
//       )
//     );
//   } catch (error) {
//     console.error('Error updating user status:', error);
//     alert('Error updating user status. Please try again.');
//   }
// };


//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">User Management</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No users available.
//                 </td>
//               </tr>
//             ) : (
//               users.map((user) => (
//                 <tr key={user._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {user.isActive ? (
//                       <span className="text-green-600 font-semibold">Active</span>
//                     ) : (
//                       <span className="text-red-600 font-semibold">Inactive</span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => updateUserStatus(user._id, true)}
//                       disabled={user.isActive}
//                       className={`px-4 py-2 mr-2 rounded text-white font-semibold ${
//                         user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-green-500 hover:bg-green-600'
//                       }`}
//                     >
//                       Activate
//                     </button>
//                     <button
//                       onClick={() => updateUserStatus(user._id, false)}
//                       disabled={!user.isActive}
//                       className={`px-4 py-2 rounded text-white font-semibold ${
//                         !user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       Deactivate
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default ManageUsers;



// import React, { useState, useEffect } from 'react';
// import API from '../api';

// function ManageUsers() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;

//   // Fetch users from the server
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await API.get('/users');
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const updateUserStatus = async (userId, isActive) => {
//     try {
//       const response = await API.put('/users/update', { userId, isActive });
//       alert(response.data.message || 'User status updated successfully'); // Display success message from the server or a default message
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, isActive } : user
//         )
//       );
//     } catch (error) {
//       console.error('Error updating user status:', error);
//       alert('Error updating user status. Please try again.');
//     }
//   };

//   // Slice the users for the current page
//   const indexOfLastUser = currentPage * rowsPerPage;
//   const indexOfFirstUser = indexOfLastUser - rowsPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // Handle page change
//   const handlePageChange = (direction) => {
//     setCurrentPage((prevPage) => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       if (newPage >= 1 && newPage <= totalPages) {
//         return newPage;
//       }
//       return prevPage;
//     });
//   };

//   // Calculate total pages
//   const totalPages = Math.ceil(users.length / rowsPerPage);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">User Management</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No users available.
//                 </td>
//               </tr>
//             ) : (
//               currentUsers.map((user) => (
//                 <tr key={user._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {user.isActive ? (
//                       <span className="text-green-600 font-semibold">Active</span>
//                     ) : (
//                       <span className="text-red-600 font-semibold">Inactive</span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => updateUserStatus(user._id, true)}
//                       disabled={user.isActive}
//                       className={`px-4 py-2 mr-2 rounded text-white font-semibold ${
//                         user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-green-500 hover:bg-green-600'
//                       }`}
//                     >
//                       Activate
//                     </button>
//                     <button
//                       onClick={() => updateUserStatus(user._id, false)}
//                       disabled={!user.isActive}
//                       className={`px-4 py-2 rounded text-white font-semibold ${
//                         !user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       Deactivate
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-4 flex justify-between items-center">
//         <button
//           onClick={() => handlePageChange('prev')}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => handlePageChange('next')}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ManageUsers;


////////////////////////////////////work correct/////////////////////

// import React, { useState, useEffect } from 'react';
// import API from '../api';
// import Swal from 'sweetalert2';

// function ManageUsers() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;

//   // Fetch users from the server
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await API.get('/users');
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const updateUserStatus = async (userId, isActive) => {
//     try {
//       const response = await API.put('/users/update', { userId, isActive });
//       Swal.fire({
//         title: 'Success!',
//         text: response.data.message || 'User status updated successfully',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, isActive } : user
//         )
//       );
//     } catch (error) {
//       console.error('Error updating user status:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Error updating user status. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   // Slice the users for the current page
//   const indexOfLastUser = currentPage * rowsPerPage;
//   const indexOfFirstUser = indexOfLastUser - rowsPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // Handle page change
//   const handlePageChange = (direction) => {
//     setCurrentPage((prevPage) => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       if (newPage >= 1 && newPage <= totalPages) {
//         return newPage;
//       }
//       return prevPage;
//     });
//   };

//   // Calculate total pages
//   const totalPages = Math.ceil(users.length / rowsPerPage);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">User Management</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No users available.
//                 </td>
//               </tr>
//             ) : (
//               currentUsers.map((user) => (
//                 <tr key={user._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {user.isActive ? (
//                       <span className="text-green-600 font-semibold">Active</span>
//                     ) : (
//                       <span className="text-red-600 font-semibold">Inactive</span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => updateUserStatus(user._id, true)}
//                       disabled={user.isActive}
//                       className={`px-4 py-2 mr-2 rounded text-white font-semibold ${
//                         user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-green-500 hover:bg-green-600'
//                       }`}
//                     >
//                       Activate
//                     </button>
//                     <button
//                       onClick={() => updateUserStatus(user._id, false)}
//                       disabled={!user.isActive}
//                       className={`px-4 py-2 rounded text-white font-semibold ${
//                         !user.isActive
//                           ? 'bg-gray-400 cursor-not-allowed'
//                           : 'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       Deactivate
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-4 flex justify-between items-center">
//         <button
//           onClick={() => handlePageChange('prev')}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() => handlePageChange('next')}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ManageUsers;




// import React, { useState, useEffect } from 'react';
// import API from '../api';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';  // مكتبة Framer Motion

// function ManageUsers() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;

//   // Fetch users from the server
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await API.get('/users');
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const updateUserStatus = async (userId, isActive) => {
//     try {
//       const response = await API.put('/users/update', { userId, isActive });
     
//       await Swal.fire({
//         title: 'Success',
//         text: `Response sent successfully.`,
//         icon: 'success',
//         confirmButtonText: 'OK',
//         confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
//       });
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, isActive } : user
//         )
//       );
//     } catch (error) {
//       console.error('Error updating user status:', error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Error updating user status. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   // Pagination handling
//   const indexOfLastUser = currentPage * rowsPerPage;
//   const indexOfFirstUser = indexOfLastUser - rowsPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   const handlePageChange = (direction) => {
//     setCurrentPage((prevPage) => {
//       const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
//       if (newPage >= 1 && newPage <= totalPages) {
//         return newPage;
//       }
//       return prevPage;
//     });
//   };

//   const totalPages = Math.ceil(users.length / rowsPerPage);

//   return (
//     <div className="p-8">
//       <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">User Management</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Status</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentUsers.length === 0 ? (
//               <motion.tr
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No users available.
//                 </td>
//               </motion.tr>
//             ) : (
//               currentUsers.map((user) => (
//                 <motion.tr
//                   key={user._id}
//                   className="border-t"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {user.isActive ? (
//                       <span className="text-[#a0785d] font-semibold">Active</span>
//                     ) : (
//                       <span className="text-red-600 font-semibold">Inactive</span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => updateUserStatus(user._id, true)}
//                       disabled={user.isActive}
//                       className={`px-4 py-2 mr-2 rounded text-white font-semibold ${
//                         user.isActive
//                           ? 'bg-[#ccb9a4] cursor-not-allowed'
//                           : 'bg-[#a0785d] hover:bg-[#8c674f]'
//                       }`}
//                     >
//                       Activate
//                     </button>
//                     <button
//                       onClick={() => updateUserStatus(user._id, false)}
//                       disabled={!user.isActive}
//                       className={`px-4 py-2 rounded text-white font-semibold ${
//                         !user.isActive
//                           ? 'bg-red-400 cursor-not-allowed'
//                           : 'bg-red-500 hover:bg-red-600'
//                       }`}
//                     >
//                       Deactivate
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-6 flex justify-between items-center">
//         <button
//           onClick={() => handlePageChange('prev')}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//         >
//           Previous
//         </button>
//         <span className="text-[#8c674f] font-bold">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => handlePageChange('next')}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ManageUsers;



import React, { useState, useEffect } from 'react';
import API from '../api';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await API.get('/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const toggleUserStatus = async (userId, currentStatus) => {
    const newStatus = !currentStatus;
    const actionText = newStatus ? 'activate' : 'deactivate';

    const result = await Swal.fire({
      title: 'Confirm Status Change',
      text: `Are you sure you want to ${actionText} this user?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#a0785d',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, change it!'
    });

    if (result.isConfirmed) {
      try {
        const response = await API.put('/users/update', { userId, isActive: newStatus });
        
        await Swal.fire({
          title: 'Success',
          text: `User status updated successfully. An email has been sent to the user.`,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#a0785d',
        });

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, isActive: newStatus } : user
          )
        );
      } catch (error) {
        console.error('Error updating user status:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Error updating user status. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  };

  // Pagination handling
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      const newPage = direction === 'next' ? prevPage + 1 : prevPage - 1;
      if (newPage >= 1 && newPage <= totalPages) {
        return newPage;
      }
      return prevPage;
    });
  };

  const totalPages = Math.ceil(users.length / rowsPerPage);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#a0785d] text-white">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium">Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Status</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length === 0 ? (
              <motion.tr
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                  No users available.
                </td>
              </motion.tr>
            ) : (
              currentUsers.map((user) => (
                <motion.tr
                  key={user._id}
                  className="border-t"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {user.isActive ? (
                      <span className="text-[#a0785d] font-semibold">Active</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Inactive</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleUserStatus(user._id, user.isActive)}
                      className={`px-4 py-2 rounded text-white font-semibold ${
                        user.isActive
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-[#a0785d] hover:bg-[#8c674f]'
                      }`}
                    >
                      {user.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Previous
        </button>
        <span className="text-[#8c674f] font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ManageUsers;