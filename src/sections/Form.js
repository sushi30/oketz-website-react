import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Section from "../components/Section";

const useStyles = makeStyles({
  formControl: { left: "unset" },
  icon: { position: "unset" }
});

const MyTextField = props => (
  <TextField
    {...props.field}
    InputLabelProps={{
      classes: { formControl: props.classes.formControl }
    }}
    {...props}
    margin="normal"
    fullWidth
  />
);

const MyGridItem = ({ children }) => (
  <Grid item xs={6} style={{ paddingLeft: 20, paddingRight: 20 }}>
    {children}
  </Grid>
);

export default ({ even }) => {
  const classes = useStyles();
  return (
    <Section even={even}>
      <MainContainer even={even}>
        <Typography variant="h3">טופס הרשמה</Typography>
        <Formik
          onSubmit={({ values }) => {
            console.log(values);
          }}
          render={() => (
            <Form>
              <Grid container>
                <MyGridItem>
                  <Field
                    name="name"
                    render={({ field }) => (
                      <MyTextField {...field} classes={classes} label="שם" />
                    )}
                  />
                </MyGridItem>
                <MyGridItem>
                  <Field
                    name="email"
                    render={({ field }) => (
                      <MyTextField
                        {...field}
                        classes={classes}
                        label="כתובת מייל"
                      />
                    )}
                  />
                </MyGridItem>
                <MyGridItem>
                  <Field
                    name="tel"
                    render={({ field }) => (
                      <MyTextField {...field} classes={classes} label="טלפון" />
                    )}
                  />
                </MyGridItem>
                <MyGridItem>
                  <Field
                    name="id"
                    render={({ field }) => (
                      <MyTextField
                        {...field}
                        classes={classes}
                        label="מספר תעודת זהות (כולל ספרת ביקורת)"
                      />
                    )}
                  />
                </MyGridItem>
                <MyGridItem>
                  <Field
                    name="gender"
                    render={({ field }) => (
                      <FormControl
                        component="fieldset"
                        variant="outlined"
                        style={{
                          flexDirection: "row",
                          display: "flex"
                        }}
                      >
                        <div>
                          <Typography color="textSecondary" component="legend">
                            מין
                          </Typography>
                        </div>
                        <RadioGroup
                          {...field}
                          style={{ display: "inline-block" }}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="נקבה"
                          />
                          <FormControlLabel
                            style={{ display: "inline-block" }}
                            value="male"
                            control={<Radio />}
                            label="זכר"
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </MyGridItem>
                <MyGridItem>
                  <Field
                    name="grade"
                    render={({ field }) => (
                      <TextField
                        InputLabelProps={{
                          classes: { formControl: classes.formControl }
                        }}
                        {...field}
                        select
                        SelectProps={{
                          classes: { icon: classes.icon }
                        }}
                        style={{ minWidth: 100 }}
                        label="כיתה"
                        margin="normal"
                      >
                        {[
                          { label: "יא", value: "11" },
                          { label: "יב", value: "12" }
                        ].map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </MyGridItem>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                שלח
              </Button>
            </Form>
          )}
        />
      </MainContainer>
    </Section>
  );
};
