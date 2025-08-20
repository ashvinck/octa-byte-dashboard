'use client';

import React, { useState } from 'react';
import PortfolioTable, { SectorGroup } from './portfolio-table';
import { toast } from 'sonner';

interface LiveStockData {
  symbol: string;
  cmp: number;
  peRatio: number | null;
  latestEarnings: string | null;
}

const PortfolioTableContainer = () => {
  // To store the data
  const [sectors, setSectors] = useState<SectorGroup[]>([]);
  // For Loading
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPortfolioAndLiveData() {
    try {
      // 1. Fetching portfolio data from backend.
      const portfolioRes = await fetch('/api/dashboard');
      if (!portfolioRes.ok) {
        toast.error('Failed to load portfolio data. Please try again later.');
        console.error('Failed to fetch portfolio data');
        return;
      }
      const portfolioData: SectorGroup[] = await portfolioRes.json();

      // 2. Extracting symbols.
      const symbols = portfolioData.flatMap((sector) =>
        sector.stocks.map((stock) => {
          const suffix =
            stock.exchange === 'NSE'
              ? '.NS'
              : stock.exchange === 'BSE'
              ? '.BO'
              : '';
          return stock.symbol.toUpperCase() + suffix;
        })
      );

      // 3. Fetching live data from yahoo2 library
      const liveRes = await fetch('/api/live-portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbols }),
      });
      if (!liveRes.ok) {
        toast.error('Failed to fetch live data. Please try again later.');
        console.error('Failed to fetch live data');
        setSectors(portfolioData);
        return;
      }
      const { data } = await liveRes.json();

      function normalizeSymbol(symbol: string) {
        return symbol.toUpperCase().replace(/(\.NS|\.BO)$/, '');
      }

      // 4. Merging live data into portfolioData
      const updatedData = portfolioData.map((sector) => ({
        ...sector,
        stocks: sector.stocks.map((stock) => {
          const liveStock = data.find(
            (d: LiveStockData) =>
              normalizeSymbol(d.symbol) === normalizeSymbol(stock.symbol)
          );
          if (liveStock) {
            const cmp = Number(liveStock.cmp) || 0;
            const presentValue = cmp * stock.quantity;
            const gainLoss = presentValue - stock.investment;
            return {
              ...stock,
              cmp,
              presentValue,
              gainLoss,
              peRatio: liveStock.peRatio ?? stock.peRatio,
              latestEarnings: liveStock.latestEarnings ?? stock.latestEarnings,
            };
          }
          return stock;
        }),
      }));
      setSectors(updatedData);
      setIsLoading(false);
    } catch (error) {
      // toaster for displaying error
      setIsLoading(false);
      toast.error('Unexpected error. Please try again later');
      console.error('Error fetching portfolio or live data', error);
    }
  }

  React.useEffect(() => {
    fetchPortfolioAndLiveData();
    const intervalId = setInterval(fetchPortfolioAndLiveData, 150000); // Time Interval of 15 sec
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <div className='loader'></div>
      </div>
    );
  }

  return <PortfolioTable sectors={sectors} />;
};

export default PortfolioTableContainer;
