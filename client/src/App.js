import Homepage from './components/homepages/Homepage';
import Mypost from './components/homepages/myposts/Mypost';
import Login from './components/login/Login';
import Settings from './components/settings/Settings';
import TopBar from './components/toplink/TopBar';
import Register from './components/login/Register';
import Write from './components/write/Write';
import About from './components/about/About';
import { BrowserRouter as Router, Route,
   Routes
} from "react-router-dom";
import { useContext } from 'react';
import { Context } from "./context/Context";
//import Singlepost from './components/singlePost/Singlepost';

function App() {
  const { user } = useContext(Context);
  
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route  path='/about' element={<About />}/>
      <Route path="/register" element={ user ? <Homepage/>:
        <Register />} />
      <Route path="/login" element={user ? <Homepage/>
       : <Login />} />
      <Route path="/write" element={user ? <Write /> :
        <Register/>} />
      <Route path="/settings" element={user ? <Settings />
       : <Register/>} />
      <Route path="/post/:postId" element={<Mypost />} />
    </Routes>
    </Router>
  );
}

export default App;