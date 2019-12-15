import styled from "@material-ui/core/styles/styled";
import Container from "@material-ui/core/Container";
import React from "react";

export default styled(({ even, ...rest }) => (
  <Container {...rest} maxWidth="xl" />
))({
  background: props => (props.even ? "red" : "white"),
  color: props => (props.even ? "white" : "black"),
  paddingTop: 20,
  paddingBottom: 20
});
