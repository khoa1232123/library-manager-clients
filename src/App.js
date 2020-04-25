import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import themeFile from "./util/theme";
import store from "./redux/store";
import Home from './pages/Home';
import { Provider } from 'react-redux';
import BooksPage from './pages/BooksPage';
import Navbar from './components/Navbar';
import './App.css';

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
          <Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/books" component={BooksPage} />
              </Switch>
            </div>
          </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
