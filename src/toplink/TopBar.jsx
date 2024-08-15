import './topbar.css';
import profilePic from '../assets/profile-pic.jpg';

export default function TopBar() {
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
            <li className='toplinkList'>HOME</li>
            <li className='toplinkList'>ABOUT</li>
            <li className='toplinkList'>CONTACT</li>
            <li className='toplinkList'>WRITE</li>
            <li className='toplinkList'>LOGOUT</li>
          </ul>
        </div>
        <div className='topRight'>
           <img src={profilePic} alt="" />
           <span className='searchIcon'><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
    </div>
  )
}
