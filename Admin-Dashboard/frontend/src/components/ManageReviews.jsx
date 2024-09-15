/////////////////////////////work correct//////////////////



// // components/ManageReports.js
// import React, { useState, useEffect } from "react";
// import API from "../api"; // Ensure the correct path to the API setup

// function ManageReviews() {
//   const [reports, setReports] = useState([]);

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/recipereports");
//         setReports(data);
//         console.log(data);
        
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Report ID
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Recipe Name
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Reason
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Recipe Image
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 User Name
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Email
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="text-center px-6 py-4 text-gray-500"
//                 >
//                   No reports available.
//                 </td>
//               </tr>
//             ) : (
//               reports.map((report) => (
//                 <tr key={report._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report._id}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.title}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.reportFlag.reason}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {<img src={report.images} alt="dddd" width={"40px"}/>}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     user
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     Email
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

// export default ManageReviews;



// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { motion } from "framer-motion";

// const ManageReports = () => {
//   const [reports, setReports] = useState([]);

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/recipereports");
//         setReports(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Recipe Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Recipe Image</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">User Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center px-6 py-4 text-gray-500">
//                   No reports available.
//                 </td>
//               </tr>
//             ) : (
//               reports.map((report) => (
//                 <motion.tr
//                   key={report._id}
//                   className="border-t hover:bg-gray-50"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.title}</td>
//                   {/* <td className="px-6 py-4 text-sm text-gray-800">
//   {report.ratings?.[0]?.reportFlag?.reports?.[0]?.reason}
// </td> */}
// <td className="px-6 py-4 text-sm text-gray-800">
//   {report.ratings && report.ratings.length > 0 && report.ratings[0].reportFlag && report.ratings[0].reportFlag.reports && report.ratings[0].reportFlag.reports.length > 0 ? (
//     report.ratings[0].reportFlag.reports.map((report, index) => (
//       <span key={index}>
//         {report.reason + " " }
//         {/* {index < report.ratings[0].reportFlag.reports.length - 1 ? ', ' : ''} */}
//       </span>
//     ))
//   ) : (
//     'No reports available'
//   )}
// </td>

//                   {/* <td className="px-6 py-4 text-sm text-gray-800">{report.reportFlag.reason}</td> */}
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images} alt="Recipe" width="40px" className="rounded" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">User</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">Email</td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageReports;


// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { motion } from "framer-motion";

// const ManageReports = () => {
//   const [reports, setReports] = useState([]);

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/recipereports");
//         setReports(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Recipe Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Recipe Image</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">User Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center px-6 py-4 text-gray-500">
//                   No reports available.
//                 </td>
//               </tr>
//             ) : (
//               reports.map((report) => (
//                 <motion.tr
//                   key={report._id}
//                   className="border-t hover:bg-gray-50"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.title}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings && report.ratings.length > 0 &&
//                       report.ratings[0].reportFlag &&
//                       report.ratings[0].reportFlag.reports &&
//                       report.ratings[0].reportFlag.reports.length > 0
//                       ? report.ratings[0].reportFlag.reports.map((rep, index) => (
//                         <span key={index}>{rep.reason} </span>
//                       ))
//                       : 'No reports available'}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images[0]} alt="Recipe" width="40px" className="rounded" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings && report.ratings.length > 0 &&
//                       report.ratings[0].reportFlag &&
//                       report.ratings[0].reportFlag.reports &&
//                       report.ratings[0].reportFlag.reports.length > 0 &&
//                       report.ratings[0].reportFlag.reports[0].user
//                       ? report.ratings[0].reportFlag.reports[0].user.name
//                       : 'User'}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings && report.ratings.length > 0 &&
//                       report.ratings[0].reportFlag &&
//                       report.ratings[0].reportFlag.reports &&
//                       report.ratings[0].reportFlag.reports.length > 0 &&
//                       report.ratings[0].reportFlag.reports[0].user
//                       ? report.ratings[0].reportFlag.reports[0].user.email
//                       : 'Email'}
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageReports;


// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const ManageReports = () => {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [response, setResponse] = useState("");

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/recipereports");
//         setReports(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   const handleReply = (report) => {
//     setSelectedReport(report);
//   };

//   const handleSend = async () => {
//     try {
//       await API.post("/recipereports/send-response", {
//         email: selectedReport.ratings[0].reportFlag.reports[0].user.email,
//         response,
//       });


//       // await API.post("/recipereports/send-response", {
//       //   email: selectedReport.ratings[0].reportFlag.reports[0].user.email,
//       //   response,
//       // });
      


//       Swal.fire({
//         title: 'Success!',
//         text: 'Response sent successfully!',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });

//       setResponse("");
//       setSelectedReport(null);
//     } catch (error) {
//       console.error("Error sending response:", error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to send response.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   const handleClose = () => {
//     setSelectedReport(null);
//     setResponse("");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Recipe Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Recipe Image</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">User Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length === 0 ? (
//               <tr>
//                 <td colSpan="7" className="text-center px-6 py-4 text-gray-500">
//                   No reports available.
//                 </td>
//               </tr>
//             ) : (
//               reports.map((report) => (
//                 <motion.tr
//                   key={report._id}
//                   className="border-t hover:bg-gray-50"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.title}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {/* {report.ratings && report.ratings.length > 0 &&
//                       report.ratings[0].reportFlag &&
//                       report.ratings[0].reportFlag.reports &&
//                       report.ratings[0].reportFlag.reports.length > 0
//                       ? report.ratings[0].reportFlag.reports.map((rep, index) => (
//                         <span key={index}>{rep.reason} </span>
//                       ))
//                       : 'No reports available'} */}

//   {report.ratings?.[0]?.reportFlag?.reports?.[0]?.reason}

//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images[0]} alt="Recipe" width="40px" className="rounded" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings && report.ratings.length > 0 &&
//                       report.ratings[0].reportFlag &&
//                       report.ratings[0].reportFlag.reports &&
//                       report.ratings[0].reportFlag.reports.length > 0 &&
//                       report.ratings[0].reportFlag.reports[0].user
//                       ? report.ratings[0].reportFlag.reports[0].user.name
//                       : 'User'}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings && report.ratings.length > 0 &&
//                       report.ratings[0].reportFlag &&
//                       report.ratings[0].reportFlag.reports &&
//                       report.ratings[0].reportFlag.reports.length > 0 &&
//                       report.ratings[0].reportFlag.reports[0].user
//                       ? report.ratings[0].reportFlag.reports[0].user.email
//                       : 'Email'}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {/* <button
//                       onClick={() => handleReply(report)}
//                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
//                     >
//                       Reply
//                     </button> */}
//                     <button
//   onClick={() => handleReply(report)}
//   className="px-4 py-2  bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
// >
//   Reply
// </button>

//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {selectedReport && (
//         <motion.div 
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
//           initial={{ opacity: 0 }} 
//           animate={{ opacity: 1 }} 
//           exit={{ opacity: 0 }}
//         >
//           <motion.div 
//             className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
//             initial={{ y: -100, opacity: 0 }} 
//             animate={{ y: 0, opacity: 1 }} 
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-3xl font-semibold mb-6 text-gray-800">Reply to {selectedReport.ratings[0].reportFlag.reports[0].user.name}</h3>
//             <p className="text-lg mb-4">Email: {selectedReport.ratings[0].reportFlag.reports[0].user.email}</p>
//             <label className="block text-gray-600 mb-2">Response:</label>
//             <textarea
//               value={response}
//               onChange={(e) => setResponse(e.target.value)}
//               className="w-full p-4 border border-gray-300 rounded-lg mb-4"
//               rows="5"
//               placeholder="Write your response here..."
//             />
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={handleSend}
//                 className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
//               >
//                 Send
//               </button>
//               <button
//                 onClick={handleClose}
//                 className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
//               >
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ManageReports;



import React, { useState, useEffect } from "react";
import API from "../api";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const ManageReports = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [response, setResponse] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 6;

  // Fetch reports from the server
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data } = await API.get("/recipereports");
        setReports(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  // Calculate the indices for slicing the reports array
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  // Handle reply button click
  const handleReply = (report) => {
    setSelectedReport(report);
  };

  // Handle sending response
  const handleSend = async () => {
    try {
      await API.post("/recipereports/send-response", {
        email: selectedReport.ratings[0].reportFlag.reports[0].user.email,
        response,
      });

      // Swal.fire({
      //   title: 'Success!',
      //   text: 'Response sent successfully!',
      //   icon: 'success',
      //   confirmButtonText: 'OK',
      // });

      Swal.fire({
        title: 'Success',
        text: `Response sent successfully.`,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
      });
      

      setResponse("");
      setSelectedReport(null);
    } catch (error) {
      console.error("Error sending response:", error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send response.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  // Handle closing the modal
  const handleClose = () => {
    setSelectedReport(null);
    setResponse("");
  };

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < Math.ceil(reports.length / reportsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6 bg-[#f8f4f0] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Recipe Reports</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-[#a0785d] text-white">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Recipe Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Recipe Image</th>
              <th className="text-left px-6 py-3 text-sm font-medium">User Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentReports.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center px-6 py-4 text-gray-500">
                  No reports available.
                </td>
              </tr>
            ) : (
              currentReports.map((report) => (
                <motion.tr
                  key={report._id}
                  className="border-t hover:bg-gray-50"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{report.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.ratings?.[0]?.reportFlag?.reports?.[0]?.reason}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <img src={report.images[0]} alt="Recipe" width="40px"  className="rounded" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.name || 'User'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.email || 'Email'}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <button
                      onClick={() => handleReply(report)}
                      className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
                    >
                      Reply
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Previous
        </button>
        <span className="text-[#8c674f] font-bold">
          Page {currentPage} of {Math.ceil(reports.length / reportsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === Math.ceil(reports.length / reportsPerPage)}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Next
        </button>
      </div>

      {/* Reply Modal */}
      {selectedReport && (
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
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Reply to {selectedReport.ratings[0].reportFlag.reports[0].user.name}</h3>
            <p className="text-lg mb-4">Email: {selectedReport.ratings[0].reportFlag.reports[0].user.email}</p>
            <label className="block text-gray-600 mb-2">Response:</label>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="w-full p-4 border border-[#937d6e] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#a0785d]"
              rows="5"
              placeholder="Write your response here..."
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
              >
                Send
              </button>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-[#937d6e] text-white rounded-lg hover:bg-[#bda392] transition duration-200"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ManageReports;
