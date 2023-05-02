import { useState, useEffect } from "react";
import { fetchData, cacheData, getCachedData } from "../utils/dataCache";

const usePrefetch = (href) => {
  const [isPrefetching, setIsPrefetching] = useState(false);

  useEffect(() => {
    if (isPrefetching) {
      const cachedData = getCachedData(href);
      if (!cachedData) {
        fetchData(href).then((data) => {
          cacheData(href, data);
        });
      }
    }
  }, [isPrefetching, href]);

  return {
    isPrefetching,
    setIsPrefetching,
  };
};

export default usePrefetch;
