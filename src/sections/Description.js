import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import MainContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import Section from "../components/Section";
import Divider from "@material-ui/core/Divider";
import MyDivider from "../components/MyDivider";

const lines = [
  'במהלך הגדנ"ע תזכו להנות מהזדמנות חד פעמית להציץ לעולמה של יחידה מיוחדתהמשלבת לוחמה עם כלבים',
  'במהלך הגדנ"ע יתקיימו תצוגות תכלית של לוחמי וכלבי היחידה',
  'העוברים בהצלחה את הגדנ"ע יזכו לקבל זימון לגיבוש מלש"ב ליחידה שיתקיים במרץ 2021',
  'ותעברו בהצלחה את גיבוש המלש"ב ליחידה, יובטח לכם שיבוץ על פי תנאי התאמתכם מקום בפתיחת מסלול לוחם עוקץ',
  "שים לב, זימונך לגיבוש מותנה בנתוניך האישיים והרפואיים שנקבעו לך בצו הראשון",
  'ההרשמה לגדנ"ע תיפתח לתלמידי כיתה י"א באפריל 2020'
];

export default ({ even }) => (
  <Section even={even}>
    <MainContainer even={even}>
      <SectionTitle>תיאור הגדנ"ע</SectionTitle>
      <MyDivider />
      {lines.map(line => (
        <Typography variant="subtitle1">{line}</Typography>
      ))}
      <Button variant="contained" color="primary" style={{ marginTop: 30 }}>
        לטופס ההרשמה
      </Button>
    </MainContainer>
  </Section>
);
