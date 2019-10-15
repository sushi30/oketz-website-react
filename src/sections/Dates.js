import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import ListItemText from "@material-ui/core/ListItemText";

export default () => (
  <section>
    <Container>
      <Typography variant="h3">תאריכי הגדנ"ע</Typography>
      <Container style={{ maxWidth: 200 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary="18-20/9" style={{ textAlign: "right" }} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CalendarIcon />
            </ListItemIcon>
            <ListItemText primary="23-25/9" style={{ textAlign: "right" }} />
          </ListItem>
        </List>
      </Container>
    </Container>
  </section>
);
