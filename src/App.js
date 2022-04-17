import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForSale from './components/ForSale';

function App() {
  return (
    <Router>
      <div className="App">
        
      <Navbar />
        <Routes>
          
          {/* Items for Sale */}
          <Route path='/forsale' element={ <ForSale/>}/>

          {/* Home Page */}
          <Route path="/" element={<Home />} />
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;
