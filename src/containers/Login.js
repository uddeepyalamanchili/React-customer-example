import React,{useState} from 'react';
   function Login(props) {
      const [email, setEmail] = useState('admin');
      const [password, setPassword] = useState("admin");
      var handleChange = (e) =>{
         if(e.target.name === "email"){
            setEmail(e.target.value);
         }else if(e.target.name === "password"){
            setPassword(e.target.value);
         }
      }
      return (
         <div style={{marginLeft:'200px'}}>
            <h2>Login</h2>
            <input name="email" onChange={handleChange} placeholder="email" value={email}/><br/><br/>
            <input name="password" type="password" onChange={handleChange}  placeholder="password" value={password}/><br/><br/>
            <button onClick={()=>{
               if(email === password){
                  props.history.push('/Home');
               }else{
                  alert('Incorrect email or password. Please try again.')
               }
            }}>Submit</button>
         </div>
      );
   }
    export default Login;