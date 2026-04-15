"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { FaChartLine} from "react-icons/fa6";
import { IoCloseSharp, IoHomeOutline } from 'react-icons/io5';


const Navbar = () => {

    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };


    const pathname = usePathname();


    const navItems = [
        {
            path: '/',
            icon: <IoHomeOutline></IoHomeOutline>,
            text: 'Home'
        },
        {
            path: '/timeline',
            icon: <IoMdTime></IoMdTime>,
            text: 'Timeline'
        },
        {
            path: '/stats',
            icon: <FaChartLine></FaChartLine>,
            text: 'Stats'
        },
    ]


    const linkClass = (path) => {
        return pathname === path ? "bg-teal-600 py-2 px-3 rounded-lg text-white"
            : "text-teal-600";
    }


    return (
        
        <nav className="border-b border-teal-200 py-3">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <h2 className="font-extrabold text-3xl md:text-4xl text-teal-950">
                        Bond<span className="text-teal-600">Keeper</span>
                    </h2>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <Link key={index} href={item.path} className={`flex items-center gap-1 text-teal-600 ${linkClass(item.path)}`}>
                                {item.icon}
                                {item.text}
                            </Link>
                        ))}
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="p-2 text-2xl text-teal-600"
                        >
                            {isClick ? <IoCloseSharp /> : <HiOutlineMenu />}
                        </button>
                    </div>

                </div>

                {/* MOBILE MENU */}
                {isClick && (
                    <div className="mt-4 flex flex-col gap-4 md:hidden">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                onClick={() => setIsClick(false)}
                                className={`flex items-center gap-2 text-teal-600 ${linkClass(item.path)}`}
                            >
                                {item.icon}
                                {item.text}
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </nav>
    );



};

export default Navbar;