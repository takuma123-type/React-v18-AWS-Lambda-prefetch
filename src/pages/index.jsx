import React, { useEffect, useState } from 'react';
import CustomLink from '../components/CustomLink';
import { fetchData } from '../utils/dataCache';

const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData('/data-for-index').then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Index Page</h1>
      <p>{data ? data.content : 'Loading...'}</p>
      <CustomLink href="/otherPage">Go to Other Page</CustomLink>
    </div>
  );
};

export default Index;
