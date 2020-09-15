import React from 'react';
  export default class Timer extends React.Component{
      constructor(props){
          super(props);
          console.log(">>constructor");
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }
  state = { seconds: 0, num:0 };
  count = 0;
  interval;
  tick() {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentWillMount(){
      console.log(">>componentWillMount")
  }
  componentDidMount() { //when component added to Parent
    //called after component added to parent
    console.log(">>componentDidMount")
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillReceiveProps(){

  }
  componentWillUpdate(){
      
  }
  componentWillUnmount() { //when component going be removed from Parent
    clearInterval(this.interval);
  }
  stopCounter(){
    this.count = 1;
    /*this.setState({
      seconds: 100
    }); */
    //this.forceUpdate();
    clearInterval(this.interval);
    console.log("interval is "+this.interval +" state:"+this.count);
  }
    startCounter(){
      this.stopCounter();
      this.interval = setInterval(() => this.tick(), 1000);

  }
  resetCounter(){
    this.setState(()=>({seconds : 0}));
}
  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <br/>
        <div><br/><input type="button" onClick={() => this.stopCounter()} value="Stop this Counter" /> &nbsp;
        <input type="button" onClick={() => this.startCounter()} value="Start the Counter" />&nbsp;
        <input type="button" onClick={() => this.resetCounter()} value="reset the Counter" />
        <br/>
        <br/>        
          <input onChange={this.handleChange} value={this.state.text}/>&nbsp;&nbsp;
          <button onClick={this.handleSubmit}> Update </button>  
        </div>
      </div>
    );
  }
  handleChange = (e) => {
    this.setState({ num : parseInt(e.target.value) });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      seconds : prevState.num,
      num: 0
    }));
  }
}
