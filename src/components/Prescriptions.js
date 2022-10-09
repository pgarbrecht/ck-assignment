import '../App.css';
import React, {Component} from 'react'
import Prescription from './Prescription.js'

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
			<h2 className='page-title'>Prescriptions</h2>
            <h3 className='prescriptions-heading'>Current</h3>
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
            <h3 className='prescriptions-heading'>Recommended</h3>
            <div className='recommended-prescription-container'>
            <div className='message'>
				<h3>Prescription Name: Package 3</h3>
				<h4>Price: $350</h4>
                <p><b>Description:</b> The next best package to take after 1 and 2.</p>
			</div>
            </div>
            </>
		)
	}
}

export default Prescriptions