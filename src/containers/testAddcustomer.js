import React,{useState,useEffect} from 'react';
import customerService from '../services/customer';
   function Login(props) {
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
      const [address, setAddress] = useState("");
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
            <h2>Add Customer</h2>
            <input name="name" onChange={handleChange} placeholder="Enter Name" value={name}/><br/><br/>
            <input name="email" onChange={handleChange} placeholder="Enter email" value={email}/><br/><br/>
            <input name="phone" onChange={handleChange} placeholder="Enter Phone" value={phone}/><br/><br/>
            <input name="address" onChange={handleChange} placeholder="Enter adress" value={address}/><br/><br/>          
            <button onClick={handleSubmit}>Add Customer</button>
         </div>
      );
   }
    export default Login;
