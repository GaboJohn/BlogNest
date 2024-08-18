import aboutPic from '../assets/about.jpg';
import './about.css';

export default function About() {  
    return (
    <div className='sidelinks'>
      <div className="sideItem">
        <span className="sideitemTitle">ABOUT US</span>
        <img src={aboutPic} alt="" />
         <p>Welcome to BlogNest, a space where ideas come to life and 
         stories are shared. Our platform is designed for those who have 
          a passion for writing, a desire to share knowledge, and an interest
          in connecting with a like-minded community.
          <br />
          Our mission is to empower everyone with a voice to easily create, 
          share, and manage their blog posts. Whether you're a seasoned blogger, 
          a tech enthusiast, or just someone with a story to tell, we provide the 
          tools you need to express your thoughts and ideas.
          </p>
      </div>
      <div className="sideItem">
        <span className="sideitemTitle">
          CATEGORIES
        </span>
        <ul className='sideList'>
          <li className='sidelistItem'>Sports</li>
          <li className='sidelistItem'>Food</li>
          <li className='sidelistItem'>Tech</li>
          <li className='sidelistItem'>Lifestyle</li>
          <li className='sidelistItem'>Music</li>
          <li className='sidelistItem'>Nature</li>
        </ul>
      </div>
      <div className="sideItem">
        <span className="sideitemTitle">FOLLOW US</span>
        <span className="sideSocials">
          <i className="sidelistIcon fa-solid fa-envelope"></i>
          <i className="sidelistIcon fa-brands fa-square-facebook"></i>
          <i className="sidelistIcon fa-brands fa-square-instagram"></i>
          <i className="sidelistIcon fa-brands fa-square-x-twitter"></i>
          </span>
      </div>
    </div>
  )
}