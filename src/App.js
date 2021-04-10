import { useState, useEffect } from "react";
import './App.css';
import Nav from './Components/Nav';
import AddPost from "./Components/AddPost";
import AllPosts from "./Components/AllPosts";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [admin, setAdmin] = useState(true);
  const [loginStatus, setLoginStatus] = useState(true);
  const [allPosts, setAllPosts] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/posts').then((response) => {
      setAllPosts(response.data);
    });
  }, []);

  return (
    <Router>
      <div className="App">
      <Nav 
        admin={admin}
        loginStatus={loginStatus}
      />
      <Switch>
        <Route exact path="/" > 
            <AllPosts
              allPosts={allPosts}
            />
        </Route>
        <Route path="/newpost" > 
          <AddPost />
        </Route>
      </Switch>

      </div>
    </Router>
  );
}

export default App;
