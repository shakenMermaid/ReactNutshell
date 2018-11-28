import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Login from "./Login/login"
import MessagesApp from "./Messages/MessagesApp"

 export default class ApplicationView extends Component {
     isAuthenticated = () => sessionStorage.getItem("credentials") !== null

 render() {
     return (
        <React.Fragment>
            <Route path="/login" component= {Login} />
            <Route path="/messages" render={() => {
                if (this.isAuthenticated()) {
                    return <MessagesApp />
                } else {
                    return <Redirect to="/login" />
                }
            }} />
        </React.Fragment>
    )}
}