import Header from "../header/Header";
import Post from '../posts/Post';
import Footer from "../footer/Footer";
import './homepage.css';

export default function Homepage() {
  return (
        <>
        <Header />
      <div className="home">
        <div className="post">
         <Post />
         </div>
         <div className="footer">
         <Footer />
         </div>
      </div>
        </>
  )
}
