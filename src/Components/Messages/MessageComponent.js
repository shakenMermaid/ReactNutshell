import React, {Component} from 'react'

export default class MessageComponent extends Component {

    handleFieldChange = (evt) => {
    this.props.setMessages(evt.target.value)
    console.log(evt.target.value)
    }
    render(){
        return(
                <div>
                    <input type="text" placeholder= "message" onChange={this.handleFieldChange} className="messageInput" />
                    <button onClick= {()=> {this.props.addMessage()}} className="submit"> send </button>
                </div>
            )
        }
    }