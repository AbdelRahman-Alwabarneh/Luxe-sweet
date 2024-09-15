// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import ManageContacts from './components/ManageContacts';
// import ManageUsers from './components/ManageUsers';
// import ManageRecipes from './components/ManageRecipes';
// import ManageReviews from './components/ManageReviews';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/manage-contacts" element={<ManageContacts />} />
//         <Route path="/manage-users" element={<ManageUsers />} />
//         <Route path="/manage-recipes" element={<ManageRecipes />} />
//         <Route path="/manage-reviews" element={<ManageReviews />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import HomePage from './components/HomePage';
// import ManageContacts from './components/ManageContacts';
// import UserManagement from './components/ManageUsers';
// import ManageReviews from './components/ManageReviews';
// import ManageRecipes from './components/ManageRecipes';
// import ManageReports from './components/ManageReports';
// import ManageRequests from './components/ManageRequests'; // إضافة استيراد مكون ManageRequests

// function App() {
//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/contacts" element={<ManageContacts />} />
//             <Route path="/users" element={<UserManagement />} />
//             <Route path="/reviews" element={<ManageReviews />} />
//             <Route path="/recipes" element={<ManageRecipes />} />
//             <Route path="/reports" element={<ManageReports />} />
//             <Route path="/requests" element={<ManageRequests />} /> {/* إضافة Route جديد */}
// v
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import HomePage from './components/HomePage';
// import ManageContacts from './components/ManageContacts';
// import UserManagement from './components/ManageUsers';
// import ManageReviews from './components/ManageReviews';
// import ManageRecipes from './components/ManageRecipes';
// import ManageReports from './components/ManageReports';
// import ManageRequests from './components/ManageRequests'; // إضافة استيراد مكون ManageRequests
// import Login from './components/Login';
// import { useState } from 'react';

// // Mock function to check if user is authenticated
// const useAuth = () => {
//   // Replace with actual authentication logic
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   return { isAuthenticated, setIsAuthenticated };
// };

// // PrivateRoute component to protect routes
// const PrivateRoute = ({ element, ...rest }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// function App() {
//   const auth = useAuth();

//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-4">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
//             <Route path="/contacts" element={<PrivateRoute element={<ManageContacts />} />} />
//             <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
//             <Route path="/reviews" element={<PrivateRoute element={<ManageReviews />} />} />
//             <Route path="/recipes" element={<PrivateRoute element={<ManageRecipes />} />} />
//             <Route path="/reports" element={<PrivateRoute element={<ManageReports />} />} />
//             <Route path="/requests" element={<ManageRequests />} /> {/* إضافة Route جديد */}

//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './AuthContext';
// import Sidebar from './components/Sidebar';
// import HomePage from './components/HomePage';
// import ManageContacts from './components/ManageContacts';
// import UserManagement from './components/ManageUsers';
// import ManageReviews from './components/ManageReviews';
// import ManageRecipes from './components/ManageRecipes';
// import ManageReports from './components/ManageReports';
// import ManageRequests from './components/ManageRequests';
// import Login from './components/Login';

// const PrivateRoute = ({ element }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// function App() {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Router>
//       <div className="flex">
//         {isAuthenticated && <Sidebar />}
//         <div className={`flex-1 p-4 ${isAuthenticated ? 'ml-64' : ''}`}>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
//             <Route path="/contacts" element={<PrivateRoute element={<ManageContacts />} />} />
//             <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
//             <Route path="/reviews" element={<PrivateRoute element={<ManageReviews />} />} />
//             <Route path="/recipes" element={<PrivateRoute element={<ManageRecipes />} />} />
//             <Route path="/reports" element={<PrivateRoute element={<ManageReports />} />} />
//             <Route path="/requests" element={<PrivateRoute element={<ManageRequests />} />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function AppWithAuth() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

// export default AppWithAuth;


///


// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './AuthContext';
// import Sidebar from './components/Sidebar';
// import HomePage from './components/HomePage';
// import ManageContacts from './components/ManageContacts';
// import UserManagement from './components/ManageUsers';
// import ManageReviews from './components/ManageReviews';
// import ManageRecipes from './components/ManageRecipes';
// import ManageReports from './components/ManageReports';
// import ManageRequests from './components/ManageRequests';
// import ManageDishes from './components/ManageDishes'; // Import the new component
// import Login from './components/Login';

// const PrivateRoute = ({ element }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// function App() {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Router>
//       <div className="flex">
//         {isAuthenticated && <Sidebar />}
//         <div className={`flex-1 p-4 ${isAuthenticated ? 'ml-64' : ''}`}>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
//             <Route path="/contacts" element={<PrivateRoute element={<ManageContacts />} />} />
//             <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
//             <Route path="/reviews" element={<PrivateRoute element={<ManageReviews />} />} />
//             <Route path="/recipes" element={<PrivateRoute element={<ManageRecipes />} />} />
//             <Route path="/reports" element={<PrivateRoute element={<ManageReports />} />} />
//             <Route path="/requests" element={<PrivateRoute element={<ManageRequests />} />} />
//             <Route path="/dishes" element={<PrivateRoute element={<ManageDishes />} />} /> {/* New Route */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// function AppWithAuth() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

// export default AppWithAuth;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ManageContacts from './components/ManageContacts';
import UserManagement from './components/ManageUsers';
import ManageReviews from './components/ManageReviews';
import ManageRecipes from './components/ManageRecipes';
import ManageReports from './components/ManageReports';
import ManageRequests from './components/ManageRequests';
import ManageDishes from './components/ManageDishes';
import Login from './components/Login';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/');
    return null;
  }

  return element;
};

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="flex">
        {isAuthenticated && <Sidebar />}
        <div className={`flex-1 p-4 ${isAuthenticated ? 'ml-64' : ''}`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
            <Route path="/contacts" element={<PrivateRoute element={<ManageContacts />} />} />
            <Route path="/users" element={<PrivateRoute element={<UserManagement />} />} />
            <Route path="/reviews" element={<PrivateRoute element={<ManageReviews />} />} />
            <Route path="/recipes" element={<PrivateRoute element={<ManageRecipes />} />} />
            <Route path="/reports" element={<PrivateRoute element={<ManageReports />} />} />
            <Route path="/requests" element={<PrivateRoute element={<ManageRequests />} />} />
            <Route path="/dishes" element={<PrivateRoute element={<ManageDishes />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWithAuth;