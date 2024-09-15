import { Link, useLocation  } from "react-router-dom";
import  { useContext, useState} from 'react';
import { ChefContext } from '../../contexts/ChefContext'; 
import { FaTachometerAlt, FaPlus, FaBook, FaUtensils, FaShoppingCart } from 'react-icons/fa';


function Sidebar() {

  const { chefImage, chefName, chefEmail } = useContext(ChefContext);
  const location = useLocation(); // Get current location

  const isActive = (path) => location.pathname === path ? 'bg-[#8d6e63]' : '';

   console.log(chefImage);
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
     setIsOpen(!isOpen);
   };
  return (
    <div>
   
{/**************nav ***************** */}

<nav className="fixed top-0 z-40 w-full bg-[#b0956e] border-b border-gray-200 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Sidebar Toggle Button */}
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          {/* Logo and Title */}
          <Link className="flex items-center ms-2 md:me-24" to="/">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/709/519/non_2x/sweet-shop-logo-design-template-of-cake-with-cherries-free-vector.jpg"
              className="h-10 rounded-full me-3"
              alt="Sweet Shop Logo"
            />
            <span className="self-center text-xl font-semibold text-white sm:text-2xl whitespace-nowrap">
              Sweets
            </span>
          </Link>

          {/* User Dropdown Menu */}
          <div className="relative flex items-center">
            <button
              aria-expanded={isOpen}
              onClick={toggleDropdown}
              type="button"
              className="flex text-sm text-white bg-[#b0956e] rounded-full focus:ring-4 focus:ring-gray-300"
            >
              <span className="sr-only">Open user menu</span>
              {chefImage ? (
                <img
                  src={chefImage}
                  alt="Chef"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <p></p>
              )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 w-48 mt-36 bg-[#b0956e] divide-y divide-gray-100 rounded shadow">
                <div className="px-4 py-3">
                  <p className="text-sm text-white">
                    {chefName}
                  </p>
                  <p className="text-sm font-medium text-white truncate">
                    {chefEmail}
                  </p>
                </div>
                <ul className="py-1">
                 
               
                  <li>
                    <Link
                      to="/Login"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#cfbb9e]"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
{/**************end nav ***************** */}
{/**************aside***************** */}
<aside id="logo-sidebar" className="fixed top-0 left-0 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#b0956e] border-r border-gray-200 sm:translate-x-0  " aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#b0956e]">
          <ul className="space-y-2 font-medium">
            <li>
              <Link to="/Dashboard" className={`flex items-center p-2 text-white rounded-lg  hover:bg-[#cfbb9e] group ${isActive('/Dashboard')}`}>
                <FaTachometerAlt className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 " />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/recipes/new" className={`flex items-center p-2 text-white rounded-lg hover:bg-[#cfbb9e] group ${isActive('/recipes/new')}`}>
                <FaPlus className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 " />
                <span className="flex-1 ms-3 whitespace-nowrap">Add Recipes</span>
              </Link>
            </li>
            <li>
              <Link to="/AddDish" className={`flex items-center p-2 text-white rounded-lg  hover:bg-[#cfbb9e] group ${isActive('/AddDish')}`}>
                <FaPlus className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 " />
                <span className="flex-1 ms-3 whitespace-nowrap">Add Dishes</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={`flex items-center p-2 text-white rounded-lg  hover:bg-[#cfbb9e] group ${isActive('/')}`}>
                <FaBook className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 " />
                <span className="flex-1 ms-3 whitespace-nowrap">Recipes</span>
              </Link>
            </li>
            <li>
              <Link to="/ViewDish" className={`flex items-center p-2 text-white rounded-lg hover:bg-[#cfbb9e] group ${isActive('/ViewDish')}`}>
                <FaUtensils className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 " />
                <span className="flex-1 ms-3 whitespace-nowrap">Dishes</span>
              </Link>
            </li>
            <li>
              <Link to="/Order" className={`flex items-center p-2 text-white rounded-lg  hover:bg-[#cfbb9e] group ${isActive('/Order')}`}>
                <FaShoppingCart className="w-5 h-5 text-white transition duration-75  group-hover:text-gray-400 " />
                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {/**************aside***************** */}

    
    </div>
  );
};

export default Sidebar;

