import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const useFetch = () => {
  const { menutype } = useParams();
  const { pathname } = useLocation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const url =
    pathname === "/menu/desserts"
      ? `${import.meta.env.VITE_SITE_URL}limit=120`
      : `${import.meta.env.VITE_SITE_URL}category=${menutype}`;

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

export { useFetch };
