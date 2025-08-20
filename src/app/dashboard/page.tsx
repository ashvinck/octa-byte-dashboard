import React from 'react';

import { Divider } from '@/components/ui/divider';
import PortfolioTableContainer from '@/components/fragments/tableContainer';

const PageDashboard = async () => {
  return (
    <div className='flex flex-col p-2 h-full w-full mb-3'>
      {/* ----- Greeting ------ */}
      <div className='flex flex-row w-full items-center justify-between'>
        <p className='text-2xl font-bold text-[#9e9e9e]'>Hello User</p>
        <p className='text-2xl font-bold text-[#9e9e9e]'>Welcome</p>
      </div>

      {/* ------- Divider ------- */}
      <Divider />

      {/* ----- Portfolio Table ------- */}
      <PortfolioTableContainer />
    </div>
  );
};

export default PageDashboard;
