import { useLocation } from "react-router-dom";
import './singlepost.css';
//import postPic from "../assets/post.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Singlepost() {
 const location = useLocation();
  const path = (location.pathname.split("/")[2]);
  const [post, setPost] =useState({});
  
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    };
    getPost(); 
  }, [path])

  return (
    <div className='single'>
        <div className="postWrapper">
          {post.photo && (
          <img src={post.photo} alt="" />
          )}
          <h1 className='postTitle'>
            {post.title}
            <div className="postEdit">
              <i className="editIcon fa-regular fa-pen-to-square"></i>
              <i className="editIcon fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="postInfo">
            <span className="postAuthor">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
               <b>{post.username}</b>
              </Link>
            </span>

            <span className="postDate">
              {new Date(post.createdAt).toDateString()} 
            </span>
          </div>
          <p className='postDescr'>
            {post.desc}
          </p>
        </div>
    </div>
  )
}
