import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(url);

        setData(data.data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
