import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Shivangi-Verma/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
