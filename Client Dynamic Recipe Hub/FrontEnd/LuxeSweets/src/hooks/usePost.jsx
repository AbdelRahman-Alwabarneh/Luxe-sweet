import axios from "axios";
import { useState } from "react";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePost;
