import Header from "../../components/header/Header";
import Post from '../../components/post/Posts';
import About from "../../components/about/About";
import './homepage.css';

export default function Homepage() {
  return (
        <>
        <Header />
      <div className="home">
        <div className="post">
         <Post />
         </div>
         <div className="Sidelink">
         <About />
         </div>
      </div>
        </>
  )
}
