import '../App.css';
import React, {Component} from 'react'
import { Link } from "react-router-dom";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
//   } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		return (
			<>
			<Link to ='/appointments'><p>Appointments</p></Link>
			<Link to ='/messages'><p>Messages</p></Link>
			<Link to ='/prescriptions'><p>Prescriptions</p></Link>
			<Link to ='/account'><p>Account</p></Link>
			<Link to ='/billing'><p>Billing</p></Link>
			<Link to ='/help'><p>Help</p></Link>
			<Link to ='#'><p>Signout (for display)</p></Link>
			</>
		)
	}
}

export default Home