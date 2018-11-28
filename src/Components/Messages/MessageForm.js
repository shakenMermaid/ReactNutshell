
import React, {Component} from 'react'
import IndividualMessage from './IndividualMessage'
export default class MessageForm extends Component{
    render(){
        const messageNode= this.props.Message.map((message)=>{
            return(<IndividualMessage message={message} key={message.id}  />)
        })
        return(<section className="messageDisplay"> {messageNode} </section>)
    }
}