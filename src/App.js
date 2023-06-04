import React, { Component } from 'react'
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Sidebar from './components/NavbarComponent'
import { Home, Sukses } from './pages'
import AuthForm from './pages/AuthForm';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sukses" component={Sukses} exact />
            <Route path="/AuthForm" component={AuthForm}exact />
          </Switch>
        </main>
        <p>Created by : FuNick</p>
      </BrowserRouter>
    )
  }
};
