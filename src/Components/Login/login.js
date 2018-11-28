import React, { Component } from "react"
import "./login.css"

export default class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // postNewUser(){
    //         const newAccount = sessionStorage.getItem("credentials")
    //         fetch("http://localhost:8088/Accounts",{
    //         method:"POST",
    //         headers:{
    //           "Content-Type": "application/json; charset=utf-8"
    //         },
    //         body: JSON.stringify(newAccount)
    //       })
    // }
    // validateEmail(){
    //     return (
    //     fetch ("http://localhost:8088/Accounts")
    //     .then(accounts => accounts.json())
    //     .then(parsedAccounts => {
    //         const accounts = parsedAccounts.find((Account)=>
    //         this.state.email === Account.email
    //         && this.state.password === Account.password
    //         )

    //     }
    //     ))
    // }


    // //         .then(console.log)
    // //         if (accounts){
    // //             localStorage.setItem("credentials", JSON.stringify(accounts))
    // //         } else {alert("You are not logged in.")}
    // //     })
    // //     )
    // // }
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        sessionStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.email,
                // password: this.state.password
                id: ""
            })
        )
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} className ="backgroundimage">
                <h1 className="">Welcome!</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                       id="email"
                       placeholder="Email address"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={
                    this.handleFieldChange} type="password"
                       id="password"
                       placeholder="Password"
                       required="" />
                <button type="submit" onClick={() =>  {console.log(" NEW FRIEND!")}}>
                    Register
                </button>
                <button type="submit" onClick={() => {console.log(" Signin")}}> Login </button>
            </form>
        )
    }
}
