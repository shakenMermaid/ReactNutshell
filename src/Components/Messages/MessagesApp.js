import React, {Component} from "react"
import "./Messages.css"
import MessageComponent from "./MessageComponent"
import MessageForm from "./MessageForm"

export default class MessagesApp extends Component {
    state={
      data:[],
      message: ""
    }

    setMessages =(val) => {
      this.setState({message: val})
    }
    handleFieldChange = (evt) => {
        this.setState(evt.target.value)

    }
    getMessages(){
      fetch("http://localhost:8088/Messages")
      .then(messages => messages.json())
      .then( parsedMessages => this.setState({data: parsedMessages}))
    }

    addMessage = () => {
      const newMessage = {text:this.state.message}
      fetch("http://localhost:8088/Messages",{
      method:"POST",
      headers:{
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(newMessage)
    })
    .then(()=> this.getMessages())
    }

    render(){
        return(
            <section className= "messages">
                <MessageForm Message={this.state.data} />
                <MessageComponent setMessages = {this.setMessages} addMessage= {this.addMessage}/>
            </section>
        )
        }
    }
