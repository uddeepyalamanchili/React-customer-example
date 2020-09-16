import React from 'react';
import Menu from '../components/Menu';
import customerService from '../services/customer';

   function Home() {
      return (
         <div style={{marginLeft:'20px'}}>
             <Menu/>
             <div style={{marginLeft:'20px'}}>
               <h2>Home</h2>
               <h3>The number of customers in the table : {customerService.getRecords().length}</h3>
            </div>
         </div>
      );
   }
    export default Home;