import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function Menu(){
    return (
        <div style={{marginLeft:'20px'}}>
           <h2>Welcome to React Router Tutorial</h2>
              <Link to={'/home'}>Home</Link> &nbsp;| &nbsp;
              <Link to={'/about'}>About</Link> &nbsp;| &nbsp;
              <Link to={'/Customers-app'}>Customers-app</Link> &nbsp;| &nbsp;
              <Link to={'/Customers-seperate'}>Customers-seperate</Link>&nbsp;| &nbsp;
              <Link to={'/login'}>Logout</Link>

           <hr />
        </div>
    );
}
export default Menu;