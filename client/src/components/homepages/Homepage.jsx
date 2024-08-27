import Header from "../../components/header/Header";
import Posts from '../../components/posts/Posts';
import About from "../../components/about/About";
import './homepage.css';
import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Homepage() {
 const [posts, setPosts] = useState([]);
 const { search } = useLocation();
 

 useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    }
    fetchPosts();
  },[search])
  return (
        <>
        <Header />
      <div className="home">
        <div className="post">
         <Posts posts={posts}/>
         </div>
         <div className="about-section-container">
         <About />
         </div>
      </div>
        </>
  )
}