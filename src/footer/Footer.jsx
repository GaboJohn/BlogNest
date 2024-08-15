import aboutPic from '../assets/about.jpg';
import './footer.css';

export default function Footer() {  
    return (
    <div className='footer'>
      <div className="footerItem">
        <span className="footerItemTitle">ABOUT US</span>
        <img src={aboutPic} alt="" />
         <p>Welcome to BlogNest, a space where ideas come to life and 
         stories are shared. Our platform is designed for those who have 
          a passion for writing, a desire to share knowledge, and an interest
          in connecting with a like-minded community.
          <br />
          
          </p>
      </div>
      <div className="footerItem">
        <span className="footerItemTitle">
          CATEGORIES
        </span>
        <ul className='footerList'>
          <li className='footerlistItem'>Sports</li>
          <li className='footerlistItem'>Food</li>
          <li className='footerlistItem'>Tech</li>
          <li className='footerlistItem'>Lifestyle</li>
          <li className='footerlistItem'>Music</li>
          <li className='footerlistItem'>Nature</li>
        </ul>
      </div>
      <div className="footerItem">
        <span className="footerItemTitle">FOLLOW US</span>
        <span className="footerSocials">
          <i className="footerIcon fa-solid fa-envelope"></i>
          <i className="footerIcon fa-brands fa-square-facebook"></i>
          <i className="footerIcon fa-brands fa-square-instagram"></i>
          <i className="footerIcon fa-brands fa-square-x-twitter"></i>
          </span>
      </div>
    </div>
  )
}

