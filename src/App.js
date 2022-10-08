import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Appointments from './components/Appointments'

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

      </Routes>
    </Router>
  );
}


export default App;
