import React,{useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
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
         <div style={{marginLeft:'200px',marginTop:'100px'}}>
            <h2>Login</h2><br/>
            <Form>
               <FormGroup row>
                  <Label for="exampleEmail" sm={1}>Email</Label>
                  <Col sm={3}>
                     <Input type="email" name="email" onChange={handleChange} value={email} id="exampleEmail" placeholder="Enter your e-mail" />
                  </Col>
               </FormGroup>
               <FormGroup row>
                  <Label for="examplePassword" sm={1}>Password</Label>
                  <Col sm={3}>
                     <Input type="password" name="password" id="examplePassword" onChange={handleChange} placeholder="Enter your password" value={password} />
                  </Col>
               </FormGroup>
               <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                     <Button color = "primary"  onClick={()=>{
                        if(email===password){
                           props.history.push('/Home');
                        }else{
                           alert('Incorrect email or password. Please try again.')
                        }
                       }}>Submit</Button>
                  </Col>
               </FormGroup>
            </Form>
            
         </div>
         
      );
   }
    export default Login;
    /*
            <input name="email" onChange={handleChange} placeholder="email" value={email}/><br/><br/>
            <input name="password" type="password" onChange={handleChange}  placeholder="password" value={password}/><br/><br/>
            <button onClick={()=>{
               if(email === password){
                  props.history.push('/Home');
               }else{
                  alert('Incorrect email or password. Please try again.')
               }
            }}>Submit</button>
            */