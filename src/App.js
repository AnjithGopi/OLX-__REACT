import React,{useContext,useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import ViewPost from "./Pages/ViewPost"
import Post from './store/postContext';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/firebaseContext';

function App() {

  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(()=>{
    
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

 
  return (
    <div>
      <Post>

      <Router>
      <Switch>
          {/* Define your routes here */}
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login}/>
          <Route path="/create" component={Create}/>
          <Route path="/view" component={ViewPost}/>
          {/* Add other routes here as needed */}
        </Switch>

      </Router>

      </Post>

      
     
    </div>
  );
}

export default App;
