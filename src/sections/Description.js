import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import MainContainer from "../SectionContainer";

export default ({ even }) => (
  <section>
    <MainContainer even={even}>
      <Typography variant="h3" style={{marginTop: 5, marginBottom: 30}}>תיאור הגדנ"ע</Typography>
      <Typography variant="body1">
        במהלך הגדנ"ע תזכו להנות מהזדמנות חד פעמית להציץ לעולמה של יחידה מיוחדת
        המשלבת לוחמה עם כלבים במהלך הגדנ"ע יתקיימו תצוגות תכלית של לוחמי וכלבי
        היחידה העוברים בהצלחה את הגדנ"ע יזכו לקבל זימון לגיבוש מלש"ב ליחידה -
        שיתקיים במרץ 2020 במידה ותעברו בהצלחה את גיבוש המלש"ב ליחידה, יובטח לכם
        על פי תנאי התאמתכם מקום בפתיחת מסלול לוחם עוקץ שים לב, זימונך לגיבוש
        מותנה בנתוניך האישיים והרפואיים שנקבעו לך בצו הראשון ההרשמה לגדנ"ע תיפתח
        לתלמידי כיתה י"א באפריל 2019
      </Typography>
      <Button variant="contained" color="primary">
        לטופס ההרשמה
      </Button>
    </MainContainer>
  </section>
);
