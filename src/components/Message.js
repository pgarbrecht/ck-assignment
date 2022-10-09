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
				<p><b>{this.props.date}</b></p>
				<p>{this.props.messageDetails}</p>
				<label><b>Reply:</b></label>
				<textarea className="message-reply"></textarea>
				<button className="white-card-button">Send Reply</button>
				<p>(for display)</p>
			</div>
		)
	}
}

export default Message