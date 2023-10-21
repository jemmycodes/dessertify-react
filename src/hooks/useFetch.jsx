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
      ? "https://freerandomapi.cyclic.app/api/v1/desserts?limit=120"
      : `https://freerandomapi.cyclic.app/api/v1/desserts?category=${menutype}`;

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
