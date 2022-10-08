import '../App.css';
import React, {Component} from 'react'

class Prescription extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		return (
			<div className='message'>
				<h3>Prescription Name: {this.props.pckgName}</h3>
				<h4>Price: {this.props.price}</h4>
			</div>
		)
	}
}

export default Prescription