import '../App.css';
import React, {Component} from 'react'

class Help extends Component {
	constructor(props) {
		super(props)
    }
	render() {
		return (
            <>
            <div className='help-page'>
			<h2 className='page-title'>Help</h2>
            <form className='form help' id='help-form'>
                <h3 className='page-title'>Fill out the form below to contact support</h3>
                <label><b>Name:</b></label>
                <input type='text' placeholder='Name'></input>
                <label><b>Issue:</b></label>
                <textarea type='text' placeholder='Describe your issue please'></textarea>
                <label><b>Email:</b></label>
                <input type='text' placeholder='Zip'></input>
                <input className="form-button" type="submit" value="Submit"/>
                <p>(for display)</p>
            </form>
            </div>
            </>
		)
	}
}

export default Help