import { useState, useEffect } from "react";
import axios from "axios";
import { storage } from '../components/firebase.jsx'; // Import the storage instance
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import UseSweetAlert from '../components/useSweetAlert.jsx';

function AddDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [availableQuantity, setAvailableQuantity] = useState("");
  const [size, setSize] = useState("");
  const [images, setImages] = useState([]); // Update to handle an array
  const [cuisine, setCuisine] = useState("");
  const [cuisines, setCuisines] = useState([]);
  const { showSuccessAlert, showErrorAlert } = UseSweetAlert();
  const [previews, setPreviews] = useState([]); 

/***************************** */
const handleImageUpload = async (e) => {
  const files = e.target.files; // احصل على كائن FileList
  const filesArray = Array.from(files); // تحويل FileList إلى Array
  
  // إنشاء روابط المعاينة
  const previewUrls = filesArray.map(file => URL.createObjectURL(file));
  setPreviews(previewUrls);

  if (files) {
    const uploadPromises = filesArray.map(async (file) => {
      const storageRef = ref(storage, `images/${file.name}`);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
      } catch (error) {
        showErrorAlert('Upload Failed', 'Error uploading image. Please try again.');
        console.error(error);
        return null;
      }
    });

    const downloadURLs = await Promise.all(uploadPromises);
    const successfulUploads = downloadURLs.filter(url => url !== null);
    setImages((prevImages) => [...prevImages, ...successfulUploads]);
  }
};

  /******************************* */
  

  const handleSuccessClick = (title, message) => {
    showSuccessAlert(title, message);
  };

  const handleErrorClick = (title, message) => {
    showErrorAlert(title, message);
  };
/*************************************** */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !price || !description || !availableQuantity || !size || !cuisine || images.length === 0) {
      handleErrorClick("Validation Error", "Please fill in all required fields.");
      return;
    }

    const chef = sessionStorage.getItem("chefId");

    try {
      const jsonData = {
        name,
        price,
        description,
        availableQuantity,
        size,
        chef,
        cuisine,
        images, // Send the images array
      };

      const response = await axios.post(
        "http://localhost:3000/api/Dish/createDish",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleSuccessClick("Create Success", "Dish created successfully with JSON:");
      console.log("Dish created successfully with JSON:", response.data);
    
      
    } catch (error) {
      handleErrorClick("Create Failed", "Failed to create dish");
      console.error("Failed to create dish:", error);
    }
  };
/********************************************* */
  useEffect(() => {
    async function getAllCuisines() {
      try {
        const response = await axios.get('http://localhost:3000/api/cuisine/getAllCuisines');
        setCuisines(response.data.cuisine);
      } catch (error) {
        console.error('Error fetching cuisines:', error);
      }
    }

    getAllCuisines();
  }, []);


  return (
    <div className="flex">
      <div className="w-1/4">
      
      </div>
      <div className="flex items-center w-3/4 h-screen px-2 mr-20 overflow-hidden">
        <div className="relative flex flex-col px-5 py-10 space-y-5 bg-white border rounded-lg shadow-xl w-[60rem] sm:mx-auto">
          <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-[#b0956e] sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-3xl font-bold text-center text-[#b0956e] ">Add Dish</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid w-full grid-cols-1 gap-4 mt-2 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="text"
                  id="name1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name1"
                  className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Enter the name of the dish
                </label>
              </div>

              <div className="relative">
                <input
                  type="number"
                  id="name2"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="name2"
                  className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Enter the price of dish
                </label>
              </div>
            </div>

            <div className="relative w-full mt-2">
              <textarea
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
              />
              <label
                htmlFor="description"
                className="absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
              >
                Enter the description of dish
              </label>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 mt-2 sm:grid-cols-2">
              <div className="relative">
                <input
                  type="number"
                  id="quantity"
                  value={availableQuantity}
                  onChange={(e) => setAvailableQuantity(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="quantity"
                  className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Enter the quantity of the dish
                </label>
              </div>
              <div className="relative">
                <select
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0 pr-8"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <label
                  htmlFor="size"
                  className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Select the size of the dish
                </label>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                </div>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 mt-2 sm:grid-cols-2">
             
              <div className="relative">
                <input
                  type="file"
                  id="image"
                  onChange={(e) => handleImageUpload(e)}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                  multiple
                />
              </div>
              
              <div className="relative">
                <select
                  id="cuisine"
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="border-1 block w-full rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-[#b0956e] focus:outline-none focus:ring-0"
                >
                  <option value="">Select Cuisine</option>
                  {cuisines.map((cuisineItem) => (
                    <option key={cuisineItem._id} value={cuisineItem._id}>
                      {cuisineItem.name}
                    </option>
                  ))}
                </select>
                <label
                  htmlFor="cuisine"
                  className="absolute left-2 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#b0956e]"
                >
                  Select the cuisine of the dish
                </label>
              </div>
            </div>
            
            <div className="flex flex-wrap w-full gap-4 mt-2">
           
                {previews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`Preview ${index}`}
                    className="object-cover w-24 h-24 mr-2"
                  />
                ))}
            </div>


           
            <div className="flex items-center w-full mt-4 gap-7">
              <button
                type="submit"
                className="shrink-0 inline-block w-36 rounded-lg bg-[#b0956e] py-3 font-bold text-white shadow-lg hover:bg-[#a08463] hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                Save
              </button>

              <button
                type="button"
                className="shrink-0 inline-block w-36 rounded-lg bg-[#e3c4a1] py-3 font-bold text-white shadow-lg hover:bg-[#edd0af] hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDish;
