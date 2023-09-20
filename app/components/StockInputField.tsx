import { Field, ErrorMessage } from "formik";

const StockInputField = ({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) => (
  <div key={index} className="flex justify-around ">
    <div>
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
      />
      <div>
        <ErrorMessage
          name={`stockList[${index}].name`}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
    <div className={`${index === 0 ? "mr-10" : ""}`}>
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
          className="bg-gray-50 mr-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="%"
        />

        {index > 0 && (
          <div className="mt-1">
            <button
              type="button"
              className="ml-2  px-3 py-1 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              onClick={() => onRemove()}
            >
              X
            </button>
          </div>
        )}
      </div>

      <div>
        <ErrorMessage
          name={`stockList[${index}].weight`}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  </div>
);

export default StockInputField;
