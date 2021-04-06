import { useState } from "react";
import './App.css';
import Nav from './Components/Nav';

function App() {

  const [admin, setAdmin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);



  return (
    <div className="App">
    <Nav 
    admin={admin}
        loginStatus={loginStatus}
    />

    </div>
  );
}

export default App;
