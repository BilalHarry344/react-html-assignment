import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must contain only alphabet characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  company: Yup.string(),
});
