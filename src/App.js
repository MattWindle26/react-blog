import { useState, useEffect } from "react";
import './App.css';
import AddPost from "./Components/AddPost";
import Nav from './Components/Nav';
import Axios from "axios";
import AllPosts from "./Components/AllPosts";

function App() {

  const [admin, setAdmin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [allPosts, setAllPosts] = useState([])


  useEffect(() => {
    Axios.get('http://localhost:3001/posts').then((response) => {
      setAllPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <AddPost />
    <Nav 
      admin={admin}
      loginStatus={loginStatus}
    />
    <AllPosts 
        allPosts={allPosts}
    />
    </div>
  );
}

export default App;
