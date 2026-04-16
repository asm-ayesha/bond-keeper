"use client"
import React, { useContext } from 'react';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { FriendContext } from '../context/FriendContext';
import { toast } from 'react-toastify';


const ToggoleBtns = ({ friend }) => {

    const { addActivity } = useContext(FriendContext)


    const handleClick = (type) => {
        addActivity(friend, type);

        toast.success(`${type} with ${friend.name}`);
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-teal-50 rounded-lg p-6 shadow-md text-center space-y-3 cursor-pointer hover:bg-teal-800' onClick={() => {
                handleClick("Call")
            }}>
                <TbPhoneCall className='text-xl mx-auto'></TbPhoneCall>
                <p className='text-xl'>Call</p>
            </div>
            <div className='bg-teal-50 rounded-lg p-6 shadow-md text-center space-y-3 cursor-pointer hover:bg-teal-800' onClick={() => {
                handleClick("Text")

            }}>
                <MdOutlineTextsms className='text-xl mx-auto'></MdOutlineTextsms>
                <p className='text-xl'>Text</p>
            </div>
            <div className='bg-teal-50 rounded-lg p-6 shadow-md text-center space-y-3 cursor-pointer hover:bg-teal-800' onClick={() => {
                handleClick("Video")
            }}>
                <MdOutlineVideocam className='text-xl mx-auto'></MdOutlineVideocam>
                <p className='text-xl'>Video</p>
            </div>
        </div>
    );
};

export default ToggoleBtns;

