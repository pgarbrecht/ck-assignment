import '../App.css';
import React, {Component} from 'react'
import Prescription from './Prescription.js'
import { Link } from "react-router-dom"

class Prescriptions extends Component {
	constructor(props) {
		super(props)

        this.state = {
            prescriptions: [{
                pckgName: 'Package 1',
                price: 180,
                actionItems: 'Confirm you have recevied this prescription.',
                nextSteps: 'Renew on October 22, 2022'
            },
            {
                pckgName: 'Package 2',
                price: 299,
                actionItems: 'Read the instructions for this prescription.',
                nextSteps: 'After dose #4, schedule check-in with Dr.'
            }
            ]
        }
    }
	render() {
		return (
            <>
            <div className='back-home-spacer'></div>
            <Link className='back-home' to='/'>Back to Home</Link>
            <div className='prescription-page'>
            <div>
			<h2 className='page-title'>Current prescriptions</h2>
            <div className='messages-page'>
                {this.state.prescriptions.map( (prescription) => {
                    return (
                        <Prescription
                        pckgName={prescription.pckgName}
                        price={prescription.price}
                        actionItems={prescription.actionItems}
                        nextSteps={prescription.nextSteps}
                        />
                    )
                })}
            </div>
            </div>
            <div>
            <h3 className='prescriptions-heading'>Recommended</h3>
            <div className='recommended-prescription-container'>
            <div className='message'>
				<h3>Prescription Name: Package 3</h3>
				<h4>Price: $350</h4>
                <p><b>Description:</b> The next best package to take after 1 and 2.</p>
                <button className="white-card-button">Buy now</button>
			</div>
            </div>
            </div>
            </div>
            </>
		)
	}
}

export default Prescriptions