import React from 'react';
/*
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import About from './containers/About';
import CustomerApp from './components/Customer-app';
import Customerlist from './components/customer';

function App() {
  return (
    <Router>
    <div>
       
       <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/Customers' component={CustomerApp} />
          <Route exact path='/Customers-seperate' component={Customerlist} />
          <Route exact path='/about' component={About} />
       </Switch>
    </div>
 </Router>
  );
}
export default App;
*/
import TodoApp from './components/Todo';
function App() {
  return (
    <div>
      <TodoApp/>
    </div>
  );
}
export default App;
