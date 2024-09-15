import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:1001/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const res = await axios.post(
        "http://localhost:1001/api/auth/Googellogin",
        { id_token: response.credential },
        { withCredentials: true }
      );

      // if (res.data.token) {
      //   Cookies.set("token", res.data.token, { expires: 1 });
      // }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in with Google!",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Google login error:", error);
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text:
          error.response?.data?.message ||
          "There was an error during Google login. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <section className="bg-[#f8f4eb] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
        <Link to="/"></Link>
        <div className="w-full max-w-md p-8 bg-[#f5f3f0] mt-10 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg mb-24 transition-shadow duration-300 hover:shadow-2xl">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#5f4b3a] md:text-3xl mb-6 text-center">
            Login
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#5f4b3a]"
              >
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-[#a0785d]" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@gmail.com"
                  className="bg-white border border-[#a0785d] text-[#5f4b3a] text-sm rounded-lg focus:ring-[#a0785d] focus:border-[#a0785d] block w-full pl-10 p-2.5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-[#5f4b3a]"
              >
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-[#a0785d]" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-white border border-[#a0785d] text-[#5f4b3a] text-sm rounded-lg focus:ring-[#a0785d] focus:border-[#a0785d] block w-full pl-10 p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#a0785d] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login
            </button>

            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#a0785d] hover:underline"
              >
                Sign up here
              </Link>
            </p>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={(error) => console.error("Google login error:", error)}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-[#4285F4] text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              <FaGoogle className="text-xl" />
              Sign in with Google
            </GoogleLogin>
          </form>
          <p className="text-sm font-light text-gray-500 text-center pt-3 border-t-2 border-[#A0785D] mt-5">
            Are you a chef ? 
              <Link
                to="http://localhost:5173/Login"
                className="font-medium text-[#a0785d] hover:underline ml-1"
              >
                Embark with us
              </Link>
            </p>
        </div>
        
      </section>
    </>
  );
}

export default Login;
