import '../App.css';
import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Account extends Component {
	constructor(props) {
		super(props)

        this.state = {
            username: 'MarkCK2022',
            password: '1hedfg52'
        }
    }
	render() {
		return (
            <>
            <div className='back-home-spacer'></div>
            <Link className='back-home' to='/'>Back to Home</Link>
            <div className='account-page'>
			<h2 className='page-title'>Account</h2>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <p>More account info can go here, anything needed</p>
            </div>
            </>
		)
	}
}

export default Account