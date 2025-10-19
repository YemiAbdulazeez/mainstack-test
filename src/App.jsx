import React, { useState } from "react";
import Header from "./components/layout/Header";
import AppSidebar from "./components/layout/AppSidebar";
import FilterSidebar from "./components/layout/FilterSidebar";
import BalanceCards from "./components/dashboard/BalanceCards";
import RevenueChart from "./components/dashboard/RevenueChart";
import TransactionsList from "./components/dashboard/TransactionsList";
import { mockWallet, mockTransactions } from "./data/mockData";

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AppSidebar />

      <main className="px-4 sm:px-6 lg:px-8 xl:px-32 py-6 lg:py-12 relative">
        <div className="max-w-7xl mx-auto">
          <BalanceCards wallet={mockWallet} />

          <hr className="my-6 lg:my-8 border-gray-100" />
          <TransactionsList
            transactions={mockTransactions}
            onFilterClick={() => setIsFilterOpen(true)}
          />
        </div>
      </main>

      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
}

export default App;
