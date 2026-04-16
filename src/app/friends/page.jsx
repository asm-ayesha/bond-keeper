import FriendCard from '@/components/ui/FriendCard';
import React from 'react';


const page = () => {
    return (
        <div>
            <FriendCard from={friends}></FriendCard>
        </div>
    );
};

export default page;