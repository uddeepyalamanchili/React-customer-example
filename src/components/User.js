import React from 'react';

export default class User extends React.Component{
    name = "test"
    constructor(props){
        super(props);
        console.log('constructor : '+props.name);
        this.state = {name: props.name};
    }
    render(){
        console.log("inside the render")
        return (
            <div>
            <h4>Name:{this.state.name}</h4>
            <button onClick={this.updateName} >update Name</button>
            </div>
          );
    }
    //render cannot be called by the user explicitly 
    //this must be done internally using the setstate and forceupdate
    updateName = ()=>{
        //this.state.name = "India";
        this.setState({name:"india"});//this internally calls the render again
        //this.forceUpdate();//this also can be used to re - render the GUI
        //alert(this.name);
        //India
    }
}
