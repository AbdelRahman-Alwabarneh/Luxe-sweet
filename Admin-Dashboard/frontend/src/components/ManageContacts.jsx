// import React, { useState, useEffect } from 'react';
// import API from '../api';

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });
//       alert('Response sent successfully');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Manage Contact Messages</h2>
//       {contacts.map((contact) => (
//         <div key={contact._id}>
//           <p>{contact.message}</p>
//           <p>{contact.name}</p>
//           <p>{contact.email}</p>
//           <input
//             type="text"
//             placeholder="Respond"
//             onBlur={(e) => respondContact(contact._id, e.target.value)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ManageContacts;



// import React, { useState, useEffect } from 'react';
// import API from '../api';

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);

//   // Fetch contacts from the server
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // Function to respond to a contact message
//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });
//       alert('Response sent successfully');
//     } catch (error) {
//       console.error('Error sending response:', error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Contact Messages</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Message</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Respond</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No contact messages available.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <input
//                       type="text"
//                       placeholder="Type your response"
//                       className="w-full p-2 border border-gray-300 rounded"
//                       onBlur={(e) => respondContact(contact._id, e.target.value)}
//                     />
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


// // export default ManageContacts;
// import React, { useState, useEffect } from 'react';
// import API from '../api';

// // Modal Component
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState('');

//   const handleSend = () => {
//     onSend(contact._id, response);
//     setResponse('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h3 className="text-xl font-bold mb-4">Respond to {contact.name}</h3>
//         <textarea
//           value={response}
//           onChange={(e) => setResponse(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           rows="4"
//           placeholder="Type your response here..."
//         />
//         <div className="flex justify-end">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch contacts from the server
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // Function to respond to a contact message
//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });
//       alert('Response sent successfully');
//       // Close the modal after sending response
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error sending response:', error);
//     }
//   };

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedContact(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Contact Messages</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Message</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Respond</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No contact messages available.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         openModal(contact);
//                       }}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Respond
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for responding */}
//       {selectedContact && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSend={respondContact}
//           contact={selectedContact}
//         />
//       )}
//     </div>
//   );
// }

// export default ManageContacts;


// import React, { useState, useEffect } from 'react';
// import API from '../api';

// // Modal Component
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState('');

//   const handleSend = () => {
//     onSend(contact._id, response);
//     setResponse('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h3 className="text-xl font-bold mb-4">Respond to {contact.name}</h3>
//         <textarea
//           value={response}
//           onChange={(e) => setResponse(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           rows="4"
//           placeholder="Type your response here..."
//         />
//         <div className="flex justify-end">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch contacts from the server
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // Function to respond to a contact message
//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });
//       alert('Response sent and email dispatched successfully');
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error sending response:', error);
//     }
//   };

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedContact(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Contact Messages</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Message</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Respond</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No contact messages available.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         openModal(contact);
//                       }}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Respond
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for responding */}
//       {selectedContact && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSend={respondContact}
//           contact={selectedContact}
//         />
//       )}
//     </div>
//   );
// }

// export default ManageContacts;


// import React, { useState, useEffect } from 'react';
// import API from '../api';
// import Swal from 'sweetalert2';  // استيراد SweetAlert2

// // مكون الـ Modal
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState('');

//   const handleSend = () => {
//     onSend(contact._id, response);
//     setResponse('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h3 className="text-xl font-bold mb-4">Respond to {contact.name}</h3>
//         <textarea
//           value={response}
//           onChange={(e) => setResponse(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-4"
//           rows="4"
//           placeholder="Type your response here..."
//         />
//         <div className="flex justify-end">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // جلب الشيفات من الخادم
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // دالة للرد على رسالة الشيف
//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });

//       // استخدام SweetAlert2 بدلاً من alert
//       await Swal.fire({
//         title: 'Success!',
//         text: 'Response sent and email dispatched successfully',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });

//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error sending response:', error);

//       // عرض رسالة خطأ باستخدام SweetAlert2
//       await Swal.fire({
//         title: 'Error!',
//         text: 'There was an error sending the response.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedContact(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Manage Contact Messages</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Message</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Respond</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No contact messages available.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <a
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         openModal(contact);
//                       }}
//                       className="text-blue-500 hover:underline"
//                     >
//                       Respond
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for responding */}
//       {selectedContact && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSend={respondContact}
//           contact={selectedContact}
//         />
//       )}
//     </div>
//   );
// }

// export default ManageContacts;


// import React, { useState, useEffect } from 'react';
// import API from '../api';
// import Swal from 'sweetalert2';  // استيراد SweetAlert2

// // مكون الـ Modal
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState('');

//   const handleSend = () => {
//     onSend(contact._id, response);
//     setResponse('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">Respond to {contact.name}</h3>
//         <textarea
//           value={response}
//           onChange={(e) => setResponse(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-lg mb-4"
//           rows="4"
//           placeholder="Type your response here..."
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // جلب الشيفات من الخادم
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // دالة للرد على رسالة الشيف
//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });

//       // استخدام SweetAlert2 بدلاً من alert
//       await Swal.fire({
//         title: 'Success!',
//         text: 'Response sent and email dispatched successfully',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });

//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error sending response:', error);

//       // عرض رسالة خطأ باستخدام SweetAlert2
//       await Swal.fire({
//         title: 'Error!',
//         text: 'There was an error sending the response.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedContact(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage Contact Messages</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Message</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Respond</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No contact messages available.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <tr key={contact._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => openModal(contact)}
//                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
//                     >
//                       Respond
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for responding */}
//       {selectedContact && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSend={respondContact}
//           contact={selectedContact}
//         />
//       )}
//     </div>
//   );
// }

// export default ManageContacts;


///////////////////////////////////////////correct work///////////


// import React, { useState, useEffect } from 'react';
// import API from '../api';
// import Swal from 'sweetalert2';  // استيراد SweetAlert2

// // مكون الـ Modal
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState('');

//   const handleSend = () => {
//     onSend(contact._id, response);
//     setResponse('');
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//         <h3 className="text-2xl font-semibold mb-4 text-gray-800">Respond to {contact.name}</h3>
//         <textarea
//           value={response}
//           onChange={(e) => setResponse(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-lg mb-4"
//           rows="4"
//           placeholder="Type your response here..."
//         />
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={handleSend}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Send
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// function ManageContacts() {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 6;

//   // جلب الشيفات من الخادم
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get('/contacts');
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // دالة للرد على رسالة الشيف
//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put('/contacts/respond', { contactId, response });

//       // استخدام SweetAlert2 بدلاً من alert
//       await Swal.fire({
//         title: 'Success!',
//         text: 'Response sent and email dispatched successfully',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });

//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Error sending response:', error);

//       // عرض رسالة خطأ باستخدام SweetAlert2
//       await Swal.fire({
//         title: 'Error!',
//         text: 'There was an error sending the response.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     }
//   };

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedContact(null);
//     setIsModalOpen(false);
//   };

//   // Slice the contacts for the current page
//   const indexOfLastContact = currentPage * rowsPerPage;
//   const indexOfFirstContact = indexOfLastContact - rowsPerPage;
//   const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Calculate total pages
//   const totalPages = Math.ceil(contacts.length / rowsPerPage);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage Contact Messages</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Name</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Email</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Message</th>
//               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Respond</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentContacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No contact messages available.
//                 </td>
//               </tr>
//             ) : (
//               currentContacts.map((contact) => (
//                 <tr key={contact._id} className="border-t">
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
//                   <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
//                   <td className="px-6 py-4">
//                     <button
//                       onClick={() => openModal(contact)}
//                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
//                     >
//                       Respond
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
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//         >
//           Previous
//         </button>
//         {/* <span className="text-gray-600">
//           Page {currentPage} of {totalPages}
//         </span> */}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
//         >
//           Next
//         </button>
//       </div>

//       {/* Modal for responding */}
//       {selectedContact && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSend={respondContact}
//           contact={selectedContact}
//         />
//       )}
//     </div>
//   );
// }

// export default ManageContacts;




import React, { useState, useEffect } from 'react';
import API from '../api';
import Swal from 'sweetalert2';  // SweetAlert2 import
import { motion } from 'framer-motion';  // Framer Motion for animations

// New Modal Component Design
const Modal = ({ isOpen, onClose, onSend, contact }) => {
  const [response, setResponse] = useState('');
  
  const handleSend = () => {
    onSend(contact._id, response);
    setResponse('');
    onClose();
  };

  if (!isOpen) return null;

  return (
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
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Reply to {contact.name}</h3>
        <p className="text-lg mb-4">Email: {contact.email}</p>
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
            onClick={onClose}
            className="px-6 py-3 bg-[#937d6e] text-white rounded-lg hover:bg-[#bda392] transition duration-200"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

function ManageContacts() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;

  // Fetch contacts from the server
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await API.get('/contacts');
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  // Respond to contact message
  const respondContact = async (contactId, response) => {
    try {
      await API.put('/contacts/respond', { contactId, response });
      await Swal.fire({
        title: 'Success',
        text: `Response sent successfully.`,
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#a0785d', // تغيير لون زر الـ OK
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error sending response:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'There was an issue sending the response.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  const openModal = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  };

  // Pagination handling
  const indexOfLastContact = currentPage * rowsPerPage;
  const indexOfFirstContact = indexOfLastContact - rowsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(contacts.length / rowsPerPage);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-[#a0785d]">Manage Contact Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-[#a0785d] text-white">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium">Name</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Email</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Message</th>
              <th className="text-left px-6 py-3 text-sm font-medium">Respond</th>
            </tr>
          </thead>
          <tbody>
            {currentContacts.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                  No contact messages available.
                </td>
              </tr>
            ) : (
              currentContacts.map((contact) => (
                <motion.tr 
                  key={contact._id} 
                  className="border-t"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <td className="px-6 py-4 text-sm text-gray-800">{contact.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{contact.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{contact.message}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openModal(contact)}
                      className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
                    >
                      Respond
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
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Previous
        </button>
        <span className="text-[#8c674f] font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-[#a0785d] text-white rounded-lg hover:bg-[#8c674f] transition duration-200"
        >
          Next
        </button>
      </div>

      {/* Modal for responding */}
      {selectedContact && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSend={respondContact}
          contact={selectedContact}
        />
      )}
    </div>
  );
}

export default ManageContacts;