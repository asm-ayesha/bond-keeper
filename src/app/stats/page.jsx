"use client";
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { FriendContext } from "@/components/context/FriendContext";

const StatsPage = () => {
  const { timeline } = useContext(FriendContext);

  const callCount = timeline.filter(item => item.type === "Call").length;
  const textCount = timeline.filter(item => item.type === "Text").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  const data = [
    { name: "Call", value: callCount || 0, fill: "#10B981" },
    { name: "Text", value: textCount || 0, fill: "#3B82F6" },
    { name: "Video", value: videoCount || 0, fill: "#8B5CF6" },
  ];

  return (
    <div className="mt-15 container mx-auto px-2">
      <h2 className="font-bold text-5xl mb-10 text-teal-800">
        FriendShip Analytics
      </h2>

      <div className=" rounded-md border border-teal-200 shadow-md px-2">
        <h2 className="mt-5 text-xl text-teal-600 font-bold mb-6">
          By Interaction Type
        </h2>

       <div className="flex justify-center px-2">
         <div className="w-full max-w-125 h-100 md:h-125 ">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={80}
                outerRadius={100}
                paddingAngle={5}
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
       </div>
      </div>
    </div>
  );
};

export default StatsPage;