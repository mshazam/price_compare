import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './common/Header';

function App() {
    return (
            <Router>
              <Routes>
                <Route path="/" element={<Header />}/>
              </Routes>
            </Router>
          );
}
export default App;
