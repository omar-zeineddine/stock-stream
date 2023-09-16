import { NextResponse } from "next/server";
import { DateRange, Investment } from "@/app/stock.interface";
import { getDates, singularStockData } from "@/app/utils";

const getStockHistory = async (
  investment: Investment[],
  amount: number
): Promise<[number, number][]> => {
  const dateRange: DateRange = getDates();

  const allStockDataResp = await Promise.all(
    investment.map((inv) => {
      return singularStockData(
        inv.name,
        dateRange,
        (amount * inv.weight) / 100
      );
    })
  );

  // Length of the results
  const l: number = allStockDataResp[0].results.length;

  // chart data
  const currentStockValue: [number, number][] = [];

  // Extract the value for the current month
  const extractCurrentValueForMonth = (allData: any, m: number): number => {
    let currentValue = 0;
    for (let i = 0; i <= allData.length - 1; i++) {
      currentValue += allData[i].results[m].currentValue;
    }
    return Number(currentValue.toFixed(2));
  };

  // Runs a loop that goes through each stock and extract the individual values for each month and adds it up
  for (let i = 0; i < l; i++) {
    // [timestamp, sumOfALLStockValeForMonth]
    currentStockValue.push([
      allStockDataResp[0].results[i].timestamp,
      extractCurrentValueForMonth(allStockDataResp, i),
    ]);
  }

  // An array of array => [timestamp, sumOfALLStockValeForMonth][]
  return currentStockValue;
};

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      console.log({ body });
      const { investment, amount } = body;

      const dateRange = getDates();
      const stockHistory = await getStockHistory(investment, amount);

      return NextResponse.json({
        code: 200,
        message: "stock history data retrieved successfully",
        success: true,
        stockHistory,
      });
    } catch (error) {
      console.log(["STOCK_HISTORY_ERROR", error]);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
}
