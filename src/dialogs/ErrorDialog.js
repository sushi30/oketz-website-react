import React from "react";
import BaseDialog from "./BaseDialog";

const ErrorDialog = ({ open, handleClose }) => (
  <BaseDialog
    title="תקלה"
    content={`הפעולה לא הצליחה. נא לנסות שוב מאוחר יותר.`}
    open={open}
    handleClose={handleClose}
  />
);

export default ErrorDialog;
