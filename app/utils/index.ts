import { DateRange } from "../stock.interface";

/**
 * getDates - return a tuple of [1 year ago, today]
 * @returns {tuple} [aYearAgo, today]
 */

const getDates = (): DateRange => {
  let date = new Date();
  // format the day as yyyy-mm-dd
  const today = date.toISOString().split("T")[0];

  // set year to 1 year ago
  date.setFullYear(date.getFullYear() - 1);
  const aYearAgo = date.toISOString().split("T")[0];

  // 1 year ago, today
  return [aYearAgo, today];
};
