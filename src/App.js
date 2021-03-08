import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Courses from './Courses'
import Sidebar from './Sidebar'

function App() {
  return (
    <BrowserRouter>


      <div className="App">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 m-0 p-0">
              <Sidebar/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 main-box">
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
              </Switch>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
