import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider, Container } from "@material-ui/core";
import themeFile from "./util/theme";
import store from "./redux/store";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import Books from "./pages/Books";
import Borrowers from "./pages/Borrowers";
import Navbar from "./components/Navbar";
import "./App.css";
import BorrowBooks from "./pages/BorrowBooks";

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
                <Route exact path="/borrowers" component={Borrowers} />
                <Route exact path="/borrowBooks" component={BorrowBooks} />
              </Switch>
            </div>
          </Container>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
