import { NextRequest } from 'next/server';
import yahooFinance from 'yahoo-finance2';


/**
 * 
 * @param req symbols ( Companies symbol wrt to the exchange they belong)
 * @returns cmp, peRation, latestEarnings
 */
export async function POST(req: NextRequest) {
  try {
    const { symbols } = await req.json();

    /// Error handling for symbols is undefined or empty
    if (!Array.isArray(symbols) || symbols.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Symbols array is required' }),
        { status: 400 }
      );
    }

    // Fetch quote data in parallel for all symbols
    const results = await Promise.all(
      symbols.map(async (symbol: string) => {
        try {
          const quote = await yahooFinance.quote(symbol);

          return {
            symbol,
            cmp: quote.regularMarketPrice ?? 0,
            peRatio: quote.trailingPE ?? null,
            latestEarnings:
              quote.epsTrailingTwelveMonths ??
              quote.epsForward ??
              null,
          };
        } catch (error) {
          // If fetch fails for a symbol, return null data for it without failing whole request
          return {
            symbol,
            cmp: 0,
            peRatio: null,
            latestEarnings: null,
          };
        }
      })
    );

    // console.log("results", results);

    return new Response(
      JSON.stringify({ data: results }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message || 'Internal Server Error' }),
      { status: 500 }
    );
  }
}
