import '../App.css';
import React, {Component} from 'react'

class Appointments extends Component {
	constructor(props) {
		super(props)
    }
	render() {
        console.log('appt page')
		return (
			<h2 className='page-title'>Appointments</h2>
		)
	}
}

export default Appointments