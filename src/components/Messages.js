import '../App.css';
import React, {Component} from 'react'
import Message from './Message.js'
import { Link } from "react-router-dom"

class Messages extends Component {
	constructor(props) {
		super(props)
    }
    componentDidMount() {
        this.props.updateUnreadMessages()
    }
	render() {
		return (
            <>
            <div className='back-home-spacer'></div>
            <Link className='back-home' to='/'>Back to Home</Link>
			<h2 className='page-title'>Messages</h2>
            <div className='messages-page'>
                {this.props.messages.map( (message) => {
                    return (
                        <Message 
                        subject={message.subject}
                        from={message.from}
                        date={message.date}
                        messageDetails={message.messageDetails}
                        />
                    )
                })}
            </div>
            </>
		)
	}
}

export default Messages