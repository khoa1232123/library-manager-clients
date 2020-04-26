import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider, Container } from "@material-ui/core";
import themeFile from "./util/theme";
import store from "./redux/store";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import "./App.css";

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
          <Navbar />
          <Router>
            <Container>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/books" component={Books} />
                </Switch>
              </div>
            </Container>
          </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
