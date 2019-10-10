import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CalendarIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import bg1 from "./images/bg1.jpeg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Body = () => (
  <div>
    <div style={{position: "fixed"}}>
      <Carousel showThumbs={false} showIndicators={false}>
        <div>
          <img src={bg1} style={{width: "80%"}}/>
        </div>
      </Carousel>
    </div>
    <Container style={{ minHeight: 600 }}>VIDEO</Container>
    <Container>
      <Typography variant="h1" style={{ textAlign: "center" }}>
        גדנ"ע עוקץ 2019
      </Typography>
      <Typography variant="h4">ההרשמה פתוחה</Typography>
      <Button variant="contained" color="primary">
        הרשמה
      </Button>
    </Container>
    <Container>
      <Typography variant="h3">תיאור הגדנ"ע</Typography>
      <Typography variant="p">
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
    </Container>
    <Container>
      <Typography variant="h3">תאריכי הגדנ"ע</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CalendarIcon />
          </ListItemIcon>
          <ListItemText primary="18-20/9" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CalendarIcon />
          </ListItemIcon>
          <ListItemText primary="23-25/9" />
        </ListItem>
      </List>
    </Container>
    <Container>
      <Typography variant="h3">תנאי קבלה</Typography>
      <Typography variant="p">
        במידה והנתונים האישיים הרפואיים שנקבעו לך בצו ראשון עומדים בסף הקבלה
        ללוחם בעוקץ, תזומן לאחר הרשמתך ליום הכנה, הכולל היכרות ראשונית עם היחידה
        והסבר על מסלול המיון, ההכשרה והשירות כלוחמ/ת ביחידת עוקץ במידה ויש לך את
        התכונות - יוזמה, מנהיגות, עצמאות, אחראיות, נחישות, יחסי אנוש ויכולת
        עמידה מול קהל מקומך איתנו
      </Typography>
    </Container>
    <Container>
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
    </Container>
    <Container>PORTFOLIO</Container>
    <Container>FORM</Container>
  </div>
);

export default Body;
