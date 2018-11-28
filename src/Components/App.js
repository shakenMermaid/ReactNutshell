import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar"
import ApplicationView from "./ApplicationView"


class App extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br></br>
        <br></br>
        <ApplicationView />
      </React.Fragment>

    )
}
}
export default App

