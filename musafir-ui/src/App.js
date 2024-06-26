import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Register from './components/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> Define your home page component here */}
          <Route path="/register" element={<Register />} /> {/* Define route for register page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
