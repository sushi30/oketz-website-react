import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import blueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Assistant",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    primary: red,
    secondary: blueGrey,
    text: { primary: "#212121", secondary: "#eceff1" },
    divider: "#212121"
  }
});

export default theme;
