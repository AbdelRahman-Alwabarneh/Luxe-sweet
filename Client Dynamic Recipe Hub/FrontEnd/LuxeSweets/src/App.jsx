import "./App.css";
import Login from "./Pages/UserLogin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/UserSignup/Signup";
import ContactUs from "./Pages/ContactUs";
import Catalogrecipes from "./Pages/catalogrecipes";
import Catalogdishes from "./Pages/catalogdishes";
import Recipesdetail from "./Pages/recipesdetail";
import DishDetail from "./Pages/dishdetails";
import ProfilePage from "./Pages/Profile/ProfilePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AboutUs from "./Pages/Aboutus";
import PaymentComponent from "./Pages/payment";

import AllChef from "./Pages/AllChef";
import CartPage from "./Pages/cartpage";
import Orders from "./Pages/Profile/Orders";
import Favorites from "./Pages/Profile/Favorites";
import { OrdersProvider } from "../src/Context/OrdersContext";
function App() {
  return (
    <>
      <GoogleOAuthProvider
        clientId={
          "411660852235-gqds17af2oqbq127uck7c6g5o4g8tvmg.apps.googleusercontent.com"
        }
      >
    
        <OrdersProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Catalogrecipes" element={<Catalogrecipes />} />
              <Route path="/Recipesdetail" element={<Recipesdetail />} />
              <Route path="/Catalogdishes" element={<Catalogdishes />} />
              <Route path="/DishDetail" element={<DishDetail />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/PaymentComponent" element={<PaymentComponent />} />
              <Route path="/Profile" element={<ProfilePage />} />
              <Route path="/AllChef" element={<AllChef />} />
              <Route path="/cart" element={<CartPage />} />

              <Route path="/Orders" element={<Orders />} />
              <Route path="/Favorites" element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </OrdersProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
