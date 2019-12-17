import React from "react";
import BaseDialog from "./BaseDialog";

const IntroDialog = ({ open, handleClose }) => (
  <BaseDialog
    title="שימו לב"
    content={`גדנ"ע עוקץ השנה ייפתח לבנים בלבד. תאריכי הגדנע יפורסמו בהמשך`}
    open={open}
    handleClose={handleClose}
  />
);

export default IntroDialog;
