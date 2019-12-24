import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import Section from "../components/Section";
import MyDivider from "../components/MyDivider";
import StyledButton from "../components/CallToAction";
import withStyles from "@material-ui/core/styles/withStyles";
import { blueGrey } from "@material-ui/core/colors";

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
      <Typography variant="subtitle1">
        במהלך הגדנ"ע תזכו להנות מהזדמנות חד פעמית להציץ לעולמה של יחידה מיוחדת
        המשלבת לוחמה עם כלבים
      </Typography>
      <Typography variant="subtitle1">
        העוברים בהצלחה את הגדנ"ע יזכו לקבל זימון לגיבוש מלש"ב ליחידה שיתקיים
        במרץ 2021
      </Typography>
      <Typography variant="subtitle1">
        במידה ותעברו בהצלחה את גיבוש המלש"ב ליחידה, יובטח לכם, על פי תנאי
        התאמתכם, שיבוץ בפתיחת מסלול לוחם עוקץ
      </Typography>
      <Typography variant="subtitle1">
        שים לב, זימונך לגיבוש{" "}
        <b>מותנה בנתוניך האישיים והרפואיים שנקבעו לך בצו הראשון</b>
      </Typography>
      <Typography variant="subtitle1">
        ההרשמה לגדנ"ע תיפתח לתלמידי כיתה י"א באפריל 2020
      </Typography>
      <MyDivider />
      <CallToAction onClick={action}>לטופס ההרשמה</CallToAction>
    </MainContainer>
  </Section>
);
