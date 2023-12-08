import React, { useState }  from "react";
import profile from "../image/Ad.jpg";
import Email from "../image/email.jpg";
import pass from "../image/pass.png";
import '../App.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';




function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] =useState('');





const Submit = async (e) =>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)


  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    alert("Successfuuly creatd my account")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    alert(errorCode)
     
    // ..
  });
} 


  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <div className="imgs">
          <div className="container-image">
            <img src={profile} alt="profile" className="profile"/>

          </div>


        </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={Email} alt="email" className="email"/>
           
            <input type="email" placeholder="user name" className="name" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="user password" className="name" onChange={(e) => setPassword(e.target.value)}/>
           
          </div>
         <div className="btn-log">
      
       <button  onClick={Submit} >Login</button>
        
         </div>
      <div  className="or">    <p>or</p></div>
       
        
         <button className="fb">Facebook</button>  
         <button className="gg">Google</button>  
       
       
          
         

        </div>
      </div>
      

    </div>
   </div>
  )
}

export default Login;
