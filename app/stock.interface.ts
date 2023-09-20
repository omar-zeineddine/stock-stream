export interface Investment {
  name: string;
  weight: number;
}

export interface StockData {
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  ticker: string;
  weight: number;
  amount: number;
  noOfStock: number;
  currentValue: number;
}

export interface ApiResponse {
  adjusted: boolean;
  results: StockData[];
  status: string;
  ticker: string;
}

export interface SingleMonthData {
  currentValue: number;
  timestamp: number;
}

export interface SingleStockData {
  ticker: string;
  amount: number;
  results: SingleMonthData[];
}

export type DateRange = [string, string];

export interface FormSubmitData {
  chartData: [number, number][];
  showChart: boolean;
  loading: boolean;
}
