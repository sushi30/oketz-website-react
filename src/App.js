import React from "react";
import Body from "./Body";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";

function App() {
  return (
    <body dir="rtl">
      <div className="App">
        <ThemeProvider theme={theme}>
          <Body />
        </ThemeProvider>
      </div>
    </body>
  );
}

export default App;
