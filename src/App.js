import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import TestAddCustomer from './containers/testAddcustomer';
import TestEditCustomer from './containers/testEditcustomer';
import Login from './containers/Login';
import About from './containers/About';
import CustomerApp from './components/Customer-app';
import Customerlist from './components/customer';
import CustomerAdd from './containers/CustomerAdd';
import Temperature from './containers/Temperature';
import MathsImport from './containers/Maths';



function App() {
  return (
   <Router>
    <div>       
       <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/CustomerAdd/:id' component={TestAddCustomer} />
          <Route exact path='/CustomerAdd' component={TestAddCustomer} />
          <Route exact path='/CustomerEdit/:id' component={TestEditCustomer} />
          <Route exact path='/Customers-app' component={CustomerApp} />
          <Route exact path='/Customers-seperate' component={Customerlist} />
          <Route exact path='/Temperature' component={Temperature} />
          <Route exact path='/Maths-import' component={MathsImport} />
          <Route exact path='/Customer-add' component={CustomerAdd} />
          <Route exact path='/about' component={About} />
       </Switch>
    </div>
   </Router>
  );
}
export default App;

