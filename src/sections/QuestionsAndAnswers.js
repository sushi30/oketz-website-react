import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";
import Section from "../components/Section";
import MyDivider from "../components/MyDivider";

const Question = ({ children }) => (
  <Typography variant="subtitle1" style={{fontWeight: 550}}>{children}</Typography>
);
const Answer = ({ children }) => (
  <Typography variant="subtitle1">{children}</Typography>
);

export default ({ even }) => (
  <Section even={even}>
    <MainContainer even={even}>
      <SectionTitle>שאלות ותשובות</SectionTitle>
      <MyDivider />
      <Question>מי מזמן אותי לגיבוש?</Question>
      <Answer variant="subtitle2">מיטב</Answer>
      <Question>אם לא הייתי בגדנע האם אני יכול להגיע לגיבוש?</Question>
      <Answer>לא, רק מי שהיה בגדנע יכול להגיע לגיבוש עוקץ</Answer>
      <Question>
        אם הייתי בגדנע הקודמת ועשיתי מכינה ואני רוצה לעשות גיבוש אני יכול?
      </Question>
      <Answer>
        היית צריך לעשות את הגיבוש בשנה שעברה, מקרים פרטניים יעברו לבחינה של מיטב
      </Answer>
    </MainContainer>
  </Section>
);
