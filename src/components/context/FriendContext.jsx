"use client";
import { createContext, useState } from "react";

export const FriendContext = createContext();

export default function FriendProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  const addActivity = (friend, type) => {
    const newActivity = {
      id: Date.now(),
      friendName: friend.name,
      type,
      time: new Date().toLocaleTimeString([], {
         day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      }), 
    };

    setTimeline((prev) => [newActivity, ...prev]);
  };

  return (
    <FriendContext.Provider value={{ timeline, addActivity }}>
      {children}
    </FriendContext.Provider>
  );
}