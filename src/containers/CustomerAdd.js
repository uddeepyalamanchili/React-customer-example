import React from 'react';
import Menu from '../components/Menu';
import customerService from '../services/customer';

   function Home() {
      return (
         <div style={{marginLeft:'20px'}}>
             <Menu/>
            <h2>Home</h2>
            <h3>the number of customers in the table : {customerService.getRecords().length}</h3>
         </div>
      );
   }
    export default Home;