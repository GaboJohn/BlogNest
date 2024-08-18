import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Username</label>
            <input type="text" className='loginInput' placeholder='Enter your username...' />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...' />
            <button className="loginBtn">
                Login
            </button>
        </form>
        <p>Don't have account yet?</p>
        <button className="registerBtn">
          <Link className='link' to="/register">Register</Link>
        </button>
    </div>
  )
}
