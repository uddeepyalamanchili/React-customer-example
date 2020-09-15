import React from 'react';
import Menu from '../components/Menu'
import customerService from '../services/customer';

export default function CustomerList() {
    var state = { items:customerService.getRecords()};
    return (
        <div style={{marginLeft:'200px'}}>
            <Menu/>
        <h3>Customers</h3>
        <button onClick={()=>{props.history.push('/customer-add'); }}> Add customer</button><br/>
        <br/>
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
            {state.items.map((item) => (
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
                <button onClick={()=>this.editItem(item.id)}>Edit</button>
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
