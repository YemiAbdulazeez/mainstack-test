import React from 'react';
import RevenueChart from './RevenueChart';

const BalanceCards = ({ wallet }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
    {/* Available Balance */}
    <div className="lg:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-500 text-sm mb-1">Available Balance</p>
          <div className="flex items-center gap-4 flex-wrap">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">USD</span>
              {wallet.availableBalance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </p>
            
            {/* Withdraw Button - Right next to the amount */}
            <button className="lg:px-10 px-4 py-3 bg-gray-900 text-white ms-0 lg:ms-12 text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-md whitespace-nowrap">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <RevenueChart/>
    </div>

    {/* Ledger Balances */}
    <div className="lg:col-span-1 space-y-3 pt-2">
      {[
        { label: "Ledger Balance", value: wallet.ledgerBalance },
        { label: "Total Payout", value: wallet.totalPayout },
        { label: "Total Revenue", value: wallet.totalRevenue },
        { label: "Pending Payout", value: wallet.pendingPayout },
      ].map(({ label, value }) => (
        <> <div
          key={label}
          className="flex justify-between items-center text-right"
        >
          <div className="flex items-start flex-col">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 mt-2">{label}</p>
            </div>
            <p className="text-lg sm:text-xl text-black font-bold mt-3 lg:mt-6">
              USD {value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900">
            <svg
              className="w-5 h-5 text-gray-300 cursor-pointer hover:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </p>
        </div>
        
        </>
       
      ))}
    </div>
  </div>
);

export default BalanceCards;