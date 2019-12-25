import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import ListItemText from "@material-ui/core/ListItemText";
import MainContainer from "../SectionContainer";
import Section from "../components/Section";
import SectionTitle from "../SectionTitle";
import MyDivider from "../components/MyDivider";

export default ({ even }) => (
  <Section even={even}>
    <MainContainer even={even}>
      <SectionTitle>תאריכי הגדנ"ע</SectionTitle>
      <MyDivider />
      <List>
        <ListItem>
          <ListItemIcon>
            <CalendarIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary="הגנד&quot;ע תערך במהלך חודש מרץ 2020, תאריכים מדויקים יתעדכנו בהמשך"
            primaryTypographyProps={{ variant: "h5" }}
            style={{ textAlign: "right" }}
          />
        </ListItem>
      </List>
    </MainContainer>
  </Section>
);
