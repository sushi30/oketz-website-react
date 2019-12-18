import React from "react";
import BaseDialog from "./BaseDialog";

const SubmitSuccessDialog = ({ open, handleClose }) => (
  <BaseDialog
    title="השרמתך נקלטה"
    content={`הרשמתך לגדנע עוקץ התקבלה בהצלחה. אישור הרשמה עם הוראות להשמך יישלח במייל.`}
    open={open}
    handleClose={handleClose}
  />
);

export default SubmitSuccessDialog;
