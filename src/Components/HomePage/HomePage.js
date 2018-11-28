import React, {Component} from "react"


export default class HomePage extends Component {

    render(){
        return(
            <React.Fragment>
                <NavBar />
                <br></br>
                <br></br>
                <MessagesApp />
            </React.Fragment>
        )
    }
}