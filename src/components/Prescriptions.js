import '../App.css';
import React, {Component} from 'react'
import Prescription from './Prescription.js'

class Prescriptions extends Component {
	constructor(props) {
		super(props)

        this.state = {
            prescriptions: [{
                pckgName: 'Package 1',
                price: '$180'
            },
            {
                pckgName: 'Package 2',
                price: '$299'
            }
            ]
        }
    }
	render() {
		return (
            <>
			<h2 className='page-title'>Prescriptions</h2>
            <div className='messages-page'>
                {this.state.prescriptions.map( (prescription) => {
                    return (
                        <Prescription
                        pckgName={prescription.pckgName}
                        price={prescription.price}
                        />
                    )
                })}
            </div>
            </>
		)
	}
}

export default Prescriptions