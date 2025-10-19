import React from "react";
import Icon from "../ui/Icon";
import ArrowUp from "../../../public/icons/arrow-down.svg"

const TransactionsList = ({ transactions, onFilterClick }) => (
  <div className="mt-6 lg:mt-8">
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
          className="flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors flex-1 sm:flex-none justify-center"
        >
        
          <span className="font-medium">Filter</span>
            <Icon
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            className="w-4 h-4"
          />
        </button>
        <button className="flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors flex-1 sm:flex-none justify-center">
          <span className="font-medium">Export list</span>
          <Icon
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
    <div className="border-b"></div>
    {/* Transaction Items */}
    <div className="space-y-3">
      {transactions.map((tx) => (
        <div
          key={tx.id}
          className="flex justify-between items-center p-3 sm:px-4 sm:py-3 0"
        >
          <div className="flex items-center min-w-0 flex-1">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
              <span className="text-green-600">
                 <img src={ArrowUp} className="h-6 text-green-600 w-auto" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium text-gray-900 truncate">{tx.title}</p>
              <p className="text-sm text-gray-500 truncate">{tx.sub}</p>
            </div>
          </div>
          <div className="text-right ml-3 flex-shrink-0">
            <p className="font-semibold text-gray-900 whitespace-nowrap">
              USD {tx.amount.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500 whitespace-nowrap">{tx.date}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionsList;
