import React from 'react';

interface IHeader {
  setIsSideBarOpen: (prev: boolean) => void;
  isSideBarOpen: boolean;
}
const Header = ({ setIsSideBarOpen, isSideBarOpen }: IHeader) => {
  const handleHamburgerClick = (prev: boolean) => {
    setIsSideBarOpen(!prev);
  };
  return (
    <header className='xs:h-[54px] sm:h-[64px] flex items-center p-3'>
      {isSideBarOpen ? (
        // Hamburger Menu
        <button
          className='flex md:hidden cursor-pointer'
          onClick={() => handleHamburgerClick(isSideBarOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-8 h-8 text-gray-700'
          >
            <path
              fillRule='evenodd'
              d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      ) : (
        // Cross Button
        <button
          className='flex md:hidden cursor-pointer'
          onClick={() => handleHamburgerClick(isSideBarOpen)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-8 h-8 text-gray-700'
          >
            <path
              fillRule='evenodd'
              d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}

      <p className='font-bold text-3xl ml-1'>My Fort</p>
      {/* --- Profile Button ---- */}
      <button className='ml-auto cursor-pointer'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-8 h-8 text-gray-700'
        >
          <path
            fillRule='evenodd'
            d='M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
