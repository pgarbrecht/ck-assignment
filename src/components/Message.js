import '../App.css';
import React, {Component} from 'react'

class Message extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		return (
			<div className='message'>
				<h3>Subject: {this.props.subject}</h3>
				<h4>From: {this.props.from}</h4>
				<p>{this.props.date}</p>
				<p>{this.props.messageDetails}</p>
			</div>
		)
	}
}

export default Message