import './topbar.css';
//import profilePic from '../assets/profile-pic.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {Context} from "../../context/Context";

export default function TopBar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT"});
  }
  
  return (
    <div className='top'>
        <div className='topLeft'>

          <i className="topbarIcon fa-solid fa-envelope"></i>
          <i className="topbarIcon fa-brands fa-square-facebook"></i>
          <i className="topbarIcon fa-brands fa-square-instagram"></i>
          <i className="topbarIcon fa-brands fa-square-x-twitter"></i>
        </div>
        <div className='topCenter'>
          <ul className='topLinks'>
            <li className='toplinkList'><Link className='link' to="/">HOME</Link></li>
            <li className='toplinkList'> <Link className='link' to="/">ABOUT </Link></li>
            <li className='toplinkList'> <Link className='link' to="/">CONTACT</Link></li>
            <li className='toplinkList'> <Link className='link' to="/write">WRITE </Link></li>
            <li className='toplinkList' onClick={handleLogout}> {user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className='topRight'>
          {
          user ? (
           <img src={user.profilePic} alt="" />
          ) : (
            <ul className='topLinks'>
          <li className='toplinkList'>
            <Link className='link' to="/login">LOGIN</Link></li>
            <li className='toplinkList'>
          <Link className='link' to="/register">REGISTER</Link></li>
          </ul>
          )
        }
           <span className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    </div>
  )
}