// import React, { useEffect, useState } from 'react';
// import API from '../api';

// function HomePage() {
//   const [stats, setStats] = useState({ users: 0, revenue: 0 });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         // Fetch the number of users and total revenue
//         const userCount = await API.get('/users');
//         const revenue = 10000; // Replace with actual revenue calculation if available
//         setStats({ users: userCount.data.length, revenue });
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <p>Number of Users: {stats.users}</p>
//       <p>Total Revenue: ${stats.revenue}</p>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);

//   useEffect(() => {
//     // Fetch user count and revenue data from the server
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get('/api/users/count');
//         const revenueResponse = await axios.get('/api/revenue');
//         setUserCount(userResponse.data.count);
//         setRevenue(revenueResponse.data.total);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);

//   useEffect(() => {
//     // Fetch user count and revenue data from the server
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get('/api/users/count'); // This fetches the count of active users
//         const revenueResponse = await axios.get('/api/revenue');
//         setUserCount(userResponse.data.count);
//         setRevenue(revenueResponse.data.total);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);

//   useEffect(() => {
//     // Fetch user count and revenue data from the server
//     const fetchData = async () => {
//       try {
//         const userResponse = await axios.get('http://localhost:5000/api/users/count'); // تأكد من صحة المسار
//         const revenueResponse = await axios.get('http://localhost:5000/api/revenue'); // تعديل حسب الـ API الخاص بك
//         setUserCount(userResponse.data.count); // تأكد أن الاستجابة تحتوي على "count"
//         setRevenue(revenueResponse.data.total);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p> {/* عرض عدد المستخدمين النشطين /}
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p> {/ عرض الإيرادات */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);

//   useEffect(() => {
//     // Fetch user count and revenue data from the server
//     const fetchData = async () => {
//       try {
//         // استدعاء API لعدد المستخدمين النشطين
//         const userResponse = await axios.get('http://localhost:5000/api/users/count'); 
//         // تعيين عدد المستخدمين النشطين من استجابة الـ API
//         setUserCount(userResponse.data.count); 
//         // يمكنك تعديل هذا حسب الحاجة للإيرادات أو تركه كـ static إذا لم يكن موجودًا
//         const revenueResponse = await axios.get('http://localhost:5000/api/revenue'); 
//         setRevenue(revenueResponse.data.total);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // استدعاء الوظيفة لجلب البيانات من الـ API
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p> 
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p> 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeChefsCount, setActiveChefsCount] = useState(0);

//   useEffect(() => {
//     // Fetch user count, revenue data, and active chefs count from the server
//     const fetchData = async () => {
//       try {
//         // استدعاء API لعدد المستخدمين النشطين
//         const userResponse = await axios.get('http://localhost:5000/api/users/count'); 
//         setUserCount(userResponse.data.count); 
        
//         // استدعاء API للإيرادات
//         const revenueResponse = await axios.get('http://localhost:5000/api/revenue'); 
//         setRevenue(revenueResponse.data.total);

//         // استدعاء API لعدد الشيفات النشطين
//         const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
//         setActiveChefsCount(activeChefsResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // استدعاء الوظيفة لجلب البيانات من الـ API
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p> 
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p> 
//         </div>
//         <div className="bg-purple-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Chefs</h2>
//           <p className="text-3xl">{activeChefsCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeChefsCount, setActiveChefsCount] = useState(0);

//   useEffect(() => {
//     // Fetch user count, revenue data, and active chefs count from the server
//     const fetchData = async () => {
//       try {
//         // استدعاء API لعدد المستخدمين النشطين
//         const userResponse = await axios.get('http://localhost:5000/api/users/count'); 
//         setUserCount(userResponse.data.count); 
        
//         // استدعاء API للإيرادات
//         const revenueResponse = await axios.get('http://localhost:5000/api/revenue'); 
//         setRevenue(revenueResponse.data.total);

//         // استدعاء API لعدد الشيفات النشطين
//         const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
//         setActiveChefsCount(activeChefsResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // استدعاء الوظيفة لجلب البيانات من الـ API
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p> 
//         </div>
//         <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p> 
//         </div>
//         <div className="bg-purple-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Chefs</h2>
//           <p className="text-3xl">{activeChefsCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeChefsCount, setActiveChefsCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // استدعاء API لعدد المستخدمين النشطين
//         const userResponse = await axios.get('http://localhost:5000/api/users/count');
//         setUserCount(userResponse.data.count);

//         // // استدعاء API للإيرادات
//         // const revenueResponse = await axios.get('http://localhost:5000/api/revenue');
//         // setRevenue(revenueResponse.data.total);

//         // استدعاء API لعدد الشيفات النشطين
//         const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
//         setActiveChefsCount(activeChefsResponse.data.count);

//         console.log('Active Chefs Count:', activeChefsResponse.data.count); // Add this line for debugging
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         {/* <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p>
//         </div> */}
//         <div className="bg-purple-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Chefs</h2>
//           <p className="text-3xl">{activeChefsCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeChefsCount, setActiveChefsCount] = useState(0);
//   const [approvedDishesCount, setApprovedDishesCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch user count
//         const userResponse = await axios.get('http://localhost:5000/api/users/count');
//         setUserCount(userResponse.data.count);

//         // Fetch revenue data (commented out for now)
//         // const revenueResponse = await axios.get('http://localhost:5000/api/revenue');
//         // setRevenue(revenueResponse.data.total);

//         // Fetch active chefs count
//         const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
//         setActiveChefsCount(activeChefsResponse.data.count);

//         // Fetch approved dishes count
//         const approvedDishesResponse = await axios.get('http://localhost:5000/api/dishes/approved-count');
//         setApprovedDishesCount(approvedDishesResponse.data.count);

//         console.log('Active Chefs Count:', activeChefsResponse.data.count); // Add this line for debugging
//         console.log('Approved Dishes Count:', approvedDishesResponse.data.count); // Add this line for debugging
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-4 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         {/* <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p>
//         </div> */}
//         <div className="bg-purple-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Chefs</h2>
//           <p className="text-3xl">{activeChefsCount}</p>
//         </div>
//         <div className="bg-red-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Dishes</h2>
//           <p className="text-3xl">{approvedDishesCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeChefsCount, setActiveChefsCount] = useState(0);
//   const [approvedDishesCount, setApprovedDishesCount] = useState(0);
//   const [approvedRecipesCount, setApprovedRecipesCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch user count
//         const userResponse = await axios.get('http://localhost:5000/api/users/count');
//         setUserCount(userResponse.data.count);

//         // Fetch revenue data (commented out for now)
//         // const revenueResponse = await axios.get('http://localhost:5000/api/revenue');
//         // setRevenue(revenueResponse.data.total);

//         // Fetch active chefs count
//         const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
//         setActiveChefsCount(activeChefsResponse.data.count);

//         // Fetch approved dishes count
//         const approvedDishesResponse = await axios.get('http://localhost:5000/api/dishes/approved-count');
//         setApprovedDishesCount(approvedDishesResponse.data.count);

//         // Fetch approved recipes count
//         const approvedRecipesResponse = await axios.get('http://localhost:5000/api/recipes/approved-count');
//         setApprovedRecipesCount(approvedRecipesResponse.data.count);

//         console.log('Active Chefs Count:', activeChefsResponse.data.count);
//         console.log('Approved Dishes Count:', approvedDishesResponse.data.count);
//         console.log('Approved Recipes Count:', approvedRecipesResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-5 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         {/* <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p>
//         </div> */}
//         <div className="bg-purple-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Chefs</h2>
//           <p className="text-3xl">{activeChefsCount}</p>
//         </div>
//         <div className="bg-red-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Dishes</h2>
//           <p className="text-3xl">{approvedDishesCount}</p>
//         </div>
//         <div className="bg-orange-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Recipes</h2>
//           <p className="text-3xl">{approvedRecipesCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;
////////////////////////////////////////work correct/////////

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function HomePage() {
//   const [userCount, setUserCount] = useState(0);
//   const [revenue, setRevenue] = useState(0);
//   const [activeChefsCount, setActiveChefsCount] = useState(0);
//   const [approvedDishesCount, setApprovedDishesCount] = useState(0);
//   const [approvedRecipesCount, setApprovedRecipesCount] = useState(0);
//   const [messageCount, setMessageCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch user count
//         const userResponse = await axios.get('http://localhost:5000/api/users/count');
//         setUserCount(userResponse.data.count);

//         // Fetch revenue data (commented out for now)
//         // const revenueResponse = await axios.get('http://localhost:5000/api/revenue');
//         // setRevenue(revenueResponse.data.total);

//         // Fetch active chefs count
//         const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
//         setActiveChefsCount(activeChefsResponse.data.count);

//         // Fetch approved dishes count
//         const approvedDishesResponse = await axios.get('http://localhost:5000/api/dishes/approved-count');
//         setApprovedDishesCount(approvedDishesResponse.data.count);

//         // Fetch approved recipes count
//         const approvedRecipesResponse = await axios.get('http://localhost:5000/api/recipes/approved-count');
//         setApprovedRecipesCount(approvedRecipesResponse.data.count);

//         // Fetch message count
//         const messageResponse = await axios.get('http://localhost:5000/api/contacts/messages/count');
//         setMessageCount(messageResponse.data.count);

//         console.log('Active Chefs Count:', activeChefsResponse.data.count);
//         console.log('Approved Dishes Count:', approvedDishesResponse.data.count);
//         console.log('Approved Recipes Count:', approvedRecipesResponse.data.count);
//         console.log('Message Count:', messageResponse.data.count);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
//       <div className="grid grid-cols-3 gap-4">
//         <div className="bg-blue-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Active Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         {/* <div className="bg-green-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Revenue</h2>
//           <p className="text-3xl">${revenue}</p>
//         </div> */}
//         <div className="bg-purple-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Chefs</h2>
//           <p className="text-3xl">{activeChefsCount}</p>
//         </div>
//         <div className="bg-red-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Dishes</h2>
//           <p className="text-3xl">{approvedDishesCount}</p>
//         </div>
//         <div className="bg-orange-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Approved Recipes</h2>
//           <p className="text-3xl">{approvedRecipesCount}</p>
//         </div>
//         <div className="bg-teal-500 text-white p-4 rounded">
//           <h2 className="text-lg">Total Messages</h2>
//           <p className="text-3xl">{messageCount}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function HomePage() {
  const [userCount, setUserCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [activeChefsCount, setActiveChefsCount] = useState(0);
  const [approvedDishesCount, setApprovedDishesCount] = useState(0);
  const [approvedRecipesCount, setApprovedRecipesCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get('http://localhost:5000/api/users/count');
        setUserCount(userResponse.data.count);

        const activeChefsResponse = await axios.get('http://localhost:5000/api/chefs/active-count');
        setActiveChefsCount(activeChefsResponse.data.count);

        const approvedDishesResponse = await axios.get('http://localhost:5000/api/dishes/approved-count');
        setApprovedDishesCount(approvedDishesResponse.data.count);

        const approvedRecipesResponse = await axios.get('http://localhost:5000/api/recipes/approved-count');
        setApprovedRecipesCount(approvedRecipesResponse.data.count);

        const messageResponse = await axios.get('http://localhost:5000/api/contacts/messages/count');
        setMessageCount(messageResponse.data.count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f4f0] p-10">
      
      <h1 className="text-4xl font-bold text-[#a0785d] mb-8">Dashboard Home</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card for Total Active Users */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-[#a0785d]">Total Active Users</h2>
          <p className="text-3xl font-bold text-gray-700">{userCount}</p>
        </motion.div>

        {/* Card for Total Active Chefs */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-[#a0785d]">Total Approved Chefs</h2>
          <p className="text-3xl font-bold text-gray-700">{activeChefsCount}</p>
        </motion.div>

        {/* Card for Total Approved Dishes */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-[#a0785d]">Total Approved Dishes</h2>
          <p className="text-3xl font-bold text-gray-700">{approvedDishesCount}</p>
        </motion.div>

        {/* Card for Total Approved Recipes */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-[#a0785d]">Total Approved Recipes</h2>
          <p className="text-3xl font-bold text-gray-700">{approvedRecipesCount}</p>
        </motion.div>

        {/* Card for Total Messages */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-[#a0785d]">Total Messages</h2>
          <p className="text-3xl font-bold text-gray-700">{messageCount}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
