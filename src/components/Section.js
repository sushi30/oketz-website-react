import React from "react";
import styled from "@material-ui/core/styles/styled";

const Section = styled(({ even, ...rest }) => <section {...rest} />)({
  background: props =>
    props.transparent ? "unset" : props.even ? "red" : "white"
});

export default Section;
