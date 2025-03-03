import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email is invalid.").required('Please enter your email address.'),
    code: yup.string().required("Please enter the verification code.")
})

export default schema;