import styled from "@material-ui/core/styles/styled";
import Container from "@material-ui/core/Container";
import React from "react";

export default styled(({ even, transparent, ...rest }) => (
  <Container {...rest} maxWidth="m" />
))({
  background: props =>
    props.transparent ? null : props.even ? "red" : "white",
  color: props => (props.even ? "white" : "black"),
  paddingTop: 100,
  paddingBottom: 100,
  width: "100%"
});
