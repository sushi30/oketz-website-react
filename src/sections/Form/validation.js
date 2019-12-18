import Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(5, "השם קצר מדי")
    .required("נא להזין שם"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});
