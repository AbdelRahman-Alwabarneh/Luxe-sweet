import { createContext, useState, useEffect } from 'react';

// Create context
export const ChefContext = createContext();

// Create provider component
export const ChefProvider = ({ children }) => {
  const [chefImage, setChefImage] = useState(localStorage.getItem('chefImage') || '');
  const [chefName, setChefName] = useState(localStorage.getItem('chefName') || '');
  const [chefEmail, setChefEmail] = useState(localStorage.getItem('chefEmail') || '');
  const [chefProfit, setChefProfit] = useState('');

  useEffect(() => {
    // Load data from session storage

    const savedProfit = sessionStorage.getItem('chefProfit');


    if (chefImage) localStorage.setItem('chefImage', chefImage);
    if (chefName) localStorage.setItem('chefName', chefName);
    if (chefEmail) localStorage.setItem('chefEmail', chefEmail);
    if (savedProfit) setChefProfit(savedProfit);

  }, []);

  useEffect(() => {
    // Save data to session storage whenever it changes
    sessionStorage.setItem('chefImage', chefImage);
    sessionStorage.setItem('chefName', chefName);
    sessionStorage.setItem('chefEmail', chefEmail);
    sessionStorage.setItem('chefProfit', chefProfit);

  }, [chefImage, chefName, chefEmail, chefProfit]);

  return (
    <ChefContext.Provider value={{ chefImage, chefName, chefEmail, chefProfit, setChefImage, setChefName, setChefEmail, setChefProfit }}>
      {children}
    </ChefContext.Provider>
  );
};
