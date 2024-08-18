import Homepage from './components/homepages/Homepage';
/*import Mypost from './components/homepages/myposts/Mypost';*/
import Login from './components/login/Login';
import Settings from './components/settings/Settings';
import TopBar from './components/toplink/TopBar';
import Register from './components/login/Register';
import Write from './components/write/Write';
import { BrowserRouter as Router, Route,
   Routes
} from "react-router-dom";
import Singlepost from './components/singlePost/Singlepost';

function App() {
  const user = false;
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/register" element={ user ? <Homepage/>:
        <Register />} />
      <Route path="/login" element={user ? <Homepage/>
       : <Login />} />
      <Route path="/write" element={user ? <Write /> :
        <Register/>} />
      <Route path="/settings" element={user ? <Settings />
       : <Register/>} />
      <Route path="/singlePost" element={<Singlepost />} />
    </Routes>
    </Router>
  );
}

export default App;
