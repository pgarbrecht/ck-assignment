import '../App.css';
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";

class Home extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		return (
			
			<Link to ='/appointments'><p>Appointments</p></Link>

		)
	}
}

export default Home