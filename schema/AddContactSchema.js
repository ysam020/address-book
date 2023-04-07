import * as yup from "yup";

const contactRegex = /^\d{10}$/;

export const validationSchema = yup.object({
  name: yup.string("Enter name").required("Name is required"),
  contact: yup
    .string("Enter contact number")
    .required("Contact number is required")
    .matches(contactRegex, "Inavlid contact number"),
});
