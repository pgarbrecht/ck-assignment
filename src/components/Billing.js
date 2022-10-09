import '../App.css';
import React, {Component} from 'react'

class Billing extends Component {
	constructor(props) {
		super(props)
        this.state = {
            cards: [{
                name: 'Lucky Customer',
                number: 1802364543,
                zip: 78634,
            }]
        }
    }
	render() {
		return (
            <div className='appt-page'>
            <div>
			<h2 className='page-title'>Billing cards on file</h2>
            {this.state.cards.map( (card) => {
                return (
                    <div className='message'>
                        <p>(will have button to edit in-line)</p>
                        <h3>Name: {card.name}</h3>
                        <h4>Number: {card.number}</h4>
                        <p><b>Zip:</b> {card.zip}</p>
			        </div>
                )
            })}
            </div>
            <form className='form'>
                <h3 className='page-title'>Add new credit card</h3>
                <label><b>Name:</b></label>
                <input type='text' placeholder='Name'></input>
                <label><b>Number:</b></label>
                <input type='number' placeholder='Number'></input>
                <label><b>Zip:</b></label>
                <input type='number' placeholder='Zip'></input>
                <input className="form-button" type="submit" value="Submit"/>
                <p>(for display)</p>
            </form>
            </div>
		)
	}
}

export default Billing