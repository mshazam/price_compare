import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
    return (
        <Router>
          <div>
            <Routes>
              <Route path="/about" element={<About />} />
                
              <Route path="/topics" element={<Topics />} />
                
              <Route path="/" element={<Home />}/>
                
            </Routes>
          </div>
        </Router>
    );
}
export default App;
