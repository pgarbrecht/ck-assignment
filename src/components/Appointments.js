import '../App.css';
import React, {Component} from 'react'

class Appointments extends Component {
	constructor(props) {
		super(props)
        this.state = {
            appointments: [{
                purpose: 'Check-in',
                when: 'October 15, 2022 at 10am CT',
                dr: 'Dr. Sally Jones',
            },
            {
                purpose: 'Plan next treatment',
                when: 'November 2, 2022 at 3pm CT',
                dr: 'Dr. Roy Smith',
            }
            ]
        }
    }
	render() {
		return (
            <div className='appt-page'>
            <div>
			<h2 className='page-title'>Current appointments</h2>
            {this.state.appointments.map( (appointment) => {
                return (
                    <div className='message'>
                        <p>(will have button to edit in-line)</p>
                        <h3>Purpose: {appointment.purpose}</h3>
                        <h4>When: {appointment.when}</h4>
                        <p><b>With:</b> {appointment.dr}</p>
			        </div>
                )
            })}
            </div>
            <form className='form'>
                <h3 className='page-title'>Schedule new appointment</h3>
                <label><b>Purpose:</b></label>
                <input type='text' placeholder='Purpose'></input>
                <label><b>When:</b></label>
                <input type='date'></input>
                <label><b>With:</b></label>
                <input type='text' placeholder='With'></input>
                <input className="form-button" type="submit" value="Submit"/>
                <p>(for display)</p>
            </form>
            </div>
		)
	}
}

export default Appointments