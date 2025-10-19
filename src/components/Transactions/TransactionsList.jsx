// src/components/Transactions/TransactionList.jsx
import React from "react";
import TransactionItem from "../UI/TransactionItem";
import { FilterIcon, DownloadIcon, ChevronDownIcon } from "../../icons";

const TransactionList = ({
  transactions,
  filters,
  isFilterActive,
  onOpenFilters,
}) => {
  return (
    <div className="mt-12 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold">
            {transactions.length} Transactions
          </h2>
          <p className="text-sm text-gray-500">
            Showing transactions for "{filters.dateRange}"
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-white transition-colors relative"
            onClick={onOpenFilters}
          >
            <ChevronDownIcon size={16} />
            <span>Filter</span>
            {isFilterActive && (
              <span className="w-2 h-2 bg-orange-500 rounded-full absolute -top-1 -right-1" />
            )}
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors">
            <DownloadIcon size={16} />
            <span>Download</span>
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {transactions.map((t) => (
          <TransactionItem key={t.id} transaction={t} />
        ))}
        {transactions.length === 0 && (
          <div className="text-center py-10 text-gray-500 text-sm">
            No transactions match the current filters. Try clearing the filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionList;
