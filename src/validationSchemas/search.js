import * as yup from "yup";

const schema = yup
  .object({
    query: yup.string().required('Please enter something to search.'),
})

export default schema;