import React from 'react';

import SavingsProgress from '../components/SavingsProgress';
import SearchAndSort from '../components/SearchAndSort';

import TransactionHistoryTable from '../components/TransactionHistoryTable';
import DashboardCard from '../components/DashboardCard';

const SubAcctTransaction = () => {
  return (
    // Use a responsive container with padding
    <div className="container  px-12 sm:px-6 lg:px-8 ">
      {/* Top section: User info, balance, and savings progress */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  mb-8 md:text-sm  ">
        {/* Left column */}
        <div className="space-y-6">
          <DashboardCard
            name="Shalom Kanu"
            id="12345"
            profileImg="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            growth="10"
            // balance={`{balance}`.toLocaleString()}
            balance="12000"
            SubacctTransfer="Initiate New Transaction"
          />
          {/* I have changed the card to ensure reusability */}

          {/* <UserInfo name="Ritji Ishaku" id="8327642732" />
          <BalanceCard balance={3500000} growth={10.08} /> */}
        </div>
        {/* Right column */}
        <div className="text-xs md:text-sm ">
          {' '}
          {/* We don't need this div */}
          <SavingsProgress
            monthlyIncome={50000}
            spent={14500}
            left={35500}
            totalSavings={1000}
          />
        </div>
      </div>
      {/* Search and sort section */}

      <div className="mb-8">
        <SearchAndSort />
      </div>

      {/* Transaction history table */}
      <div>
        <TransactionHistoryTable />
      </div>
    </div>
  );
};

export default SubAcctTransaction;
