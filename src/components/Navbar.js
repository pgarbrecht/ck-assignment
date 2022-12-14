import '../App.css';
import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Navbar extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		return (
            <>
            <div className="navbar">
            <Link to='/'>
			<img className="nav-logo" src="https://assets.website-files.com/62d56e6f57f0a6bc6871b4c0/62d56e6f57f0a68c4f71b5e1_Frame%204-3.png"></img>
            </Link>
            <p className='made-by'>Made by Phil Garbrecht</p>
            <a className="signout-link" href='#'>Signout (for display)</a>
            </div>
            </>
		)
	}
}

export default Navbar