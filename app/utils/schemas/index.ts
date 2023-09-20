import * as Yup from "yup";

export const stockValidationSchema = Yup.object().shape({
  totalInvestment: Yup.number()
    .required("Total Investment is required")
    .typeError("Total Investment must be a valid number"),
  stockList: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .required("Stock Symbol is required")
        .typeError("Stock Symbol must be a string"),
      weight: Yup.number()
        .required("Weight is required")
        .typeError("Weight must be a number")
        .min(0, "Weight cannot be less than 0")
        .max(100, "Weight cannot be greater than 100"),
    })
  ),
});
