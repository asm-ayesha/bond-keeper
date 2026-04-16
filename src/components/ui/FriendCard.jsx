import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FriendCard = ({ friend }) => {
  
  
const statusColor = {
  overdue: "bg-amber-100 text-amber-600",
  on_track: "bg-teal-100 text-teal-600",
  almost_due: "bg-violet-100 text-violet-600",
  };

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white border border-teal-200 shadow-md rounded-xl p-4 text-center">
      <Image
        src={friend.picture}
        width={80}
        height={80}
        className="rounded-full mx-auto"
        alt={friend.name}
      />
      <div className='space-y-2'>
        <h3 className="mt-3 text-xl font-bold">{friend.name}</h3>
        <p className='text-gray-400 font-bold' >{friend.days_since_contact}d ago</p>
        <span className="mt-3 px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-sm">
          {friend.tags?.[0]}
        </span>
      </div>

      <button className={`mt-3 px-3 py-1 rounded-full text-sm ${statusColor[friend.status]}`}>
        {friend.status}
      </button>
    </div>
    </Link>
  );
};

export default FriendCard;
