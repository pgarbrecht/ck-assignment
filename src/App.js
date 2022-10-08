import './App.css';
import Home from './components/Home'
import Appointments from './components/Appointments'
import Messages from './components/Messages'
import Prescriptions from './components/Prescriptions'
import Account from './components/Account'
import Billing from './components/Billing'
import Help from './components/Help'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>

        <Route 
        path="/"
        element={<Home/>}
        />
        
        <Route 
        path="/appointments"
        element={<Appointments/>}
        />

        <Route 
        path="/messages"
        element={<Messages/>}
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


export default App;
