import React from 'react';
import Menu from './Menu';
import customerService, { getRecords } from '../services/customer';

export default class TodoApp extends React.Component {
  state = { items:customerService.getRecords(), name: '' ,email:'',phone:'',address:'',id:'',buttonlabel:"add customer"};
  constructor(_props) {
    super(_props);  
    //Another approach to handle this 
    // this.handleChange = this.handleChange.bind(this); // line handles this pointer becuase we are using the arrow function below so binding is not required
    this.addUpdateItem = this.addUpdateItem.bind(this); // line handles this pointer
  }

  render() {
    return (
      
      <div style={{marginLeft:'200px'}}>
        <Menu/>
        <h3>customer app</h3>       
        <form onSubmit={this.addUpdateItem}>
          <input type = 'text'
            name = 'name' //adding this extra field to differentiate inputs
            onChange={this.handleChangename}
            value={this.state.name}
            placeholder = "name"
          />&nbsp;&nbsp;
            <input type = 'text'
            onChange={this.handleChangeemail}
            value={this.state.email}
            placeholder = "email"
          />&nbsp;&nbsp;
            <input type = 'text'
            onChange={this.handleChangephone}
            value={this.state.phone}
            placeholder = "phone"
          />&nbsp;&nbsp;
            <input type = 'text'
            onChange={this.handleChangeaddress}
            value={this.state.address}
            placeholder = "address"
          />&nbsp;&nbsp;
          <button>
            {this.state.buttonlabel}
          </button>
        </form>
        <br/>
        <br/>
        <div >
        <TodoList items={this.state.items} deleteItem = {this.deleteItem} editItem = {this.editItem}/>
        </div>
      </div>
    );
  }


  handleChangename = (e) => {//the values can be dynamically handled using this
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeemail = (e) => {
    this.setState({ email: e.target.value });
  }
  handleChangephone = (e) => {
    this.setState({ phone: e.target.value });
  }
  handleChangeaddress = (e) => {
    this.setState({ address: e.target.value });
  }
/*
  handleSubmit(e) {
    

    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      name: '',
      email:'',
      phone:'',
      address:'',
      id:''
    }));
  }*/
  addUpdateItem = (e) => {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };
    if(this.state.id !==''){
        newItem.id = this.state.id;
       /*for(var i=0; i< this.state.items.length; i++){
           if(this.state.items[i].id == newItem.id){
            this.state.items[i] = newItem;
            break;
           }
       }*/
       customerService.updateRecord(newItem);
       this.state.items = getRecords();

    }else{
        newItem.id = Date.now();
        customerService.addRecord(newItem);
      this.state.items =  customerService.getRecords();
    }
    this.setState({
        name: '',
        email: '',
        phone: '',
        address: '',
        id: '',
        buttonlabel:"add customer"
      });
  }
  deleteItem = (id) => { 
    console.log()
    customerService.deleteRecord(id);
   // var temp = this.state.items.filter(item => item.id !== id)
    this.setState({ items:customerService.getRecords() });
 }
  editItem = (id) => { 
    console.log("edit id:"+id);
    var temp = this.state.items.filter(item => item.id === id);
    if(temp.length == 1){
        this.setState({
            id:temp[0].id,
            name:temp[0].name,
            email:temp[0].email,
            phone:temp[0].phone,
            address:temp[0].address,
            buttonlabel:"Update Customer"
        })
    }
}

}

class TodoList extends React.Component {
  render() {
    return (
      <table border="1" cellpadding="7" cellspacing="7" >
        <caption>Customer Details</caption>
        <thead>        
        <tr>
                    <th width="20px">ID</th>
                    <th width="250px">Name</th>
                    <th width="220px">Email</th>
                    <th width="100px">Phone</th>
                    <th width="300px">Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
         </tr>
        </thead>
        <tbody>
            {this.props.items.map((item) => (
            <tr key={item.id}>
                <td> {item.id} </td>
                <td> {item.name} </td>
                <td> {item.email} </td>
                <td> {item.phone} </td>
                <td> {item.address} </td>                 
                <td> <button onClick = {()=>this.props.editItem(item.id)}>Edit</button> </td>
                <td> <button onClick = {()=>this.props.deleteItem(item.id)}>Delete</button> </td>
            </tr>
            ))}
          </tbody>
      </table>     
    );
  }
}

/*
class CustomerEdit extends React.Component {
  render() {
    return (     
    <div >
      <h3>customer app</h3>       
      <form onSubmit={this.handleSubmit}>
        <input type = 'text'
          name = 'name' //adding this extra field to differentiate inputs
          onChange={this.handleChangename}
          value={this.props.item.name}
          placeholder = "name"
        />&nbsp;&nbsp;
          <input type = 'text'
          onChange={this.handleChangeemail}
          value={this.props.item.email}
          placeholder = "email"
        />&nbsp;&nbsp;
          <input type = 'text'
          onChange={this.handleChangephone}
          value={this.props.item.phone}
          placeholder = "phone"
        />&nbsp;&nbsp;
          <input type = 'text'
          onChange={this.handleChangeaddress}
          value={this.props.item.address}
          placeholder = "address"
        />&nbsp;&nbsp;
        <button>
          update customer
        </button>
      </form>
      <br/>
      <br/>
      </div>);
  }
}*/
