import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
  return (
    <div className='flex justify-center items-center font-fold text-5xl text-teal-500 mt-10'>
      <HashLoader color='#069494'></HashLoader>
    </div>
  );
};

export default loading;