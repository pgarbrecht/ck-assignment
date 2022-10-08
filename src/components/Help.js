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
            <p>Links to various help articles will go here, maybe a contact form too.</p>
            </div>
            </>
		)
	}
}

export default Help