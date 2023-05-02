import React, { useState, useEffect } from "react";
import { fetchData, cacheData, getCachedData } from "../utils/dataCache";

const CustomLink = ({ href, children }) => {
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

  const handleMouseEnter = () => {
    setIsPrefetching(true);
  };

  const handleMouseLeave = () => {
    setIsPrefetching(false);
  };

  return (
    <a href={href} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
    </a>
  );
};

export default CustomLink;
