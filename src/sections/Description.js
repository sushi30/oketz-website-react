import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import Section from "../components/Section";
import MyDivider from "../components/MyDivider";
import StyledButton from "../components/CallToAction";
import withStyles from "@material-ui/core/styles/withStyles";
import { blueGrey } from "@material-ui/core/colors";

const lines = [
  'במהלך הגדנ"ע תזכו להנות מהזדמנות חד פעמית להציץ לעולמה של יחידה מיוחדתהמשלבת לוחמה עם כלבים',
  'במהלך הגדנ"ע יתקיימו תצוגות תכלית של לוחמי וכלבי היחידה',
  'העוברים בהצלחה את הגדנ"ע יזכו לקבל זימון לגיבוש מלש"ב ליחידה שיתקיים במרץ 2021',
  'ותעברו בהצלחה את גיבוש המלש"ב ליחידה, יובטח לכם שיבוץ על פי תנאי התאמתכם מקום בפתיחת מסלול לוחם עוקץ',
  "שים לב, זימונך לגיבוש מותנה בנתוניך האישיים והרפואיים שנקבעו לך בצו הראשון",
  'ההרשמה לגדנ"ע תיפתח לתלמידי כיתה י"א באפריל 2020'
];

const CallToAction = withStyles(theme => ({
  root: {
    background: blueGrey[50]
  },
  label: { color: theme.palette.text.primary }
}))(StyledButton);

export default ({ even, action }) => (
  <Section even={even}>
    <MainContainer even={even}>
      <SectionTitle>תיאור הגדנ"ע</SectionTitle>
      <MyDivider />
      {lines.map(line => (
        <Typography variant="subtitle1">{line}</Typography>
      ))}
      <MyDivider />
      <CallToAction onClick={action}>לטופס ההרשמה</CallToAction>
    </MainContainer>
  </Section>
);
