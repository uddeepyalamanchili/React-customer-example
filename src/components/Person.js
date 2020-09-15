import React,{useState} from 'react';

var sampleJSX= <h3>Person 1234</h3>;
//props is not a default variable . this can be replaced with any name but props is the standard name properties


export default function Person(props) {
	const [name, setName] = useState(props.name);
	var upDatename = ()=>{
		/*alert(props.name);
		var temp = props.name;
		props.name = temp;*/
		setName('India');
        alert(name);
        //India
	}

  return (
    <div>
    <h4>Name: {name} <br/>E-mail : {props.email}</h4>
    <button onClick ={upDatename}>Update Name</button>
    </div>
  );
  }

  export function Rama() {
    return (
      <div>
      <h4>Name: Rama</h4>
      </div>
    );
  }
