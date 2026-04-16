import { Span } from 'next/dist/trace';
import Image from 'next/image';
import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { IoMdStopwatch } from 'react-icons/io';
import { MdDeleteOutline, MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';



const friendsPromise = async function () {
  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();
  return data;

}

const FriendDetailsPage = async ({ params }) => {
  const friends = await friendsPromise();
  console.log(friends)

  const { id } = await params;
  console.log(id, "params")


  const statusColor = {
    overdue: "bg-amber-100 text-amber-600",
    on_track: "bg-indigo-100 text-indigo-600",
  };

  const friend = friends.find(friend => friend.id == id)
  console.log(friend)
  return (
    <div className='container mx-auto justify-center mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 '>
      <div className='col-span-1 '>
        <div>
          <div className='border border-gray-200 shadow-md p-6 rounded-lg text-center'>
            <Image src={friend.picture}
              width={80}
              height={80}
              className="rounded-full mx-auto"
              alt={friend.name}></Image>

            <div className='mt-4 space-y-3'>
              <h2 className='text-2xl font-bold'>{friend.name}</h2>
              <div className='flex justify-center items-center'>
                <p className={`inline-block px-3 py-1 rounded-full font-bold ${statusColor[friend.status]}`}>{friend.status}</p>
              </div>
              {
                friend.tags?.map((tag, index) => <span key={index} className='px-3 py-2 bg-sky-100 text-sky-600 rounded-full text-sm mr-3 font-bold'>
                  {tag}
                </span>)
              }
              <p className='text-gray-400 font-bold my-3'>{friend.bio}</p>
              <p className='text-gray-400 '>Email: {friend.email}</p>
            </div>
          </div>

          <div className='space-y-3 mt-4'>
            <button className='flex items-center gap-3 btn w-full text-xl font-bold rounded-lg bg-white py-6'>
              <IoMdStopwatch></IoMdStopwatch>
              Snooze 2 Weeks</button>

            <button className='flex items-center gap-3 btn w-full text-xl font-bold rounded-lg bg-white py-6'>
              <FiArchive></FiArchive>
              Archive</button>

            <button className='flex items-center gap-3 btn w-full text-xl font-bold rounded-lg bg-white py-6 text-red-500'>
              <MdDeleteOutline></MdDeleteOutline>
              Delete</button>


          </div>
        </div>
      </div>


      <div className=' col-span-1 lg:col-span-2'>
        
        <div className='grid grid-rows-3 gap-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='border border-gray-200 shadow-md  rounded-lg text-center flex flex-col justify-center'>
                    <h2 className='text-teal-700 text-4xl font-bold'>{friend.days_since_contact}</h2>
                      <p className='text-gray-400 font-bold text-xl'>Days Since Contact</p>
                  </div>
                  <div className='border border-gray-200 shadow-md  rounded-lg text-center flex flex-col justify-center'>
                    <h2 className='text-teal-700 text-4xl font-bold'>{friend.goal}</h2>
                      <p className='text-gray-400 font-bold text-xl'>Goal</p>
                  </div>
                  <div className='border border-gray-200 shadow-md rounded-lg text-center flex flex-col justify-center'>
                    <h2 className='text-teal-700 text-4xl font-bold'>{friend.next_due_date}</h2>
                      <p className='text-gray-400 font-bold text-xl'>Next Due Date</p>
                  </div>
              </div>

              <div className='border border-gray-200 shadow-md flex justify-between items-center px-4 rounded-lg'>
                  <div>
                    <h2 className='text-teal-800 font-bold text-2xl'>RalationShip Goal</h2>
                    <p className='text-gray-400 font-bold'>Connect every <span className='font-bold text-black'>30 days</span></p>
                  </div>
                  <div>
                    <button className='btn bg-white shadow'>Edit</button>
                  </div>
              </div>

              <div className='border border-gray-200 shadow-md  p-6 rounded-lg'>
                  <h2 className='text-teal-800 text-2xl  font-bold my-3'>Quick Check-In</h2>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                      <div className='bg-teal-50 rounded-lg p-6 shadow-md text-center space-y-3 cursor-pointer'>
                          <TbPhoneCall className='text-xl mx-auto'></TbPhoneCall>
                          <p className='text-xl'>Call</p>
                      </div>
                      <div className='bg-teal-50 rounded-lg p-6 shadow-md text-center space-y-3 cursor-pointer'>
                          <MdOutlineTextsms className='text-xl mx-auto'></MdOutlineTextsms>
                          <p className='text-xl'>Text</p>
                      </div>
                      <div className='bg-teal-50 rounded-lg p-6 shadow-md text-center space-y-3 cursor-pointer'>
                          <MdOutlineVideocam className='text-xl mx-auto'></MdOutlineVideocam>
                          <p className='text-xl'>Video</p>
                      </div>
                  </div>

              </div>
        </div>
      </div>

    </div>
  );
};

export default FriendDetailsPage;