import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useParams } from 'react-router-dom';

function UserProfile () {

  const {id} = useParams();

  return (
    <>
      <h2>User Profile</h2>
      <p>User Id: {id}</p>
    </>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Login(props) {
  
  return (
    <>
    <h2>Login</h2>
    <button onClick={() => props.set(true)}>login</button>
    </>
    
  );
}

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/user/:id">
          <UserProfile />
        </Route>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login"/>}
        </Route>
        <Route path="/login" >
          <Login set={ setLoggedIn } login={ loggedIn }/>
        </Route>
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
