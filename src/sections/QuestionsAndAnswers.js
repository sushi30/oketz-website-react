import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";

export default ({ even }) => (
  <section>
    <MainContainer even={even}>
      <Typography variant="h3">שאלות ותשובות</Typography>
      <Typography variant="subtitle1">מי מזמן אותי לגיבוש?</Typography>
      <Typography variant="subtitle2">מיטב</Typography>
      <Typography variant="subtitle1">
        אם לא הייתי בגדנע האם אני יכול להגיע לגיבוש?
      </Typography>
      <Typography variant="subtitle2">
        לא, רק מי שהיה בגדנע יכול להגיע לגיבוש עוקץ
      </Typography>
      <Typography variant="subtitle1">
        אם הייתי בגדנע הקודמת ועשיתי מכינה ואני רוצה לעשות גיבוש אני יכול?
      </Typography>
      <Typography variant="subtitle2">
        היית צריך לעשות את הגיבוש בשנה שעברה, מקרים פרטניים יעברו לבחינה של מיטב
      </Typography>
    </MainContainer>
  </section>
);
