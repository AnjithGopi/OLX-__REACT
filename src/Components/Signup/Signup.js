import React from 'react';
import {useState,useContext} from 'react'
import { FirebaseContext } from '../../store/firebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const history=useHistory()
  const[username,setuserName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")
  const{firebase}=useContext(FirebaseContext)

  const changePage=()=>{
    history.push('/login')
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   // Assuming you are using React state to hold the values for email, password, and username
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       return result.user.updateProfile({ displayName: username });
  //     })
  //     .then(() => {
  //       console.log('User created successfully');
  //       // You can redirect the user or update the state after successful signup
  //     })
  //     .catch((error) => {
  //       console.error('Error creating user:', error.message);
  //       // Handle the error, maybe show an error message to the user
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username }).then(() => {
          firebase.firestore().collection('users').add({
            id: result.user.uid,
            username: username,
            phone: phone
          }).then(() => {
            console.log(firebase)
            alert("Registration Sucessfull")
            history.push('/login');
          });
        });
      })
      .catch((error) => {
        console.log(error.message)
      });
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(event)=>setuserName(event.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(event)=>setPhone(event.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
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
          <button>Signup</button>
        </form>
        <a onClick={changePage}>Login</a>
      </div>
    </div>
  );
}
