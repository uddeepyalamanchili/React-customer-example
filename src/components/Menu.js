import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
function Menu(){
    return (
        <div style={{marginLeft:'20px',marginTop:'20px'}}><br/>
           <h2>Welcome to React Router Tutorial</h2><br/>
              <Link to={'/home'}><Button color="primary">HOME</Button></Link> &nbsp; &nbsp;
              <Link to={'/about'}><Button color="primary">ABOUT</Button></Link> &nbsp;&nbsp;
              <Link to={'/Customers-app'}><Button color="primary">CUSTOMER-APP</Button></Link> &nbsp; &nbsp;
              <Link to={'/Customers-seperate'}><Button color="primary">CUSTOMER-NODE</Button></Link>&nbsp;&nbsp;
              <Link to={'/Temperature'}><Button color="primary">TEMPERATURE</Button></Link>&nbsp; &nbsp;
              <Link to={'/login'}><Button color="primary">LOGOUT</Button></Link>

           <hr />
        </div>
    );
}
export default Menu;