import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ViewDish from "./Pages/ViewDish";
import Login from "./Pages/Login";
import UseSweetAlert from "./components/useSweetAlert";
import AddDish from "./Pages/AddDish";
import RecipeList from "../src/components/RecipeList";
import RecipeDetail from "../src/components/RecipeDetail";
import RecipeForm from "../src/components/RecipeEdit";
import { ChefProvider } from '../src/contexts/ChefContext';
import Order from "./Pages/Order";
import Dashboard from "./Pages/Dashboard";


function App() {
  const location = useLocation();

  const shouldHideSidebar = location.pathname === "/Login";

  return (
    <ChefProvider>
    <>
      {!shouldHideSidebar && <Sidebar />}
      <Routes>
        <Route path="/ViewDish" element={<ViewDish />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UseSweetAlert" element={<UseSweetAlert />} />
        <Route path="/AddDish" element={<AddDish />} />
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<RecipeForm />} />
        <Route path="/recipes/new" element={<RecipeForm />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Dashboard" element={<Dashboard />} />


      </Routes>
    </>
    </ChefProvider>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
