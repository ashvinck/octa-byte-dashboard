'use client';

import React, { ReactNode, useState } from 'react';
import Header from '@/components/fragments/header';
import Sidebar from '@/components/fragments/sidebar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true); // for sidebar
  return (
    <>
      <div className='flex flex-row w-full min-h-screen'>
        {isSideBarOpen ? <Sidebar /> : <></>}
        <div className='flex flex-col w-full min-h-screen'>
          <Header
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          />
          <main className='bg-[#bdbdbd36] w-full h-full'>{children}</main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
