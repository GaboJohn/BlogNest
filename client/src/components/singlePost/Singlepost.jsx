import axios from "axios;"
import {useContext, useEffect, useState} from "react"
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {context} from "../../context/Context";
import './singlepost.css';
import postPIc from '../assets/post.jpg';

export default function Singlepost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] =useState({});
  const PF ="http://localhost:5000/images/";
  const {user} = useContext(context);
  conts [title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState("");
  
  useEffect(()=>{
const getPost = async ()=>{
  const res = await axios.get("/posts/"+path);
  setPost(res.data);
  setTitle(res.data.title);
  settDesc(res.data.desc);
};

getPost()
  },[path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="single">
      <div className="postWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="postTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="postTitle">
            {title}
            {post.username === user?.username && (
              <div className="postEdit">
                <i
                  className="editIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="editIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="postInfo">
          <span className="postAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="postDescr"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="postDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="postButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}