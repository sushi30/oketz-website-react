import * as Yup from "yup";
import { validateId } from "../../js/utils";

export default Yup.object().shape({
  name: Yup.string()
    .min(5, "השם קצר מדי")
    .matches(/[\u05D0-\u05EA ]/, "נא להזין תווים בעברית בלבד")
    .required("שדה חובה"),
  email: Yup.string()
    .email("כתובת מייל לא תקינה")
    .required("שדה חובה"),
  tel: Yup.string()
    .length(10, "נא להזין 10 ספרות")
    .matches(/\d+/, "נא להזין מספאים בלבד")
    .required("שדה חובה"),
  id: Yup.string()
    .length(9, "יש להזין 9 ספרות")
    .matches(/\d+/, "יש להזין ספרות בלבד")
    .test("valid-id", "מספר זהות לא תקין", validateId)
    .required("שדה חובה"),
  grade: Yup.number("שדה חובה")
    .oneOf([11, 12], "שדה חובה")
    .required("שדה חובה"),
  gender: Yup.string()
    .oneOf(["male"], "גדנע עוקץ פתוח השנה לגברים בלבד")
    .required("שדה חובה"),
  gapYear: Yup.boolean()
});
