import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyAccount from './components/MyAccount';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        
      
        <Routes>
          
          {/* User registeration */}
          <Route path='/signup' element={<SignUp />} />
          
          {/* User Login */}
          <Route path='/login' element={<Login />} />
          
          {/* Items for Sale */}
          <Route
            path='/myaccount'
            element={
              <>
                <Navbar />
                <MyAccount />
              </>
            } 
          />

          {/* Home Page */}
          <Route path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }   
          />
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
