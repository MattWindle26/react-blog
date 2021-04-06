import { useState, useEffect } from "react";
import './App.css';
import AddPost from "./Components/AddPost";
import Nav from './Components/Nav';
import SinglePost from "./Components/SinglePost";

function App() {

  const [admin, setAdmin] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const [allPosts, setAllPosts] = useState([])


  useEffect(() => {
    Axios.get('http://localhost:3001/posts').then((response) => {
      setAllPosts(response.data);
    });
    console.log(allPosts);
  }, []);

  return (
    <div className="App">
      <AddPost />
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
