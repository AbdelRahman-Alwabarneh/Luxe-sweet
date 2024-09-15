import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

const ChefManagement = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    // Fetch chefs from the backend
    axios.get('chefs')
      .then(response => setChefs(response.data))
      .catch(error => console.error('Error fetching chefs:', error));
  }, []);

  return (
    <div>
      <h1>Manage Chefs</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {chefs.map(chef => (
            <tr key={chef._id}>
              <td>{chef.name}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
                <button>View Recipes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChefManagement;
