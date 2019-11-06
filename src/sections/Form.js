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
    <MainContainer style={{ maxWidth: 800 }} even={even}>
      <Typography variant="h3">טופס הרשמה</Typography>
      <Formik
        onSubmit={({ values }) => {
          console.log(values);
        }}
        render={() => (
          <Form>
            <Grid container justify="space-evenly">
              <Grid item lg={6} xs={12}>
                <Field
                  name="name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      InputLabelProps={{ style: {textAlign: "right"} }}
                      margin="normal"
                      label="שם"
                      variant="outlined"
                      fullWidth
                      style={{ maxWidth: 340 }}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="email"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      label="כתובת מייל"
                      variant="outlined"
                      fullWidth
                      style={{ maxWidth: 340 }}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="tel"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      label="טלפון"
                      variant="outlined"
                      fullWidth
                      style={{ maxWidth: 340 }}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="id"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      label="מספר תעודת זהות (כולל ספרת ביקורת)"
                      variant="outlined"
                      fullWidth
                      style={{ maxWidth: 340 }}
                    />
                  )}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="gender"
                  render={({ field }) => (
                    <FormControl
                      component="fieldset"
                      style={{ maxWidth: 340 }}
                      variant="outlined"
                    >
                      <FormLabel component="legend" labelPlacement="top">
                        מין
                      </FormLabel>
                      <RadioGroup
                        {...field}
                        style={{ flexDirection: "row" }}
                        variant="outlined"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="נקבה"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="זכר"
                        />
                      </RadioGroup>
                    </FormControl>
                  )}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Field
                  name="grade"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      label="כיתה"
                      margin="normal"
                      fullWidth
                      style={{ maxWidth: 340 }}
                      variant="outlined"
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
              </Grid>
            </Grid>
          </Form>
        )}
      />
    </MainContainer>
  </section>
);
