import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import France from './components/France';
import Dubai from './components/Dubai';


export default function App() {
  return (
    <Router>
    <div>
      <Navbar />
    
      <Switch>
          <Route path="/france">
            <France/>
          </Route>
          <Route path="/india">
           <Main/>
          </Route>
          <Route path="/Dubai">
           <Dubai/>
          </Route>
          <Route path="/">
            <Main/> <France/> <Dubai/>
          </Route>
        </Switch>
    </div>
    </Router>

  )
}