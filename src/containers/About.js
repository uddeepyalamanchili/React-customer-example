import React, { Component } from 'react';
function FancyBorder(props) {
  return (
    <div style={{color: props.color, backgroundColor: 'grey'}} >
      {props.children}
    </div>
  );
}

export default function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

/*
import React, { Component } from 'react';
import Menu from '../components/Menu';
   function About() {
      return (
         <div>
             <Menu/>
            <h2>About</h2>
         </div>
      );
   }
    export default About;
    */