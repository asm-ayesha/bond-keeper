import React from 'react';
import FriendCard from '../ui/FriendCard';


const FriendsCard = async () => {
    const res = await fetch("https://bond-keeper-r5k29xuvs-ayesha219333-4196s-projects.vercel.app/friends.json", {
        cache: "no-store"
    });
    const friends = await res.json();

    return (
        <div className='container mx-auto my-20'>
            <h2 className='font-bold text-xl text-teal-800'>Your Friends</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 px-2">

                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default FriendsCard;


