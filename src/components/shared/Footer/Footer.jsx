import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center p-10 mt-20 bg-teal-800">
            <div className='space-y-4'>
                <h2 className='text-white text-5xl font-bold'>
                    BondKeeper
                </h2>
                <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            </div>
            <nav>
                <p className='font-bold text-white text-2xl '>Social Links</p>
                <div className="grid grid-flow-col gap-4 text-xl">

                    <div className='bg-white p-3 rounded-full text-teal-800 cursor-pointer'>
                        <FaFacebook></FaFacebook>
                    </div>
                    <div className='bg-white p-3 rounded-full text-teal-800 cursor-pointer'>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div className='bg-white p-3 rounded-full text-teal-800 cursor-pointer'>
                        <FaXTwitter></FaXTwitter>
                    </div>

                </div>
            </nav>
            <div className="flex justify-between w-full max-w-4xl text-gray-400 border-t pt-6 border-teal-700" >
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;