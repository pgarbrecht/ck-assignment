import './App.css';
import React, {Component} from 'react'
import Home from './components/Home'
import Appointments from './components/Appointments'
import Messages from './components/Messages'
import Prescriptions from './components/Prescriptions'
import Account from './components/Account'
import Billing from './components/Billing'
import Help from './components/Help'
import Navbar from './components/Navbar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
        
		this.state = {
      username: 'Mark',
      messages: [{
        subject: 'Hello',
        from: 'Phil',
        date: 'October 8, 2022',
        messageDetails: 'Thank you for viewing my assignment. Hope you like it!',
        isRead: false,
      },
      {
        subject: 'Next steps?',
        from: 'Phil',
        date: 'October 8, 2022',
        messageDetails: 'Want to move forward? Looking forward to the next stage.',
        isRead: false,
      }
      ]
    }
  }
  render() {
    console.log('app message', this.state.messages)
  return (
    
    <Router>
      <Navbar />
      <Routes>

        <Route 
        path="/"
        element={<Home
          username={this.state.username}
          messages={this.state.messages}
          />}
        />
        
        <Route 
        path="/appointments"
        element={<Appointments/>}
        />

        <Route 
        path="/messages"
        element={<Messages
          messages={this.state.messages}
          />}
        />

        <Route 
        path="/prescriptions"
        element={<Prescriptions/>}
        />

        <Route 
        path="/account"
        element={<Account/>}
        />

        <Route 
        path="/billing"
        element={<Billing/>}
        />

        <Route 
        path="/help"
        element={<Help/>}
        />

      </Routes>
    </Router>
    
  );
  }
}


export default App;
