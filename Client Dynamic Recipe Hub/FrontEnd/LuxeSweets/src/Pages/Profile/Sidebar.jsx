import React, { useState } from "react";
import {
  MessageSquare,
  Star,
  ShoppingBag,
  User,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch"; // Assuming your custom hook path
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const { data, loading, error } = useFetch(
    "http://localhost:1001/api/auth/getAllUsers"
  );
  const users = data ? data.Users : [];
  const user = users.length > 0 ? users[0] : null;
  return (
    <>
      {/* Button to toggle sidebar on small screens */}
      <button
        className={`p-2 bg-[#8F6C49] text-white fixed top-4 left-4 z-50 rounded-md lg:hidden`}
        onClick={toggleSidebar}
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>

      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-md min-h-screen z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64`}
        // Adjust height based on your navbar size
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-20 border-b">
            <h1 className="text-xl font-semibold text-gray-800">Profile</h1>
          </div>
          <nav className="flex-grow">
            <ul className="py-4">
              <li>
                <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 w-full">
                  <User className="mr-3" size={20} />
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/Orders"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 w-full"
                >
                  <ShoppingBag className="mr-3" size={20} />
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/Favorites" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 w-full">
                  <Star className="mr-3" size={20} />
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t p-4">
            <Link
              to="/Profile"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <User className="mr-2" size={20} />
              {user ? user.name : "Hi"}
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for closing the sidebar on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
