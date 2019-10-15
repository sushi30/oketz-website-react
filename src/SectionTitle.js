import styled from "@material-ui/core/styles/styled";
import Container from "@material-ui/core/Container";
import React from "react";
import { Typography } from "@material-ui/core";

export default styled(({ even, ...rest }) => <Typography {...rest} />)({
  background: props => (props.even ? "red" : "white"),
  color: props => (props.even ? "white" : "black"),
  paddingTop: 20,
  paddingBottom: 20,
  width: "100%"
});
