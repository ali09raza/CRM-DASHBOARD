import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
const BuyerProfileChart = () => {
  const data = [
    { name: "Male", value: 540 },
    { name: "Female", value: 620 },
    { name: "Other", value: 210 },
  ];
  return (
    <div className="w-[16.4rem] h-[15rem] bg-white p-4 rounded-sm border border-grey-200 flex flex-col">
      <strong className="text-grey-700 font-medium">Buyer Profile</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#e85b1a"
            />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={60}
              fill="#0a0aff"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerProfileChart;
