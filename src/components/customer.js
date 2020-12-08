import React,{useEffect,useState} from 'react';
import Menu from '../components/Menu'
import customerService from '../services/customer';
import { Table, Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,props
  } from "react-router-dom";
var apiCustomer = 'http://localhost:4000/api/customer';
export default function CustomerList(props) {
    let history = useHistory();
    const [init, setInit] = useState(false);
    const [customers, setCustomers] = useState([]);
    useEffect(()=>{
        if(!init){
            setInit(true);
            fetch(apiCustomer)
            .then(res => res.json())
            .then(
                (result) => {
                    setCustomers(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    //manage error
                }
            )
        }
    });

    var doDelete = (record)=>{
        fetch(apiCustomer,{
            method: 'delete',
            body:JSON.stringify(record),
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
         }).then(res => res.json())
         .then(
            (result) => {
                setInit(false);
             },
             // Note: it's important to handle errors here
             // instead of a catch() block so that we don't swallow
             // exceptions from actual bugs in components.
             (error) => {
                 //manage error
             }
         )
    }

    return (
        <div style={{marginLeft:'200px',marginRight:'200px'}}>
        <Menu/>
        <h3>Customers</h3>
        <Button color="secondary" onClick = {()=>{history.push("/CustomerAdd")}}>Add Customer</Button><br/><br/>
        <Table striped bordered hover size="sm">
          <thead>
              <tr>
              <th width="20px">No</th>
              <th width="300px">Name</th>
              <th width="300px">Email</th>
              <th width="200px">Phone</th>
              <th width="250px">Address</th>
              <th width="100px">Edit</th>
              <th width="100px">Delete</th>
              </tr>
          </thead>
          <tbody>
            {customers.map((item) => (
            <tr key={item.id}>
                <td>
                {item.id}
                </td>
                <td>
                {item.name}
                </td>
                <td>
                {item.email}
                </td>
                <td>
                {item.phone}
                </td>
                <td>
                {item.address}
                </td>
                <td>
                <Button color="secondary" size="sm" onClick = {()=>{
                    props.history.push("/CustomerAdd/"+item.id);}}>Edit</Button>
                </td>
                <td>
                <Button color="secondary" size="sm" onClick = {()=>{
                    doDelete(item);}}>Delete</Button>
                </td>
                </tr>
            ))}
          </tbody>
      </Table>
      </div>
    );

}
