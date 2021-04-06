import { useState } from "react";
import './App.css';
import Nav from './Components/Nav';
import SinglePost from "./Components/SinglePost";

function App() {

  const [admin, setAdmin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);



  return (
    <div className="App">
    <Nav 
      admin={admin}
      loginStatus={loginStatus}
    />
    <div className="single-post-wrapper">
        <SinglePost />
    </div>


    </div>
  );
}

export default App;
