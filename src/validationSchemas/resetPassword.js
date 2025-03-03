import * as yup from "yup";

const schema = yup
  .object({
    password: yup.string().required("Please enter your password.").min(8, "Password must be between 8 and 50 characters."),
    confirm_password: yup.string().required("Please re-enter your password for confirmation.").oneOf([yup.ref('password'), null], 'Password doesn\'t match.'),
  })

export default schema;