// ///////////////////////////work correct/////////////////



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ManageRequests = () => {
//   const [chefs, setChefs] = useState([]);

//   // جلب الشيفات من الخادم
//   const fetchChefs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/chefs');
//       setChefs(response.data);
//     } catch (error) {
//       console.error('Error fetching chefs:', error.message);
//     }
//   };

//   // تحديث حالة الموافقة لشيف
//   const handleApproval = async (chefId, approved) => {
//     const action = approved ? 'approve' : 'disapprove';
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${action} this chef?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/chefs/approval', { chefId, approved });
//         setChefs(chefs.map(chef => chef._id === chefId ? { ...chef, isApproved: approved } : chef));
//         Swal.fire('Success!', `Chef has been ${action}d.`, 'success');
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire('Error!', 'There was an error updating the chef.', 'error');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Bio</th>
//             <th className="py-2 px-4 border-b">Approved</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {chefs.map(chef => (
//             <tr key={chef._id}>
//               <td className="py-2 px-4 border-b">{chef.name}</td>
//               <td className="py-2 px-4 border-b">{chef.email}</td>
//               <td className="py-2 px-4 border-b">{chef.bio}</td>
//               <td className="py-2 px-4 border-b">
//                 {chef.isApproved ? 'Yes' : 'No'}
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   className={`px-4 py-2 text-white ${chef.isApproved ? 'bg-red-500' : 'bg-green-500'} rounded`}
//                   onClick={() => handleApproval(chef._id, !chef.isApproved)}
//                 >
//                   {chef.isApproved ? 'Disapprove' : 'Approve'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';

// const ManageRequests = () => {
//   const [chefs, setChefs] = useState([]);

//   // Fetch chefs from the server
//   const fetchChefs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/chefs');
//       setChefs(response.data);
//     } catch (error) {
//       console.error('Error fetching chefs:', error.message);
//     }
//   };

//   // Update approval status for a chef
//   const handleApproval = async (chefId, approved) => {
//     const action = approved ? 'approve' : 'disapprove';
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${action} this chef?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/chefs/approval', { chefId, approved });
//         setChefs(chefs.map(chef => chef._id === chefId ? { ...chef, isApproved: approved } : chef));
//         Swal.fire('Success!', `Chef has been ${action}d.`, 'success');
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire('Error!', 'There was an error updating the chef.', 'error');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   return (
//     <div className="container mx-auto p-4 bg-gray-100">
//             <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Chef Management</h2>

//       <motion.table
//         className="min-w-full bg-white shadow-md rounded-lg border border-gray-200"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <thead className="bg-[#a0785d] text-white">
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Bio</th>
//             <th className="py-2 px-4 border-b">Approved</th>
//             <th className="py-2 px-4 border-b">Image</th>
//             <th className="py-2 px-4 border-b">Actions</th>


//           </tr>
//         </thead>
//         <tbody>
//           {chefs.map(chef => (
//             <motion.tr
//               key={chef._id}
//               className="border-t"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <td className="py-2 px-4 border-b text-gray-800">{chef.name}</td>
//               <td className="py-2 px-4 border-b text-gray-800">{chef.email}</td>
//               <td className="py-2 px-4 border-b text-gray-800">{chef.bio}</td>
//               <td className="py-2 px-4 border-b text-gray-800">
//                 {chef.isApproved ? 'Yes' : 'No'}
//               </td>
             
//               <td> <img
//               src={chef.image} // Ensure this path is correct
//               alt={chef.name}
//               className="w-full h-20 object-cover"
//             /></td>
//              <td className="py-2 px-4 border-b">
//                 <button
//                   className={`px-4 py-2 rounded text-white ${chef.isApproved ? 'bg-red-500' : 'bg-[#a0785d]'}`}
//                   onClick={() => handleApproval(chef._id, !chef.isApproved)}
//                 >
//                   {chef.isApproved ? 'Disapprove' : 'Approve'}
//                 </button>
//               </td>
//             </motion.tr>
//           ))}
//         </tbody>
//       </motion.table>
//     </div>
//   );
// };

// export default ManageRequests;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';

// const ITEMS_PER_PAGE = 6; // عدد الطباخين في كل صفحة

// const ManageRequests = () => {
//   const [chefs, setChefs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   // Fetch chefs from the server
//   const fetchChefs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/chefs');
//       setChefs(response.data);
//       setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
//     } catch (error) {
//       console.error('Error fetching chefs:', error.message);
//     }
//   };

//   // Update approval status for a chef
//   const handleApproval = async (chefId, approved) => {
//     const action = approved ? 'approve' : 'disapprove';
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${action} this chef?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//       confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK

//     });
   
//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/chefs/approval', { chefId, approved });
//         setChefs(chefs.map(chef => chef._id === chefId ? { ...chef, isApproved: approved } : chef));
//         // Swal.fire('Success!', `Chef has been ${action}d.`, 'success');
//         await Swal.fire({
//           title: 'Success',
//           text: `Chef has been ${action}d.`,
//           icon: 'success',
//           confirmButtonText: 'OK',
//           confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
//         });
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire('Error!', 'There was an error updating the chef.', 'error');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   // Get chefs for the current page
//   const currentChefs = chefs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div className="container mx-auto p-4 ">
//       <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Chef Management</h2>

//       <motion.table 
//         className="min-w-full bg-white shadow-md rounded-lg border border-gray-200"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <thead className="bg-[#a0785d] text-white">
//           <tr>
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Bio</th>
//             <th className="py-2 px-4 border-b">Approved</th>
//             <th className="py-2 px-4 border-b">Image</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentChefs.map(chef => (
//             <motion.tr
//               key={chef._id}
//               className="border-t"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <td className="py-2 px-4 border-b text-gray-800">{chef.name}</td>
//               <td className="py-2 px-4 border-b text-gray-800">{chef.email}</td>
//               <td className="py-2 px-4 border-b text-gray-800">{chef.bio}</td>
//               <td className="py-2 px-4 border-b text-gray-800">
//                 {chef.isApproved ? 'Yes' : 'No'}
//               </td>
//               <td>
//                 <img
//                   src={chef.image} // Ensure this path is correct
//                   alt={chef.name}
//                   className="w-full h-20 object-cover"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   className={`px-4 py-2 rounded text-white ${chef.isApproved ? 'bg-red-500 hover:bg-red-700' : 'bg-[#a0785d] hover:bg-[#8c674f]'}`}
//                   onClick={() => handleApproval(chef._id, !chef.isApproved)}
//                 >
//                   {chef.isApproved ? 'Disapprove' : 'Approve'}
//                 </button>
//               </td>
//             </motion.tr>
//           ))}
//         </tbody>
//       </motion.table>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//         >
//           Previous
//         </button>
//         <span className="text-[#8c674f] font-bold">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageRequests;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';

// const ITEMS_PER_PAGE = 6; // عدد الطباخين في كل صفحة

// const ManageRequests = () => {
//   const [chefs, setChefs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   // Fetch chefs from the server
//   const fetchChefs = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/chefs');
//       setChefs(response.data);
//       setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
//     } catch (error) {
//       console.error('Error fetching chefs:', error.message);
//     }
//   };

//   // Update approval status for a chef
//   const handleApproval = async (chefId, approved) => {
//     const action = approved ? 'approve' : 'disapprove';
//     const result = await Swal.fire({
//       title: `Are you sure you want to ${action} this chef?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//       confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
//     });

//     if (result.isConfirmed) {
//       try {
//         await axios.put('http://localhost:5000/api/chefs/approval', { chefId, approved });
//         setChefs(chefs.map(chef => chef._id === chefId ? { ...chef, isApproved: approved } : chef));
//         await Swal.fire({
//           title: 'Success',
//           text: `Chef has been ${action}d.`,
//           icon: 'success',
//           confirmButtonText: 'OK',
//           confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
//         });
//       } catch (error) {
//         console.error('Error updating approval status:', error.message);
//         Swal.fire('Error!', 'There was an error updating the chef.', 'error');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchChefs();
//   }, []);

//   // Get chefs for the current page
//   const currentChefs = chefs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div className="container mx-auto p-4 ">
//       <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Chef Management</h2>

//       <motion.table
//         className="min-w-full bg-white shadow-md rounded-lg border border-gray-200"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <thead className="bg-[#a0785d] text-white">
//           <tr>
//             <th className="py-2 px-4 border-b">#</th> {/* Column for numbering */}
//             <th className="py-2 px-4 border-b">Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Bio</th>
//             <th className="py-2 px-4 border-b">Approved</th>
//             <th className="py-2 px-4 border-b">Image</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentChefs.map((chef, index) => (
//             <motion.tr
//               key={chef._id}
//               className="border-t"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <td className="py-2 px-4 border-b text-gray-800">{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td> {/* Numbering starts from 1 */}
//               <td className="py-2 px-4 border-b text-gray-800">{chef.name}</td>
//               <td className="py-2 px-4 border-b text-gray-800">{chef.email}</td>
//               <td className="py-2 px-4 border-b text-gray-800">{chef.bio}</td>
//               <td className="py-2 px-4 border-b text-gray-800">
//                 {chef.isApproved ? 'Yes' : 'No'}
//               </td>
//               <td>
//                 <img
//                   src={chef.image}
//                   alt={chef.name}
//                   className="w-full h-20 object-cover"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <button
//                   className={`px-4 py-2 rounded text-white ${chef.isApproved ? 'bg-red-500 hover:bg-red-700' : 'bg-[#a0785d] hover:bg-[#8c674f]'}`}
//                   onClick={() => handleApproval(chef._id, !chef.isApproved)}
//                 >
//                   {chef.isApproved ? 'Disapprove' : 'Approve'}
//                 </button>
//               </td>
//             </motion.tr>
//           ))}
//         </tbody>
//       </motion.table>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//         >
//           Previous
//         </button>
//         <span className="text-[#8c674f] font-bold">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageRequests;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const ITEMS_PER_PAGE = 6; // عدد الطباخين في كل صفحة

const ManageRequests = () => {
  const [chefs, setChefs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChef, setSelectedChef] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch chefs from the server
  const fetchChefs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/chefs');
      setChefs(response.data);
      setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
    } catch (error) {
      console.error('Error fetching chefs:', error.message);
    }
  };

  // Update approval status for a chef
  const handleApproval = async (chef, approved) => {
    const action = approved ? 'approve' : 'disapprove';
    const result = await Swal.fire({
      title: `Are you sure you want to ${action} this chef?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
    });

    if (result.isConfirmed) {
      try {
        await axios.put('http://localhost:5000/api/chefs/approval', {
          chefId: chef._id,
          approved,
        });
        setChefs(
          chefs.map((c) =>
            c._id === chef._id ? { ...c, isApproved: approved } : c
          )
        );
        if (approved) {
          setSelectedChef(chef);
          setMessage('Your application to be a chef has been approved.');
          setIsModalOpen(true);
        } else {
          await Swal.fire({
            title: 'Success',
            text: `Chef has been ${action}d.`,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#a0785d',
          });
        }
      } catch (error) {
        console.error('Error updating approval status:', error.message);
        Swal.fire('Error!', 'There was an error updating the chef.', 'error');
      }
    }
  };

  const sendEmail = async () => {
    try {
      await axios.post('http://localhost:5000/api/chefs/send-email', {
        to: selectedChef.email,
        subject: 'Chef Application Status',
        text: message,
      });
      setIsModalOpen(false);
      await Swal.fire({
        title: 'Email Sent',
        text: 'The chef has been notified of the approval.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#a0785d',
      });
    } catch (error) {
      console.error('Error sending email:', error.message);
      Swal.fire('Error!', 'There was an error sending the email.', 'error');
    }
  };

  useEffect(() => {
    fetchChefs();
  }, []);

  // Get chefs for the current page
  const currentChefs = chefs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="container mx-auto p-4 ">
      <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">
        Chef Management
      </h2>

      <motion.table
        className="min-w-full bg-white shadow-md rounded-lg border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead className="bg-[#a0785d] text-white">
          <tr>
            <th className="py-2 px-4 border-b">#</th> {/* Column for numbering */}
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Bio</th>
            <th className="py-2 px-4 border-b">Approved</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentChefs.map((chef, index) => (
            <motion.tr
              key={chef._id}
              className="border-t"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <td className="py-2 px-4 border-b text-gray-800">
                {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
              </td>{' '}
              {/* Numbering starts from 1 */}
              <td className="py-2 px-4 border-b text-gray-800">{chef.name}</td>
              <td className="py-2 px-4 border-b text-gray-800">{chef.email}</td>
              <td className="py-2 px-4 border-b text-gray-800">{chef.bio}</td>
              <td className="py-2 px-4 border-b text-gray-800">
                {chef.isApproved ? 'Yes' : 'No'}
              </td>
              <td>
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-20 object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className={`px-4 py-2 rounded text-white ${
                    chef.isApproved
                      ? 'bg-red-500 hover:bg-red-700'
                      : 'bg-[#a0785d] hover:bg-[#8c674f]'
                  }`}
                  onClick={() => handleApproval(chef, !chef.isApproved)}
                >
                  {chef.isApproved ? 'Disapprove' : 'Approve'}
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Previous
        </button>
        <span className="text-[#8c674f] font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Next
        </button>
      </div>

      {/* Modal for sending email */}
      {isModalOpen && selectedChef && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#f8f4f0] p-8 rounded-lg shadow-lg max-w-lg w-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">
              Send Email to {selectedChef.name}
            </h3>
            <p className="text-lg mb-4">Email: {selectedChef.email}</p>
            <label className="block text-gray-600 mb-2">Response:</label>
            <textarea
              className="w-full p-4 border border-[#937d6e] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#937d6e]"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={sendEmail}
                className="px-6 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f]"
              >
                Send Email
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ManageRequests;
