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
				<h4>Price: ${this.props.price}</h4>
                <p><b>Action items:</b> {this.props.actionItems}</p>
                <p><b>Next steps:</b> {this.props.nextSteps}</p>
			</div>
		)
	}
}

export default Prescription