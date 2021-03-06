import React from 'react';
import './App.css';
import Login from './login/login';
import Home from './home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signup from './login/singup';
import './firebase';
import Fileupload from './file/file';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/file' component={Fileupload} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
