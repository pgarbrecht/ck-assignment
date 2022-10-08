import '../App.css';
import React, {Component} from 'react'
import Message from './Message.js'

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
            {/* // {this.props.messages.map((message) => {
                
            // } */}
            </>
		)
	}
}

export default Messages