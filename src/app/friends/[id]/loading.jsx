import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='flex justify-center items-center bg-teal-200 h-screen font-fold text-5xl'>
      <HashLoader></HashLoader>
    </div>
  );
};

export default loading;