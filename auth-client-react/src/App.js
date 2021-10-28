import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PrivateRout from "./routes/PrivateRout";
import LoginForm from "./containers/LoginPage/Login";
import "./App.css";
import theme from "./theme/theme";

function App() {
  const whiteMod = createTheme(theme);
  return (
    <div className="App">
      <ThemeProvider theme={whiteMod}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <PrivateRout
              exact
              path="/"
              // component={}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

