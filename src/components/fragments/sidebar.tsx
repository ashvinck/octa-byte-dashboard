import React from 'react';
import Image from 'next/image';
import { Divider } from '../ui/divider';

const Sidebar = () => {
  return (
    <aside className='w-30 min-h-screen'>
      <div className='flex flex-col items-center justify-start py-3 h-full'>
        <Image
          src='/logo.png'
          alt='Logo'
          height={40}
          width={40}
          className='h-10 w-10 mb-2'
        />
        <Divider />
        <div className='flex flex-col items-center justify-between w-full h-full'>
          <div className='flex flex-col p-2 items-center cursor-pointer hover:bg-gray-200 w-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6'
            >
              <path
                fillRule='evenodd'
                d='M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z'
                clipRule='evenodd'
              />
            </svg>
            <p className='text-sm'>Dashboard</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
