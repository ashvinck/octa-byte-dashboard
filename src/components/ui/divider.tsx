import React from 'react';

function Divider({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className='p-[0.5px] bg-[#00000018] w-full my-1 rounded-sm'></div>
  );
}

export { Divider };
