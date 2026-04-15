import React from 'react';

const BannerCard = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-15 text-center mx-auto px-2'>
            {/* banner card 1 */}
            <div className='space-y-3 bg-teal-50 shadow py-5 px-10 rounded-lg '>
                <h2 className='text-teal-800 text-2xl font-bold'>10</h2>
                <p className='text-gray-400'>Total Friends</p>
            </div>
            {/* banner card 2 */}
            <div className='space-y-3 bg-teal-50 shadow py-5 px-10 rounded-lg '>
                <h2 className='text-teal-800 text-2xl font-bold'>3</h2>
                <p className='text-gray-400'>On Track</p>
            </div>
            {/* banner card 3 */}
            <div className='space-y-3 bg-teal-50 shadow py-5 px-10 rounded-lg '>
                <h2 className='text-teal-800 text-2xl font-bold'>6</h2>
                <p className='text-gray-400'>Need Attention</p>
            </div>
            {/* banner card 4 */}
            <div className='space-y-3 bg-teal-50 shadow py-5 px-10 rounded-lg '>
                <h2 className='text-teal-800 text-2xl font-bold'>12</h2>
                <p className='text-gray-400'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default BannerCard;