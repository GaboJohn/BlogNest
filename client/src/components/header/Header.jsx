import homePic from '../assets/home-pic.jpg';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
       <div className='titles'>
        <span className='Title'>BlogNest</span>
        <span className='subtitle'>Connect Write Inspire </span>
       </div>
       <img src={homePic} alt="Homeimage" />
    </div>
  )
}
