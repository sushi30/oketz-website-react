import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";

export default ({ even }) => (
  <section>
    <MainContainer even={even}>
      <Typography variant="h3">טופס הרשמה</Typography>
      <Formik
        onSubmit={({ values }) => {
          console.log(values);
        }}
        render={() => (
          <Form>
            <Grid container>
              <Grid item xs={4}>
                <Field
                  name="name"
                  render={({ field }) => (
                    <TextField {...field} margin="normal" label="שם" />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="email"
                  render={({ field }) => (
                    <TextField {...field} margin="normal" label="כתובת מייל" />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="tel"
                  render={({ field }) => (
                    <TextField {...field} margin="normal" label="טלפון" />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="id"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      margin="normal"
                      label="מספר תעודת זהות (כולל ספרת ביקורת)"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Field
                  name="gender"
                  render={({ field }) => (
                    <FormControl
                      component="fieldset"
                      variant="outlined"
                      style={{ display: "inline-block" }}
                    >
                      <FormLabel component="legend">מין</FormLabel>
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
              </Grid>
              <Grid item xs={6}>
                <Field
                  name="grade"
                  render={({ field }) => (
                    <TextField {...field} select label="כיתה" margin="normal">
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
              </Grid>
            </Grid>
          </Form>
        )}
      />
    </MainContainer>
  </section>
);
