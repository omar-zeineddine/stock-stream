import React, { useState } from "react";
import {
  Formik,
  FieldArray,
  Form,
  FieldArrayRenderProps,
  Field,
  ErrorMessage,
} from "formik";
import StockInputField from "@/app/components/StockInputField";
import { Investment } from "@/app/stock.interface";
import axios from "axios";
import { stockValidationSchema } from "@/app/utils/schemas/index";
import FormErrorMessage from "@/app/components/FormErrorMessage";
import { FormSubmitData } from "@/app/stock.interface";

interface InputFormProps {
  onSubmit: (data: FormSubmitData) => void;
}

const InputForm = ({ onSubmit }: InputFormProps) => {
  const initialValues: Investment[] = [{ name: "", weight: 0 }];
  const [message, setMessage] = useState("");

  const generateStockHistory = async (
    values: Investment[],
    totalInvestment: string
  ) => {
    setMessage("");
    onSubmit({
      loading: true,
      chartData: [],
      showChart: false,
    });
    try {
      let investmentAmount = parseFloat(totalInvestment);
      // convert the number to USD amount in cents
      investmentAmount = investmentAmount * 100;

      const response = await axios.post("/api/stock-history", {
        investment: values,
        amount: isNaN(investmentAmount) ? 0 : investmentAmount,
      });
      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }
      const data = response.data;
      if (data.success === true && data.code === 200) {
        onSubmit({
          chartData: data.stockHistory,
          showChart: true,
          loading: false,
        });
      } else {
        setMessage(data.message);
        onSubmit({
          chartData: [],
          showChart: false,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ stockList: initialValues, totalInvestment: "" }}
        validationSchema={stockValidationSchema}
        onSubmit={(values, { setStatus }) => {
          const invalidInvestments = values.stockList.some(
            (stock) => stock.name === "" || stock.weight < 0
          );
          const totalWeight = values.stockList.reduce(
            (sum, stock) => sum + Number(stock.weight),
            0
          );
          if (invalidInvestments) {
            setStatus(
              "Invalid investments: Please provide valid stock symbols and non-negative weights."
            );
          } else if (totalWeight !== 100) {
            setStatus("Total weight should be equal to 100.");
          } else {
            setStatus("");
            generateStockHistory(values.stockList, values.totalInvestment);
          }
        }}
      >
        {({ values, setValues, status }) => (
          <Form>
            {status && <FormErrorMessage status={status} />}
            <FieldArray name="stockList">
              {({ remove, push }: FieldArrayRenderProps) => (
                <>
                  <div className="w-1/2 flex flex-col gap-3 mb-6 p-4 mx-auto rounded-lg dark:bg-gray-900 dark:border-gray-700">
                    <div className="mx-auto max-w-1/2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Total Investment
                      </label>

                      <Field
                        type="text"
                        id="totalInvestment"
                        name="totalInvestment"
                        className="bg-gray-50 mr-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        value={values.totalInvestment}
                        placeholder="USD $"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setValues({
                            ...values,
                            totalInvestment: e.target.value,
                          });
                        }}
                      />
                      <div>
                        <ErrorMessage
                          name="totalInvestment"
                          component="div"
                          className="text-red-500 text-sm mt-1 mr-20"
                        />
                      </div>
                    </div>

                    {values.stockList.map((_, index) => (
                      <StockInputField
                        key={index}
                        index={index}
                        onRemove={() => remove(index)}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    {values.stockList.length < 5 && (
                      <button
                        type="button"
                        className="ml-2 px-3 py-1 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        onClick={() => push({ name: "", weight: 0 })}
                      >
                        +
                      </button>
                    )}

                    <button
                      type="submit"
                      className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Analyze
                    </button>
                  </div>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
      <div className="space-y-4 mt-4 text-center text-black">
        {message && <p className="text-red-400">{message}</p>}
      </div>
    </>
  );
};

export default InputForm;
