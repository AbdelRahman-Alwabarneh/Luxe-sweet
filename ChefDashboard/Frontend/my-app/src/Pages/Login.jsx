import { useState } from 'react';
import { storage } from '../components/firebase.jsx';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import UseSweetAlert from '../components/useSweetAlert.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import login from "../assets/images/login.svg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);
  const { showSuccessAlert, showErrorAlert } = UseSweetAlert();
  const navigate = useNavigate();


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file)
        .then(() => getDownloadURL(storageRef))
        .then((downloadURL) => {
          // Store the download URL to the state or use it directly to submit to the backend
          setImage(downloadURL);
      
        })
        .catch((error) => {
          showErrorAlert('Upload Failed', 'Error uploading image. Please try again.');
          console.error(error);
        });
    }
  };
  
// Function to handle success with custom messages
const handleSuccessClick = (title, message) => {
    showSuccessAlert(title, message);
  };

  // Function to handle error with custom messages
  const handleErrorClick = (title, message) => {
    showErrorAlert(title, message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (isLogin) {
      // Handle login
      try {
        const loginData = {
          email,
          password,
        };
  
        const response = await axios.post('http://localhost:3000/api/newChef/loginChef', loginData);
        sessionStorage.setItem('chefId', response.data.id);
        console.log(response.data.id);
        
        navigate('/Dashboard');
  
        // Clear input fields
        setEmail("");
        setPassword("");
        // Handle login success (e.g., save token, redirect)
      } catch (err) {
        handleErrorClick("Login Failed!", "There was an issue with your login.");
        console.error(err);
      }
    } else {
      // Handle sign-up
      try {
        const signUpData = {
          email,
          password,
          name,
          bio,
          image, // Use the URL from Firebase Storage
        };
  
        const response = await axios.post('http://localhost:3000/api/newChef/signUpChef', signUpData);
        handleSuccessClick("Operation Successful!", "Your account has been created.");
        console.log(response.data);
  
        // Clear input fields
        setEmail("");
        setPassword("");
        setName("");
        setBio("");
        setImage(null);
      } catch (err) {
        handleErrorClick("Operation Failed!", "There was an issue with your request.");
        console.error(err);
      }
    }
  };
  

  return (

    <div className="absolute flex items-center w-screen h-screen px-2 overflow-hidden bg-center bg-cover " style={{ backgroundImage: `url(${login})` }}>
      <div className="relative flex flex-col px-5 py-10 space-y-5 bg-transparent border rounded-lg shadow-xl w-96 sm:mx-auto right-8">
        <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-[#b27b42] sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
        <div className="mx-auto mb-2 space-y-3">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            {isLogin ? 'Sign in' : 'Sign up'}
          </h1>
          <p className="text-gray-500">
            {isLogin ? 'Sign in to access your account' : 'Create your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <div className="relative w-full mt-2">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300  px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
              >
                Enter Your Email
              </label>
            </div>
          </div>

          <div>
            <div className="relative w-full mt-2">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
              >
                Enter Your Password
              </label>
            </div>
          </div>

          {!isLogin && (
            <>
              <div className="relative w-full mt-2">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Enter Your Name
                </label>
              </div>
              <div className="relative w-full mt-6">
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="bio"
                  className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Enter Your Bio
                </label>
              </div>
              <div className="relative w-full mt-6">
                <input
                  type="file"
                  id="image"
                  onChange={handleImageUpload}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-[#b27b42] px-4 py-2 text-white font-bold hover:bg-[#8c6e3e] focus:outline-none"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-600">
          {isLogin ? (
            <>
              Don not have an account?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="font-semibold text-gray-900 whitespace-nowrap hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="font-semibold text-gray-900 whitespace-nowrap hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;

