import { useState } from 'react';
import axios from 'axios';

const usePut = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.put(url, payload);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, putData };
};

export default usePut;
