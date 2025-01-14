import React from 'react';
import {useState,useContext} from 'react'
import { FirebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {


  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const{firebase}=useContext(FirebaseContext)
  const history=useHistory()

  const handleLogin=(event)=>{

    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
      alert("Login success")
      history.push("/")
    }).catch((error)=>{
      alert(error.message)

    })


  }




  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        {/* <a>Signup</a> */}
      </div>
    </div>
  );
}

export default Login;
