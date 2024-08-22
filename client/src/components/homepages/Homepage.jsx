import Header from "../../components/header/Header";
import Post from '../../components/post/Posts';
import About from "../../components/about/About";
import './homepage.css';
import { useEffect, useState } from "react";
import axios from "axios"

export default function Homepage() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts();
  },[])

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
