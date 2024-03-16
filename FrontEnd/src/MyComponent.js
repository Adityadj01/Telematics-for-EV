// MyComponent.js

import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get('/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Render data */}
    </div>
  );
}

export default MyComponent;
