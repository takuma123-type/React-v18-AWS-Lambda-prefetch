import React, { useEffect, useState } from 'react';
import CustomLink from '../components/CustomLink';
import { fetchData } from '../utils/dataCache';

const OtherPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData('/data-for-otherPage').then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Other Page</h1>
      <p>{data ? data.content : 'Loading...'}</p>
      <CustomLink href="/">Go back to Index Page</CustomLink>
    </div>
  );
};

export default OtherPage;
