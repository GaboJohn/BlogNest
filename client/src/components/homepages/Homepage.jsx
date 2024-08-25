import Header from "../../components/header/Header";
import Posts from '../../components/posts/Posts';
import About from "../../components/about/About";
import './homepage.css';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Homepage() {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    }
    fetchPosts();
  },[])
  return (
        <>
        <Header />
      <div className="home">
        <div className="post">
         <Posts posts={posts}/>
         </div>
         <div className="Sidelink">
         <About />
         </div>
      </div>
        </>
  )
}