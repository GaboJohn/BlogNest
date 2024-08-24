import Header from "../../components/header/Header";
import Post from '../../components/post/Post';
import About from "../../components/about/About";
import './homepage.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export default function Homepage() {
  const [posts,setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" +search);
      setPosts(res.data);
    }
    fetchPosts();
  },[search])
  
  return (
        <>
        <Header />
      <div className="home">
        <div className="post">
         <Post  posts={posts}/>
         </div>
         <div className="Sidelink">
         <About />
         </div>
      </div>
        </>
  )
}
