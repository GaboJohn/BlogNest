import Homepage from './components/homepages/Homepage';
/*import Mypost from './components/homepages/myposts/Mypost';*/
//import Login from './components/login/Login';
import Settings from './components/settings/Settings';
import TopBar from './components/toplink/TopBar';
import Register from './components/login/Register';
import Write from './components/write/Write';
//import About from './components/about/About';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
//import Singlepost from './components/singlePost/Singlepost';
import { useContext } from 'react';
import {Context} from "./context/Context";

function App() {
  const user = useContext(Context);
  return (
    <Router>
      <TopBar />
    <Routes>
    <Route exact path="/">
      <Homepage />
      </Route>
      <Route path="/register">{user ? <Homepage /> : <Register />}</Route>
        <Route path="/login">{user ? <Homepage /> : <login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
        <single />
    </Route>
    </Routes>
    </Router>
  );
}

export default App;
