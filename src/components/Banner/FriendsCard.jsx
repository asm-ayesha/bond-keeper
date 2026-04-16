import React from 'react';
import FriendCard from '../ui/FriendCard';


const friendsPromise = async function () {
        const res = await fetch("http://localhost:3000/friends.json");
        const data = await res.json();
        return data;
                
    }

const FriendsCard = async({from}) => {

     const friends = await friendsPromise();
     console.log(friends)

    return (
        <div className='container mx-auto my-20'>
            <h2 className='font-bold text-xl text-teal-800'>Your Friends</h2>

            <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20 px-2">

                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default FriendsCard;


