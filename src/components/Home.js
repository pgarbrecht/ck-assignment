import '../App.css';
import React, {Component} from 'react'
import { Link } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		let messageCounter = this.props.messages.length;
		let messages = 'Messages' + " (" + messageCounter + ")";
		return (
				<div className="home">
					<div className="inner-home-container">
						<h2>Welcome back, {this.props.username}</h2>
						<div className="home-link-container">
						<Link className='homelink' to ='/appointments'>Appointments</Link>
						<Link className='homelink' to ='/messages'>{messages}</Link>
						<Link className='homelink' to ='/prescriptions'>Prescriptions</Link>
						<Link className='homelink' to ='/account'>Account</Link>
						<Link className='homelink' to ='/billing'>Billing</Link>
						<Link className='homelink' to ='/help'>Help</Link>
						</div>
					</div>
				</div>
		)
	}
}

export default Home