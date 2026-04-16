"use client"
import { FriendContext } from '@/components/context/FriendContext';
import React, { useContext, useState } from 'react';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';



const iconMap = {
  Call: <TbPhoneCall className="text-green-500 text-xl" />,
  Text: <MdOutlineTextsms className="text-blue-500 text-xl" />,
  Video: <MdOutlineVideocam className="text-purple-500 text-xl" />,
};




const TimeLinePage = () => {
  const { timeline } = useContext(FriendContext);
  const [filter, setFilter] = useState("All")

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);


  return (
    <div className="p-4 container mx-auto mt-10">
      <h2 className="text-5xl text-teal-800 font-bold mb-4">Timeline</h2>


      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border border-teal-200 p-2  w-48 shadow-md rounded mb-4 focus:outline-0 focus:ring-0 text-teal-700"
      >
        <option value="All">All</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {filteredTimeline.length === 0 ? (
        <p className="text-gray-400">No activity yet</p>
      ) : (
        filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="border border-teal-100 p-3 rounded-lg mb-2 shadow-md"
          >
            <div className='flex gap-6'>
              {iconMap[item.type]}
              <div className='space-y-3'>
                <p className='text-2xl font-bold text-teal-800'>{item.type} <span className='text-gray-400'>with {item.friendName}</span></p>
                <p className="text-xs font-bold text-gray-400">{item.time}</p>
              </div>
            </div>



          </div>
        ))
      )}
    </div>
  );
};

export default TimeLinePage;