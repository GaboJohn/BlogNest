import homePic from '../assets/home-pic.jpg';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
       <div className='titles'>
        <span className='subTitle'>BlogNest</span>
       </div>
       <img src={homePic} alt="Homeimage" />
    </div>
  )
}
