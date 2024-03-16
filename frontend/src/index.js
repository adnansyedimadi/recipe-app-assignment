import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { hot } from "react-hot-loader";
import Home from "./Containers/Home";
import reducers from "./reducers";
import Recipe from "./Containers/Recipe";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      main: '#e3f2fd'
    },
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe/:id?" component={Recipe} />
          <Route path="/:term?/:ingredients?" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>
);

const HotApp = hot(module)(App);

ReactDOM.render(<HotApp />, document.getElementById("home"));
