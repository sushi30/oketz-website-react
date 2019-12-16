import styled from "@material-ui/core/styles/styled";
import Container from "@material-ui/core/Container";
import React from "react";

export default styled(({ even, ...rest }) => (
  <Container maxWidth="md" {...rest} />
))({
  color: "black",
  paddingTop: props => (props.noPadding ? 0 : 32),
  paddingBottom: props => (props.noPadding ? 0 : 32)
});
