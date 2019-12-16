import styled from "@material-ui/core/styles/styled";
import Button from "@material-ui/core/Button";
import React from "react";

const StyledButton = styled(({ children, ...rest }) => (
  <Button variant="contained" size="large" color="primary" {...rest}>
    {children}
  </Button>
))({
  borderRadius: 50,
  fontWeight: 510
});

export default StyledButton;
