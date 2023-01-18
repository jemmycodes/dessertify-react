import { useCallback, useState } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [menu, setMenu] = useState([]);

  const sendRequest = useCallback(async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsLoading(false);
        setError(true);
        return;
      }

      const data = await response.json();
      setMenu(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return [isLoading, error, menu, sendRequest];
};

export default useHttp;
