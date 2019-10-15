import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import MainContainer from "../SectionContainer";

export default ({ even }) => (
  <section>
    <MainContainer even={even}>
      <Typography variant="h3">תנאי קבלה</Typography>
      <Typography variant="p">
        במידה והנתונים האישיים הרפואיים שנקבעו לך בצו ראשון עומדים בסף הקבלה
        ללוחם בעוקץ, תזומן לאחר הרשמתך ליום הכנה, הכולל היכרות ראשונית עם היחידה
        והסבר על מסלול המיון, ההכשרה והשירות כלוחמ/ת ביחידת עוקץ במידה ויש לך את
        התכונות - יוזמה, מנהיגות, עצמאות, אחראיות, נחישות, יחסי אנוש ויכולת
        עמידה מול קהל מקומך איתנו
      </Typography>
    </MainContainer>
  </section>
);
