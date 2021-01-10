import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Product from "./components/product/product";
import Header from "./components/header/header";

import "./App.css";

const _theme = {
  light: {
    primaryBackground: "#FFFFFF",
    textColor: "#000000",
  },
  dark: {
    primaryBackground: "#000000",
    textColor: "#FFFFFF",
  },
  medium: {
    small: "0.8em",
    text: "1em",
    title: "2em",
    selectTitle: "1.2em",
  },
  small: {
    small: "0.5em",
    text: "0.8em",
    title: "1.5em",
    selectTitle: "1em",
  },
  large: {
    small: "1em",
    text: "1.2em",
    title: "2.4em",
    selectTitle: "1.5em",
  },
};

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `;

function App() {
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("medium");

  return (
    <Router>
      <ThemeProvider theme={{ ..._theme[theme], ..._theme[font] }}>
        <GlobalStyles />
        <div className="App">
          <Header setTheme={setTheme} setFont={setFont} />
          <Switch>
            <Route path="/:id" exact component={Product} />
            <Redirect from="/" to="/1K000006" />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
