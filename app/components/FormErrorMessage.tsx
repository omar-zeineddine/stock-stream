import React, { useState } from "react";

interface FormErrorMessageProps {
  status: string;
}

function FormErrorMessage({ status }: FormErrorMessageProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className="bg-red-100 border border-red-400 text-red-500 px-4 py-3 rounded relative w-1/2 mx-auto mb-6"
        role="alert"
      >
        <strong className="font-semibold">{status}</strong>
        <span
          onClick={handleClose}
          className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        >
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 5.652a.5.5 0 0 1 0 .707L9.707 10l4.641 4.641a.5.5 0 0 1-.707.707L9 10.707l-4.641 4.641a.5.5 0 0 1-.707-.707L8.293 10 3.652 5.359a.5.5 0 0 1 .707-.707L9 9.293l4.641-4.641a.5.5 0 0 1 .707 0z" />
          </svg>
        </span>
      </div>
    )
  );
}

export default FormErrorMessage;
