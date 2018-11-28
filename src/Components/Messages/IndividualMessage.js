
import React, {Component} from 'react'

export default class IndividualMessage extends Component{
    render(){
        return(
        <div>
            <p>
            {this.props.message.text}
            </p>
        </div>
        )
    }
}