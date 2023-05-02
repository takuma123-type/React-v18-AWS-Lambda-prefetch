import React from "react";
import usePrefetch from "../hooks/usePrefetch";

const CustomLink = ({ href, children }) => {
  const { isPrefetching, setIsPrefetching } = usePrefetch(href);

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
