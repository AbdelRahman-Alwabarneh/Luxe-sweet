

// ///////////////correct work ///////


// // components/ManageReports.js
// import React, { useState, useEffect } from "react";
// import API from "../api"; // Ensure the correct path to the API setup

// function ManageReports() {
//   const [reports, setReports] = useState([]);

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/reports");
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
//                 Dish Name
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Reason
//               </th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
//                 Dish Image
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
//                     {report.name}
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

// export default ManageReports;


// // components/ManageReports.js
// import React, { useState, useEffect } from "react";
// import API from "../api"; // Ensure the correct path to the API setup
// import { motion } from "framer-motion";

// function ManageReports() {
//   const [reports, setReports] = useState([]);

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/reports");
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
//         <motion.table
//           className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Image</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">User Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {reports.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="6"
//                   className="text-center px-6 py-4 text-gray-500"
//                 >
//                   No reports available.
//                 </td>
//               </tr>
//             ) : (
//               reports.map((report) => (
//                 <motion.tr
//                   key={report._id}
//                   className="border-t"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
//                   {/* <td className="px-6 py-4 text-sm text-gray-800">{report.reportFlag.reason}</td> */}
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

//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images} alt="Dish" width="40" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">user</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">Email</td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </motion.table>
//       </div>
//     </div>
//   );
// }

// export default ManageReports;



// // components/ManageReports.js
// import React, { useState, useEffect } from "react";
// import API from "../api"; // Ensure the correct path to the API setup
// import { motion } from "framer-motion";

// function ManageReports() {
//   const [reports, setReports] = useState([]);

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/reports");
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
//         <motion.table
//           className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Image</th>
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
//                   className="border-t"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.map((rep, index) => (
//                       <span key={index}>
//                         {rep.reason}{" "}
//                       </span>
//                     ))}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images} alt="Dish" width="40" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.name || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.email || "N/A"}
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </motion.table>
//       </div>
//     </div>
//   );
// }

// export default ManageReports;

////////////////////////////////work correct//////////////////

// import React, { useState, useEffect } from "react";
// import API from "../api"; // Ensure the correct path to the API setup
// import { motion } from "framer-motion";

// function ManageReports() {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/reports");
//         setReports(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   // Handle reply button click
//   const handleReply = (report) => {
//     setSelectedReport(report);
//     setIsModalOpen(true);
//   };

//   // Handle sending email
//   const sendEmail = async () => {
//     try {
//       await API.post("/reports/send-email", {
//         userEmail: selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email,
//         message,
//       });
//       alert("Email sent successfully!");
//       setIsModalOpen(false);
//       setMessage("");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Failed to send email.");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <motion.table
//           className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Image</th>
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
//                   className="border-t"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.map((rep, index) => (
//                       <span key={index}>{rep.reason} </span>
//                     ))}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images} alt="Dish" width="40" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.name || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.email || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <button
//                       onClick={() => handleReply(report)}
//                       className="px-4 py-2"
//                       style={{ backgroundColor: "#b0956e", color: "white" }}
//                     >
//                       Reply
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </motion.table>
//       </div>

//       {/* Modal for sending email */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-lg font-bold mb-4">Send Reply</h3>
//             <textarea
//               className="w-full border p-2 mb-4"
//               rows="4"
//               placeholder="Type your message here..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 mr-2 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={sendEmail}
//                 className="px-4 py-2"
//                 style={{ backgroundColor: "#b0956e", color: "white" }}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ManageReports;



// import React, { useState, useEffect } from "react";
// import API from "../api"; // Ensure the correct path to the API setup
// import { motion } from "framer-motion";
// import Swal from "sweetalert2"; // Import SweetAlert2

// function ManageReports() {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/reports");
//         setReports(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   // Handle reply button click
//   const handleReply = (report) => {
//     setSelectedReport(report);
//     setIsModalOpen(true);
//   };

//   // Handle sending email
//   const sendEmail = async () => {
//     try {
//       await API.post("/reports/send-email", {
//         userEmail: selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email,
//         message,
//       });
//       Swal.fire({
//         title: "Success!",
//         text: "Response sent successfully!",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//       setIsModalOpen(false);
//       setMessage("");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to send email.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <motion.table
//           className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Image</th>
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
//                   className="border-t"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.map((rep, index) => (
//                       <span key={index}>{rep.reason} </span>
//                     ))}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images} alt="Dish" width="40" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.name || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.email || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <button
//                       onClick={() => handleReply(report)}
//                       className="px-4 py-2"
//                       style={{ backgroundColor: "#b0956e", color: "white" }}
//                     >
//                       Reply
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </motion.table>
//       </div>

//       {/* Modal for sending email */}
//       {isModalOpen && selectedReport && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-lg font-bold mb-4">
//               Reply to {selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.name || "User"}
//             </h3>
//             <p className="mb-2">
//               Email: {selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email || "N/A"}
//             </p>
//             <textarea
//               className="w-full border p-2 mb-4"
//               rows="4"
//               placeholder="Write your response here..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//             <div className="flex justify-end">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 mr-2 bg-gray-300 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={sendEmail}
//                 className="px-4 py-2"
//                 style={{ backgroundColor: "#b0956e", color: "white" }}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ManageReports;



// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// function ManageReports() {
//   const [reports, setReports] = useState([]);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   // Fetch reports from the server
//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const { data } = await API.get("/reports");
//         setReports(data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching reports:", error);
//       }
//     };

//     fetchReports();
//   }, []);

//   // Handle reply button click
//   const handleReply = (report) => {
//     setSelectedReport(report);
//     setIsModalOpen(true);
//   };

//   // Handle sending email
//   const sendEmail = async () => {
//     try {
//       await API.post("/reports/send-email", {
//         userEmail: selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email,
//         message,
//       });
//       Swal.fire({
//         title: "Success!",
//         text: "Response sent successfully!",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//       setIsModalOpen(false);
//       setMessage("");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       Swal.fire({
//         title: "Error!",
//         text: "Failed to send email.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Manage Reports</h2>
//       <div className="overflow-x-auto">
//         <motion.table
//           className="min-w-full bg-white shadow-md rounded-lg overflow-hidden"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <thead className="bg-[#a0785d] text-white">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
//               <th className="text-left px-6 py-3 text-sm font-medium">Dish Image</th>
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
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {/* {report.ratings?.[0]?.reportFlag?.reports?.map((rep, index) => (
//                       <span key={index}>{rep.reason} </span>
//                     ))} */}
//                       {report.ratings?.[0]?.reportFlag?.reports?.[0]?.reason}

//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <img src={report.images} alt="Dish" width="40" className="rounded" />
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.name || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.email || "N/A"}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-800">
//                     <button
//                       onClick={() => handleReply(report)}
//                       className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
//                     >
//                       Reply
//                     </button>
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </motion.table>
//       </div>

//       {/* Modal for sending email */}
//       {isModalOpen && selectedReport && (
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
//             <h3 className="text-3xl font-semibold mb-6 text-gray-800">
//               Reply to {selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.name || "User"}
//             </h3>
//             <p className="text-lg mb-4">
//               Email: {selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email || "N/A"}
//             </p>
//             <label className="block text-gray-600 mb-2">Response:</label>
//             <textarea
//               className="w-full p-4 border border-gray-300 rounded-lg mb-4"
//               rows="5"
//               placeholder="Write your response here..."
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={sendEmail}
//                 className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default ManageReports;



import React, { useState, useEffect } from "react";
import API from "../api";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function ManageReports() {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch reports from the server
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data } = await API.get("/reports");
        setReports(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  // Calculate the paginated reports
  const indexOfLastReport = currentPage * itemsPerPage;
  const indexOfFirstReport = indexOfLastReport - itemsPerPage;
  const currentReports = reports.slice(indexOfFirstReport, indexOfLastReport);

  // Handle reply button click
  const handleReply = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  // Handle sending email
  const sendEmail = async () => {
    try {
      await API.post("/reports/send-email", {
        userEmail: selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email,
        message,
      });
      // Swal.fire({
      //   title: "Success!",
      //   text: "Response sent successfully!",
      //   icon: "success",
      //   confirmButtonText: "OK",
      // });
      await Swal.fire({
        title: 'Success',
        text: `Response sent successfully.`,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
      });
      setIsModalOpen(false);
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send email.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  // Change page
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < Math.ceil(reports.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6 bg-[#f8f4f0] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Dish Reports</h2>
      <div className="overflow-x-auto">
        <motion.table
          className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <thead className="bg-[#a0785d] text-white">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium">Report ID</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Dish Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Reason</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Dish Image</th>
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{report._id}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{report.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.ratings?.[0]?.reportFlag?.reports?.[0]?.reason}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    <img src={report.images} alt="Dish" width="40" className="rounded" />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.name || "N/A"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {report.ratings?.[0]?.reportFlag?.reports?.[0]?.user?.email || "N/A"}
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
        </motion.table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Previous
        </button>
        <span className="text-[#8c674f] font-bold">
          Page {currentPage} of {Math.ceil(reports.length / itemsPerPage)}
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === Math.ceil(reports.length / itemsPerPage)}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Next
        </button>
      </div>

      {/* Modal for sending email */}
      {isModalOpen && selectedReport && (
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
              Reply to {selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.name || "User"}
            </h3>
            <p className="text-lg mb-4">
              Email: {selectedReport.ratings[0]?.reportFlag?.reports[0]?.user?.email || "N/A"}
            </p>
            <label className="block text-gray-600 mb-2">Response:</label>
            <textarea
              className="w-full p-4 border border-[#937d6e] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#a0785d]"
              rows="5"
              placeholder="Write your response here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end space-x-4">
          
              <button
                onClick={sendEmail}
                className="px-6 py-3 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
              >
                Send
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
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
}

export default ManageReports;
