import { ApiResponse, SingleStockData, DateRange } from "../stock.interface";
import axios from "axios";

/**
 * getDates - return a tuple of [1 year ago, today]
 * @returns {tuple} [aYearAgo, today]
 */

export const getDates = (): DateRange => {
  let date = new Date();
  // format the day as yyyy-mm-dd
  const today = date.toISOString().split("T")[0];

  // set year to 1 year ago
  date.setFullYear(date.getFullYear() - 1);
  const aYearAgo = date.toISOString().split("T")[0];

  // 1 year ago, today
  return [aYearAgo, today];
};

/**
 *
 * @param stockName The stock name
 */
export const singularStockData = async (
  stockName: string,
  dates: DateRange,
  amount: number
): Promise<SingleStockData> => {
  let stockData: SingleStockData = {
    ticker: stockName,
    amount,
    results: [],
  };
  try {
    const resp = await axios.get<ApiResponse>(
      `https://api.polygon.io/v2/aggs/ticker/${stockName}/range/1/month/${dates[0]}/${dates[1]}?adjusted=false&sort=asc&limit=50000&apiKey=${process.env.NEXT_PUBLIC_POLYGON_API_KEY}`
    );
    let noOfStock = 0;
    for (let i = 0; i < resp.data.results.length; i++) {
      if (i == 0) {
        noOfStock = Number((amount / 100 / resp.data.results[i].o).toFixed(2));
      }
      const currentValue = Number(
        (resp.data.results[i].c * noOfStock).toFixed(2)
      );
      stockData.results.push({
        currentValue,
        timestamp: resp.data.results[i].t,
      });
    }
  } catch (e) {
    console.warn(`${stockName} data fetching failed`);
  }
  return stockData;
};
