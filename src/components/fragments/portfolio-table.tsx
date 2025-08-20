'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@/components/ui/table';
import Cards from './cards';
import { formatIndianNumber } from '@/lib/helper';

export interface StockItem {
  name: string;
  purchasePrice: number;
  quantity: number;
  investment: number;
  portfolioPct: number;
  exchange: string;
  cmp: number;
  presentValue: number;
  gainLoss: number;
  peRatio: number | string;
  latestEarnings: string;
  symbol: string;
}

export interface SectorSummary {
  investment: number;
  presentValue: number;
  gainLoss: number;
}

export interface SectorGroup {
  name: string;
  summary: SectorSummary;
  stocks: StockItem[];
}

interface PortfolioTableProps {
  sectors: SectorGroup[];
}

function gainLossColor(value: number) {
  return value >= 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium';
}

/// From Research most probable logic
function peRatioColor(peRatio: number | string) {
  if (peRatio === null || peRatio === '' || peRatio === '-')
    return 'text-gray-500';
  const val = typeof peRatio === 'string' ? parseFloat(peRatio) : peRatio;
  if (isNaN(val)) return 'text-gray-500';
  if (val < 15) return 'text-green-700 font-semibold';
  if (val <= 30) return 'text-yellow-600 font-semibold';
  return 'text-red-600 font-semibold';
}

function earningsColor(earnings: string) {
  const val = parseFloat(earnings);
  if (isNaN(val)) return 'text-gray-500';
  return val >= 0
    ? 'text-green-600 font-semibold'
    : 'text-red-600 font-semibold';
}

const PortfolioTable: React.FC<PortfolioTableProps> = ({ sectors }) => {
  return (
    <div className='space-y-12'>
      {sectors?.map((sector) => (
        <div key={sector?.name}>
          <h2 className='text-xl font-semibold mb-4 py-2'>{sector?.name}</h2>
          <Cards data={sector?.summary} />

          <div className='overflow-x-auto'>
            <Table className='border rounded-lg shadow-md text-sm'>
              <TableHeader className='bg-gray-100 dark:bg-gray-800'>
                <TableRow>
                  <TableHead className='pl-4 sticky left-0 bg-gray-100 dark:bg-gray-800 font-semibold'>
                    Particulars
                  </TableHead>
                  <TableHead className='text-right'>Purchase Price</TableHead>
                  <TableHead className='text-right'>Qty</TableHead>
                  <TableHead className='text-right'>Investment</TableHead>
                  <TableHead className='text-right'>Portfolio (%)</TableHead>
                  <TableHead>NSE/BSE</TableHead>
                  <TableHead className='text-right'>CMP</TableHead>
                  <TableHead className='text-right'>Present Value</TableHead>
                  <TableHead className='text-right'>Gain/Loss</TableHead>
                  <TableHead className='text-right'>P/E Ratio</TableHead>
                  <TableHead className='text-center'>Latest Earnings</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sector?.stocks.map((stock, idx) => (
                  <TableRow
                    key={stock?.name}
                    className={`group ${
                      idx % 2 === 0
                        ? 'bg-white dark:bg-gray-900'
                        : 'bg-gray-50 dark:bg-gray-950'
                    } hover:bg-blue-50 dark:hover:bg-blue-900/40`}
                  >
                    <TableCell className='pl-4 font-medium sticky left-0 bg-inherit'>
                      {stock?.name}
                    </TableCell>
                    <TableCell className='text-right'>
                      ₹ {formatIndianNumber(stock?.purchasePrice)}
                    </TableCell>
                    <TableCell className='text-right'>
                      {stock?.quantity}
                    </TableCell>
                    <TableCell className='text-right'>
                      ₹ {formatIndianNumber(stock?.investment)}
                    </TableCell>
                    <TableCell className='text-right'>
                      {formatIndianNumber(stock?.portfolioPct)}%
                    </TableCell>
                    <TableCell className='text-center'>
                      {stock?.exchange}
                    </TableCell>
                    <TableCell className='text-right'>
                      ₹ {formatIndianNumber(stock?.cmp)}
                    </TableCell>
                    <TableCell className='text-right'>
                      ₹ {formatIndianNumber(stock?.presentValue)}
                    </TableCell>
                    <TableCell
                      className={`text-right ${gainLossColor(stock?.gainLoss)}`}
                    >
                      ₹ {formatIndianNumber(stock?.gainLoss)}
                    </TableCell>
                    <TableCell
                      className={`text-right ${peRatioColor(stock?.peRatio)}`}
                    >
                      {typeof stock?.peRatio === 'number'
                        ? stock.peRatio.toFixed(2)
                        : stock.peRatio || '-'}
                    </TableCell>
                    <TableCell
                      className={`text-center ${earningsColor(
                        stock?.latestEarnings
                      )}`}
                    >
                      {stock?.latestEarnings || '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioTable;
