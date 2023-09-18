import { NextResponse } from "next/server";
import { getStockHistory } from "@/app/utils";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { investment, amount } = body;

      if (!investment || !amount)
        return new NextResponse("Invalid request", { status: 400 });

      const stockHistory = await getStockHistory(investment, amount);

      if (stockHistory.length === 0 || !stockHistory[0]) {
        return NextResponse.json({
          code: 400,
          message: "stock history data could not be retrieved",
          success: false,
        });
      }

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
