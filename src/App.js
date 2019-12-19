import React from "react";
import Body from "./Body";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";
import NavBar from "./components/NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import MobileNavBar from "./components/MobileNavBar";

function App() {
  const mobile = useMediaQuery("(max-width:800px)");

  return (
    <body dir="rtl">
      <div className="App">
        <ThemeProvider theme={theme}>
          {mobile ? <MobileNavBar /> : <NavBar />}
          <Body />
        </ThemeProvider>
      </div>
    </body>
  );
}

export default App;
