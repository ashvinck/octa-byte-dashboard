import { formatIndianNumber } from '@/lib/helper';
import React from 'react';

interface SummaryI {
  investment: number;
  presentValue: number;
  gainLoss: number;
}

const Cards = ({ data }: { data: SummaryI }) => {
  function gainLossColor(value: number) {
    return value >= 0
      ? 'text-green-600 font-medium border-l-green-600'
      : 'text-red-600 font-medium border-l-red-600';
  }

  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 text-sm text-gray-700 dark:text-gray-300'>
        <div className='bg-white rounded-xs p-3 shadow-md border-l-[#03a9f4]  border-l-3'>
          <span className='block text-xs text-gray-500 font-semibold mb-1'>
            Total Investment
          </span>
          <span className='font-semibold text-xl'>
            ₹ {formatIndianNumber(data?.investment)}
          </span>
        </div>
        <div className='bg-white rounded-xs p-3 shadow-md border-l-orange-600 border-l-3'>
          <span className='block text-xs text-gray-500 font-semibold mb-1'>
            Present Value
          </span>
          <span className='font-semibold text-xl'>
            ₹ {formatIndianNumber(data?.presentValue)}
          </span>
        </div>
        <div
          className={`bg-white border-l-[#4caf50]  border-l-3 rounded-xs p-3 shadow-md ${gainLossColor(
            data?.gainLoss
          )}`}
        >
          <span className='block text-xs text-gray-500 font-semibold mb-1'>
            Gain / Loss
          </span>
          <span className='font-semibold text-lg'>
            ₹ {formatIndianNumber(data?.gainLoss)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
