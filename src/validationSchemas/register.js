import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email is invalid.").required('Please enter your email address.'),
    password: yup.string().required("Please enter your password.").min(8, "Password must be between 8 and 50 characters."),
    confirm_password: yup.string().required("Please re-enter your password for confirmation.").oneOf([yup.ref('password'), null], 'Password doesn\'t match.'),
    code: yup.string().required("Please enter the verification code."),
    confirm: yup.string().required("Please check the checkbox to continue.")
})

export default schema;