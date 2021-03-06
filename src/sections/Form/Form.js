import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../../SectionContainer";
import TextField from "@material-ui/core/TextField";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Section from "../../components/Section";
import SectionTitle from "../../SectionTitle";
import MyDivider from "../../components/MyDivider";
import StyledButton from "../../components/CallToAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import validation from "./validation";
import initialValues from "./initialValues";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  inputLabelRoot: {
    color: theme.palette.text.primary
  },
  formControl: { left: "unset", right: 18 },
  input: {
    backgroundColor: theme.palette.secondary[50],
    color: theme.palette.text.primary[800]
  },
  icon: { position: "unset" },
  radioLabel: { color: theme.palette.text.primary },
  buttonProgress: {
    color: theme.palette.secondary[100],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  section: {
    "@media (max-width: 800px)": {
      marginBottom: theme.spacing(2)
    }
  }
}));

const helperTextStyles = makeStyles(
  theme => ({
    root: {
      textAlign: "right",
      "&$error": {
        color: theme.palette.common.black
      }
    },
    error: {}
  }),
  { name: "MuiFormHelperText" }
);

const MyTextField = props => (
  <TextField
    margin="normal"
    fullWidth
    InputLabelProps={{
      classes: {
        formControl: props.classes.formControl,
        root: props.classes.inputLabelRoot
      }
    }}
    InputProps={{ classes: { input: props.classes.input } }}
    variant="outlined"
    {...props.field}
    {...props}
  />
);

const MyGridItem = ({ children }) => (
  <Grid item xs={12} md={6} style={{ paddingLeft: 20, paddingRight: 20 }}>
    {children}
  </Grid>
);

export default ({
  even,
  handleSubmit,
  handleSubmitError,
  handleSubmitSuccess
}) => {
  const classes = useStyles();
  helperTextStyles();
  return (
    <Section even={even} className={classes.section}>
      <MainContainer even={even}>
        <SectionTitle>טופס הרשמה</SectionTitle>
        <MyDivider />
        <Formik
          validationSchema={validation}
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            await handleSubmit(values)
              .then(res => handleSubmitSuccess(res))
              .catch(e => {
                console.log(e);
                handleSubmitError(e);
              })
              .finally(() => actions.setSubmitting(false));
          }}
          render={({ isSubmitting, errors, touched, values }) => {
            console.log({ errors: errors, touched: touched, values });
            const errorMessage = k => ({
              error: touched[k] && errors[k],
              helperText: touched[k] && errors[k]
            });
            return (
              <Form>
                <Grid container>
                  <MyGridItem>
                    <Field
                      name="name"
                      render={({ field }) => (
                        <MyTextField
                          disabled={isSubmitting}
                          helperText={errors.name}
                          {...errorMessage(field.name)}
                          {...field}
                          classes={classes}
                          label="שם מלא"
                        />
                      )}
                    />
                  </MyGridItem>
                  <MyGridItem>
                    <Field
                      name="email"
                      render={({ field }) => (
                        <MyTextField
                          {...field}
                          disabled={isSubmitting}
                          {...errorMessage(field.name)}
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
                        <MyTextField
                          disabled={isSubmitting}
                          {...errorMessage(field.name)}
                          {...field}
                          classes={classes}
                          label="טלפון"
                        />
                      )}
                    />
                  </MyGridItem>
                  <MyGridItem>
                    <Field
                      name="id"
                      render={({ field }) => (
                        <MyTextField
                          {...field}
                          disabled={isSubmitting}
                          {...errorMessage(field.name)}
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
                        <div>
                          <FormControl
                            disabled={isSubmitting}
                            component="fieldset"
                            variant="outlined"
                            style={{
                              flexDirection: "row",
                              display: "flex"
                            }}
                          >
                            <div>
                              <Typography
                                color="textSecondary"
                                component="legend"
                                className={classes.radioLabel}
                              >
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
                            <ErrorMessage
                              name={field.name}
                              render={errorMessage1 => (
                                <FormHelperText
                                  error
                                  style={{ marginRight: 30 }}
                                >
                                  {errorMessage1}
                                </FormHelperText>
                              )}
                            />
                          </FormControl>
                        </div>
                      )}
                    />
                  </MyGridItem>
                  <MyGridItem>
                    <Field
                      name="grade"
                      render={({ field }) => (
                        <TextField
                          {...field}
                          {...errorMessage(field.name)}
                          InputLabelProps={{
                            classes: {
                              formControl: classes.formControl,
                              root: classes.inputLabelRoot
                            }
                          }}
                          InputProps={{
                            classes: { input: classes.input }
                          }}
                          disabled={isSubmitting}
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
                  <MyGridItem>
                    <Field
                      name="gapYear"
                      render={({ field }) => (
                        <div>
                          <FormControlLabel
                            {...field}
                            {...errorMessage(field.name)}
                            disabled={isSubmitting}
                            component="fieldset"
                            variant="outlined"
                            control={<Checkbox {...field} color="primary" />}
                            label="מתכנן להצע שנת שירות"
                          />
                        </div>
                      )}
                    />
                  </MyGridItem>
                </Grid>
                <div className={classes.wrapper}>
                  <StyledButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                  >
                    שלח
                  </StyledButton>
                  {isSubmitting && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </Form>
            );
          }}
        />
      </MainContainer>
    </Section>
  );
};
