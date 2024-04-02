import React from "react";
import { ReactComponent as SalesIcon } from "../assets/icons/SalesIcon.svg";
import { ReactComponent as ExpensesIcon } from "../assets/icons/ExpensesIcon.svg";
import { ReactComponent as Customer2Icon } from "../assets/icons/Customers2Icon.svg";
import { ReactComponent as Orders2Icon } from "../assets/icons/Orders2Icon.svg";

const DashboardStatsGrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <SalesIcon />
        </div>
        <div className="pl-4">
          <span className="text-sm text-grey500">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-grey-500">$2834.34</strong>
            <span className="text-sm text-green-500 pl-2">+321</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
          <ExpensesIcon />
        </div>
        <div className="pl-4">
          <span className="text-sm text-grey500">Total Expenses</span>
          <div className="flex items-center">
            <strong className="text-xl text-grey-500">$2834.34</strong>
            <span className="text-sm text-green-500 pl-2">+321</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <Customer2Icon />
        </div>
        <div className="pl-4">
          <span className="text-sm text-grey500">Total Customers</span>
          <div className="flex items-center">
            <strong className="text-xl text-grey-500">$2834.34</strong>
            <span className="text-sm text-green-500 pl-2">+321</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
          <Orders2Icon />
        </div>
        <div className="pl-4">
          <span className="text-sm text-grey500">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-grey-500">$2834.34</strong>
            <span className="text-sm text-green-500 pl-2">+321</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStatsGrid;
function BoxWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white  rounded-sm p-4 flex-1 border border-grey-200 flex items-center">
      {children}
    </div>
  );
}
