// import { Link } from 'react-router-dom';

// function Sidebar() {
//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4">
//       <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
//       <ul>
//         <li className="mb-2">
//           <Link to="/" className="hover:bg-gray-700 p-2 block">Home</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/contacts" className="hover:bg-gray-700 p-2 block">Manage Contacts</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/users" className="hover:bg-gray-700 p-2 block">User Management</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/reviews" className="hover:bg-gray-700 p-2 block">Manage Reviews</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/recipes" className="hover:bg-gray-700 p-2 block">Manage Recipes</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/reports" className="hover:bg-gray-700 p-2 block">Manage Reports</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/requests" className="hover:bg-gray-700 p-2 block">Chef Recruitment Requests</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// // Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// function Sidebar() {
//   const { logout } = useAuth();

//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4 fixed">
//       <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
//       <ul>
//         <li className="mb-2">
//           <Link to="/" className="hover:bg-gray-700 p-2 block">Home</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/contacts" className="hover:bg-gray-700 p-2 block">Manage Contacts</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/users" className="hover:bg-gray-700 p-2 block">User Management</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/reviews" className="hover:bg-gray-700 p-2 block">Manage Reviews</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/recipes" className="hover:bg-gray-700 p-2 block">Manage Recipes</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/reports" className="hover:bg-gray-700 p-2 block">Manage Reports</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/requests" className="hover:bg-gray-700 p-2 block">Chef Recruitment Requests</Link>
//         </li>
//         <li className="mb-2">
//           <button onClick={logout} className="hover:bg-gray-700 p-2 block w-full text-left">Logout</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


////

//////////////////////////////////////work correct/////////////////

// // Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// function Sidebar() {
//   const { logout } = useAuth();

//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4 fixed">
//       <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
//       <ul>
//         <li className="mb-2">
//           <Link to="/" className="hover:bg-gray-700 p-2 block">Home</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/contacts" className="hover:bg-gray-700 p-2 block">Manage Contacts</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/users" className="hover:bg-gray-700 p-2 block">User Management</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/reviews" className="hover:bg-gray-700 p-2 block">Reports in Recipe List</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/recipes" className="hover:bg-gray-700 p-2 block">Manage Recipes</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/reports" className="hover:bg-gray-700 p-2 block"> Reports in Dish List</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/requests" className="hover:bg-gray-700 p-2 block">Chef Recruitment Requests</Link>
//         </li>
//         <li className="mb-2">
//           <Link to="/dishes" className="hover:bg-gray-700 p-2 block">Manage Dish</Link> {/* New Link */}
//         </li>
//         <li className="mb-2">
//           <button onClick={logout} className="hover:bg-gray-700 p-2 block w-full text-left">Logout</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import { Camera } from 'lucide-react';

// function Sidebar() {
//   const { logout } = useAuth();

//   return (
//     <div className="w-64 bg-[#a0785d] text-white h-screen fixed left-0 top-0 flex flex-col">
//       <div className="p-4 flex items-center space-x-2">
//         <Camera size={24} />
//         <h2 className="text-xl font-bold">Admin Dashboard</h2>
//       </div>
//       <ul className="flex-1 space-y-1 overflow-y-auto">
//         <li>
//           <Link to="/" className="block px-4 py-2 hover:bg-white/10 transition-colors">Home</Link>
//         </li>
//         <li>
//           <Link to="/contacts" className="block px-4 py-2 hover:bg-white/10 transition-colors">Manage Contacts</Link>
//         </li>
//         <li>
//           <Link to="/users" className="block px-4 py-2 hover:bg-white/10 transition-colors">User Management</Link>
//         </li>
//         <li>
//           <Link to="/reviews" className="block px-4 py-2 hover:bg-white/10 transition-colors">Reports in Recipe List</Link>
//         </li>
//         <li>
//           <Link to="/recipes" className="block px-4 py-2 hover:bg-white/10 transition-colors">Manage Recipes</Link>
//         </li>
//         <li>
//           <Link to="/reports" className="block px-4 py-2 hover:bg-white/10 transition-colors">Reports in Dish List</Link>
//         </li>
//         <li>
//           <Link to="/requests" className="block px-4 py-2 hover:bg-white/10 transition-colors">Chef Recruitment Requests</Link>
//         </li>
//         <li>
//           <Link to="/dishes" className="block px-4 py-2 hover:bg-white/10 transition-colors">Manage Dish</Link>
//         </li>
//         <li>
//           <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">Logout</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

import {
  Home,
  Users,
  BookOpen,
  FileText,
  UtensilsCrossed,
  FileWarning,
  UserPlus,
  LogOut,
  MessageSquare 
} from 'lucide-react'; // Importing icons from lucide-react

function Sidebar() {
  // const { logout } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div className="w-64 bg-[#a0785d] text-white h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-4 flex items-center space-x-2">
      <img src="https://static.vecteezy.com/system/resources/previews/026/419/556/original/sweet-sugar-chocolate-cake-black-forest-western-food-dessert-3d-render-icon-illustration-isolated-png.png" className="h-8" alt="Flowbite Logo"/  >
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
      </div>
      <ul className="flex-1 space-y-1 overflow-y-auto">
        <li>
          <Link to="/home" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <Home size={18} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <Users size={18} /> <span>Manage Contacts</span>
          </Link>
        </li>
        <li>
          <Link to="/users" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <MessageSquare  size={18} /> <span>User Management</span>
          </Link>
        </li>
        <li>
          <Link to="/requests" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <UserPlus size={18} /> <span>Chef Recruitment Requests</span>
          </Link>
        </li>
    
        <li>
          <Link to="/recipes" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <BookOpen size={18} /> <span>Manage Recipes</span>
          </Link>
        </li>
        <li>
          <Link to="/dishes" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <UtensilsCrossed size={18} /> <span>Manage Dish</span>
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <FileText size={18} /> <span>Recipe Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/reports" className="block px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <FileWarning size={18} /> <span>Dish Reports</span>
          </Link>
        </li>
    
       
        <li>
          {/* <button onClick={logout} className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
            <LogOut size={18} /> <span>Logout</span>
          </button> */}
            <button onClick={handleLogout} className="w-full text-left px-4 py-2 flex items-center space-x-2 hover:bg-white/10 transition-colors">
        <LogOut size={18} /> <span>Logout</span>
      </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
