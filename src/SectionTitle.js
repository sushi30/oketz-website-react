import styled from "@material-ui/core/styles/styled";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default styled(({ even, transparent, ...rest }) => (
  <Typography {...rest} variant="h3" s />
))({
  marginBottom: 30
});
