import React, { useContext, createContext, useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Login from './containers/Login';
import Home from './containers/Home';
import TestAddCustomer from './containers/testAddcustomer';
import TestEditCustomer from './containers/testEditcustomer';
import About from './containers/About';
import CustomerApp from './components/Customer-app';
import Customerlist from './components/customer';
import CustomerAdd from './containers/CustomerAdd';
import Temperature from './containers/Temperature';
import MathsImport from './containers/Maths';

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
            <li>
              <Link to="/Customers-app">Customers Page</Link>
            </li>
            <li>
              <Link to="/home">Home Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login"><LoginPage /></Route>
            <Route exact path='/about' component={About} />
            <Route exact path='/home' component={Home} />
          <PrivateRoute path='/CustomerEdit/:id'><TestEditCustomer/></PrivateRoute>
          <PrivateRoute path='/Customers-seperate'><Customerlist/></PrivateRoute>
          <PrivateRoute path='/CustomerAdd'><TestAddCustomer/></PrivateRoute>
          <PrivateRoute path='/Temperature'><Temperature/></PrivateRoute>
          <PrivateRoute path='/CustomerAdd/:id'><TestAddCustomer/></PrivateRoute>
          <PrivateRoute path='/Temperature'><Temperature/></PrivateRoute>
          <PrivateRoute path='/Maths-import'><MathsImport/></PrivateRoute>
          <PrivateRoute path='/Customer-add'><CustomerAdd/></PrivateRoute>
            <PrivateRoute path='/CustomerAdd/:id'><TestAddCustomer/></PrivateRoute>
            <PrivateRoute path='/Customers-app'><CustomerApp/></PrivateRoute>
            <PrivateRoute path="/protected"><ProtectedPage /></PrivateRoute>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState('user');
  useEffect(()=>{
     console.log("first Call");
     setUser(localStorage.getItem('user'));
  })
  const signin = cb => {
    return fakeAuth.signin(() => {
       console.log("signin");
      setUser("user");
      localStorage.setItem('user','admin@yara.com');
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      localStorage.removeItem('user');
      setUser(null);
      cb();
    });
  };
  //setUser(localStorage.getItem('user'));
 // var loginUser = localStorage.getItem('user');
  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

/*

export default  function App() {
  return (
    <Router>
    <div style={{marginLeft:'20px',marginRight:'20px',}}>
       <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/customer' component={Customer} />
          <Route exact path='/customer/add' component={CustomerAdd} />
          <Route exact path='/customer/edit/:id' component={CustomerAdd} />
          <Route exact path='/temperature' component={Temperature} />
          <Route exact path='/customer-app' component={CustomerApp} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
       </Switch>
    </div>
 </Router>
  );
}*/
/*
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
*/
