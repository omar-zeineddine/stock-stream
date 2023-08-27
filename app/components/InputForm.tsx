import React from "react";
import { Formik, Field, FieldArray, Form } from "formik";
import axios from "axios";
import { DateRange, Investment } from "../stock.interface";
import { getDates, singularStockData } from "../utils";

const totalInvestment: number = 1000000; // 10,000 USD in cents

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

  // console.log({ allStockDataResp });

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

type Props = {
  setChartData: React.Dispatch<React.SetStateAction<[number, number][]>>;
};

const InputForm: React.FC<Props> = (props: Props) => {
  const initialValues: Investment[] = [{ name: "", weight: 0 }];
  const [chartData, setChartData] = React.useState<[number, number][]>([]);

  /* const handleAddStock = (values: Investment[]) => {
    if (values.length < 5) {
      values.push({ stock: "", weight: 0 });
    }
  }; */

  const generateStockHistory = async (values: Investment[]) => {
    const res = await getStockHistory(values, totalInvestment);
    setChartData(res);
    props.setChartData(res);
  };

  return (
    <Formik
      initialValues={{ stockList: initialValues }}
      onSubmit={(values) => {
        generateStockHistory(values.stockList);
      }}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="stockList">
            {({ remove, push }) => (
              <>
                <div className="w-1/2 grid gap-4 mb-6 md:grid-cols-2 p-4 mx-auto rounded-lg dark:bg-gray-900 dark:border-gray-700">
                  {values.stockList.map((_, index) => (
                    <>
                      <div key={index}>
                        <label
                          htmlFor={`stock-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Stock
                        </label>
                        <Field
                          type="text"
                          id={`stock-${index}`}
                          name={`stockList[${index}].name`}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Symbol"
                          required
                        />
                      </div>
                      <div className="">
                        <label
                          htmlFor={`weight-${index}`}
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Weight
                        </label>
                        <div className="flex">
                          <Field
                            type="text"
                            id={`weight-${index}`}
                            name={`stockList[${index}].weight`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="%"
                            required
                          />

                          {values.stockList.length > 1 && (
                            <div className="flex items-center justify-center mt-2">
                              <button
                                type="button"
                                className="ml-2 px-3 py-1 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-800"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-4">
                  {values.stockList.length < 5 && (
                    <button
                      type="button"
                      className="ml-2 px-3 py-1 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-800"
                      onClick={() => push({ name: "", weight: 0 })}
                    >
                      +
                    </button>
                  )}

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
