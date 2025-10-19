import React from "react";
import Icon from "../ui/Icon";
import Caret from "../../../public/icons/caret.svg";

import SuccessIcon from "../../../public/icons/arrow-down.svg";
import FailedIcon from "../../../public/icons/arrow-up.svg";
import PendingIcon from "../../../public/icons/arrow-up.svg";

const TransactionsList = ({ transactions, onFilterClick }) => {

  const getStatusConfig = (status) => {
    switch (status) {
      case "Successful":
        return {
          bgColor: "bg-green-100",
          icon: SuccessIcon,
          iconColor: "text-green-600",
        };
      case "Failed":
        return {
          bgColor: "bg-red-100",
          icon: FailedIcon,
          iconColor: "text-red-600",
        };
      case "Pending":
        return {
          bgColor: "bg-yellow-100",
          icon: PendingIcon,
          iconColor: "text-yellow-600",
        };
      default:
        return {
          bgColor: "bg-gray-100",
          icon: PendingIcon,
          iconColor: "text-gray-600",
        };
    }
  };

  return (
    <div className="mt-12 lg:mt-24">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-3 sm:space-y-0">
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="font-extrabold">24</span> Transactions <br />
          <span className="text-gray-500 font-normal text-sm">
            Your transactions for the last 7 days
          </span>
        </h3>
        <div className="flex space-x-2 sm:space-x-3">
          <button
            onClick={onFilterClick}
            className="flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-full bg-gray-200 border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors flex-1 sm:flex-none justify-center"
          >
            <span className="font-medium">Filter</span>
            <img
              src={Caret}
              className="h-5 w-5"
              
            />
          </button>
          <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-full border bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors flex-1 sm:flex-none justify-center">
            <span className="font-medium">Export list</span>
           
             <Icon
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
      <div className="border-b my-8"></div>
      {/* Transaction Items */}
      <div className="space-y-3">
        {transactions.map((tx) => {
          const statusConfig = getStatusConfig(tx.status);

          return (
            <div
              key={tx.id}
              className="flex justify-between items-center p-3 sm:px-4 sm:py-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center min-w-0 flex-1">
                <div
                  className={`w-10 h-10 rounded-full ${statusConfig.bgColor} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}
                >
                  <img
                    src={statusConfig.icon}
                    className={`h-5 w-5 ${statusConfig.iconColor}`}
                    alt={`${tx.status} status`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 truncate">
                    {tx.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{tx.sub}</p>
                </div>
              </div>
              <div className="text-right ml-3 flex-shrink-0">
                <p
                  className={`font-semibold whitespace-nowrap ${
                    tx.amount < 0 ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  USD {tx.amount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 whitespace-nowrap">
                  {tx.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionsList;
