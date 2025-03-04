import * as yup from "yup";

const schema = yup
  .object({
    author: yup.string().required('Author is required.'),
    description: yup.string().required("Description is required").min(20, "Description should be at least 20 characters."),
})

export default schema;