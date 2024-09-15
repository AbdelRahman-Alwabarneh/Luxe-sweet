// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import API from '../api';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [errorMessage, setErrorMessage] = useState('');

//   const onSubmit = async (data) => {
//     try {
//       await API.post('/auth/login', data);
//       window.location.href = '/';
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
//         {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// import API from '../api'; // تأكد من أن هذه هي نقطة النهاية الصحيحة

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const onSubmit = async (data) => {
//     try {
//       await API.post('/auth/login', data);
//       navigate('/users'); // Redirect to home page on successful login
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
//         {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// // Login.js
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import API from '../api';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onSubmit = async (data) => {
//     try {
//       const response = await API.post('/auth/login', data);
//       const { token } = response.data;
//       login(token);
//       navigate('/');
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
//         {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


// // Login.js
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import API from '../api';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onSubmit = async (data) => {
//     try {
//       const response = await API.post('/auth/login', data);
//       const { token } = response.data;
//       login(token);
//       navigate('/');
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
//         {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


///////////new//////////////

// // Login.js
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import API from '../api';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onSubmit = async (data) => {
//     try {
//       const response = await API.post('/auth/login', data);
//       const { token, admin } = response.data;
//       login(token, admin);
//       navigate('/');
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
//         {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email', { required: 'Email is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password', { required: 'Password is required' })}
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//           />
//           {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;


/////////////////////////////////////////////////////work correct //////////////


// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import API from '../api';

// function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onSubmit = async (data) => {
//     try {
//       const response = await API.post('/auth/login', data);
//       const { token, admin } = response.data;
//       login(token, admin);
//       navigate('/');
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r ">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Admin Login</h2>
//         {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               id="email"
//               type="email"
//               {...register('email', { required: 'Email is required' })}
//               className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               id="password"
//               type="password"
//               {...register('password', { required: 'Password is required' })}
//               className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400`}
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import API from '../api';
import { motion } from 'framer-motion';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await API.post('/auth/login', data);
      const { token, admin } = response.data;
      login(token, admin);
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f4f0] relative">
      <div className="absolute inset-0 bg-cover bg-center" ></div>
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-[#a0785d] mb-6">Admin Login</h2>
        {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0785d]`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              className={`mt-1 block w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0785d]`}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#a0785d] text-white py-2 rounded-md hover:bg-[#8b5e3c] transition duration-300 ease-in-out shadow-md"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;