
import React,{useState,useEffect} from 'react';
import customerService from '../services/customer';
/*
function Login(props) {
      
    //const newitems = customerService.getRecordsById(props.match.params.id);
    const [items, setItems] = useState(customerService.getRecordsById(props.match.params.id));
    useEffect(()=>{
        console.log("id is"+props.match.params.id);
        //const newitems = customerService.getRecordsById(props.match.params.id);
      })
      var handleChange = (e) =>{
        if(e.target.name === "name"){
           setItems.name(e.target.value);
        }
    }
    /*
    var handleSubmit = ()=>{
       const newItem = {
          id:Date.now(),
          name: name,
          email: email,
          phone: phone,
          address: address,
        };
        customerService.addRecord(newItem);
        props.history.push('/Customers-seperate');
    }
    return (
       <div style={{marginLeft:'200px'}}>
          <h2>Edit Customer</h2> 
          <input name="name" onChange={handleChange} placeholder="Enter Name" value={items.name}/><br/><br/>       
       </div>
    );
 }
  export default Login;
  */
 
/*
export default class TodoApp extends React.Component {
    state = { items:customerService.getRecordsById(id)};
    constructor(_props) {
      super(_props);  
      var id = _props.match.params.id;
      console.log(id);
      //Another approach to handle this 
      // this.handleChange = this.handleChange.bind(this); // line handles this pointer becuase we are using the arrow function below so binding is not required
      //this.addUpdateItem = this.addUpdateItem.bind(this); // line handles this pointer
    }
  
      var handleChange = (e) =>{
         if(e.target.name === "email"){
            setEmail(e.target.value);
         }
      }
      render(){
      return (
         <div style={{marginLeft:'200px'}}>
            <h2>Edit Customer</h2>
            <input name="email"  placeholder="email" value={this.items.email}/><br/><br/>
            
            <button >Submit</button>
         </div>
      );
      }
   }
   */
  function Login(props) {
    const items = customerService.getRecordsById(props.match.params.id);
    const [name, setName] = useState(items.name);
    const [phone, setPhone] = useState(items.phone);
    const [email, setEmail] = useState(items.email);
    const [address, setAddress] = useState(items.address);
    var handleChange = (e) =>{
       if(e.target.name === "email"){
          setEmail(e.target.value);
       }else if(e.target.name === "name"){
          setName(e.target.value);
       }
       else if(e.target.name === "phone"){
          setPhone(e.target.value);
       }
       else if(e.target.name === "address"){
          setAddress(e.target.value);
       }
       
    }
    var handleSubmit = ()=>{
       const newItem = {
          id:items.id,
          name: name,
          email: email,
          phone: phone,
          address: address,
        };
        customerService.updateRecord(newItem);
        props.history.push('/Customers-seperate');
    }
    return (
       <div style={{marginLeft:'200px'}}>
          <h2>Update Customer</h2>
          <input name="name" onChange={handleChange} placeholder="Enter Name" value={name}/><br/><br/>
          <input name="email" onChange={handleChange} placeholder="Enter email" value={email}/><br/><br/>
          <input name="phone" onChange={handleChange} placeholder="Enter Phone" value={phone}/><br/><br/>
          <input name="address" onChange={handleChange} placeholder="Enter adress" value={address}/><br/><br/>          
          <button onClick={handleSubmit}>update Customer</button>
       </div>
    );
 }
  export default Login;

