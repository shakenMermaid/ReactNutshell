import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom'
import './App.css';
import MessagesApp from './Messages/MessagesApp'
import Login from "./Login/login"
import NavBar from "./NavBar/NavBar"


class App extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br></br>
        <br></br>
        <Route path="/" component={Login} />
        <Route path="/messages" render={() => {
              if (this.isAuthenticated()) {
                return <MessagesApp />
            } else {
                return <Redirect to="/" />
            }
        }} />
      </React.Fragment>

    )
}
}
export default App

