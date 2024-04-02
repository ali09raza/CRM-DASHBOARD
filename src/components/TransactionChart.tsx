import React from "react";
import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  XAxis,
} from "recharts";

const TransactionChart = () => {
  const data = [
    { name: "Jan", Expense: 4000, Income: 24000 },
    { name: "Feb", Expense: 5000, Income: 21000 },
    { name: "Mar", Expense: 6000, Income: 18000 },
    { name: "Apr", Expense: 7000, Income: 15000 },
    { name: "May", Expense: 8000, Income: 12000 },
    { name: "Jun", Expense: 9000, Income: 9000 },
    { name: "Jul", Expense: 10000, Income: 6000 },
    { name: "Aug", Expense: 11000, Income: 3000 },
    { name: "Sep", Expense: 12000, Income: 8660 },
    { name: "Oct", Expense: 13000, Income: 5580 },
    { name: "Nov", Expense: 14000, Income: 2450 },
    { name: "Dec", Expense: 15000, Income: 8520 },
  ];
  return (
    <div className="h-[15rem] bg-white p-4 rounded-sm border border-grey-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Transactions</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0a0aff" />
            <Bar dataKey="Expense" fill="#e85b1a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
