import React,{useEffect,useState} from 'react';
import Menu from '../components/Menu'
import customerService from '../services/customer';

var apiCustomer = 'http://localhost:4000/api/customer';
export default function CustomerList(props) {
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
    return (
        <div style={{marginLeft:'200px'}}>
        <Menu/>
        <h3>Customers</h3>
        <button onClick = {()=>{props.history.push("/CustomerAdd")}}>Add Customer</button>
        <table border="1">
          <thead>
              <tr>
              <th width="20px">No</th>
              <th width="250px">Name</th>
              <th width="220px">Email</th>
              <th width="100px">Phone</th>
              <th width="300px">Address</th>
              <th></th>
              <th></th>
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
                <button  onClick={()=>{
                    props.history.push("/customer/edit/"+item.id);
                    }} >Edit</button>
                </td>
                <td>
                <button onClick={()=>this.deleteItem(item.id)}>Delete</button>
                </td>
                </tr>
            ))}
          </tbody>
      </table>
      </div>
    );

}
