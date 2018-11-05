import React, { Component } from 'react';
import { Router, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import theme from './Components/theme/theme';
import Dashboard from './Components/Dashboard/Dashboard';
import Main from './Components/Main/Main'
import Monitor from './Components/Monitor/Monitor';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Main>
            <Route path="/" component={Dashboard} exact />
            <Route path="/:place" component={Monitor}/>
          </Main>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
