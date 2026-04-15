import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Banner = () => {
    return (
        <div className='mt-20 text-center space-y-5'>
            <div>
                <h2 className=' mb-5 text-5xl font-bold text-teal-950'>Friends to keep close in your life</h2>
                <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
            </div>
            <div className='flex justify-center'>
                <button className='flex btn justify-center items-center bg-teal-600 text-white font-bold '> <IoMdAdd className='text-white text-lg'></IoMdAdd> Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;