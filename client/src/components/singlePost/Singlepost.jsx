import { useLocation } from "react-router";
import './singlepost.css';
import postPic from "../assets/post.jpg"

export default function Singlepost() {
 const location = useLocation();
  console.log(location)
  return (
    <div className='single'>
        <div className="postWrapper">
          <img src={postPic} alt="" />
          <h1 className='postTitle'>
            Lorem ipsum dolor sit amet.
            <div className="postEdit">
              <i className="editIcon fa-regular fa-pen-to-square"></i>
              <i className="editIcon fa-solid fa-trash"></i>
            </div>
          </h1>
          <div className="postInfo">
            <span className="postAuthor">
              Author: <b>Gabo</b>
            </span>
            <span className="postDate">
              1 hour ago
            </span>
          </div>
          <p className='postDescr'>
            Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Doloremque sequi quod velit iure est at, 
            tempore id, sit ad corrupti inventore adipisci quo qui facilis, 
            iste nesciunt fuga quisquam animi.
             Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Doloremque sequi quod velit iure est at, 
            tempore id, sit ad corrupti inventore adipisci quo qui facilis, 
            iste nesciunt fuga quisquam animi. Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Doloremque sequi quod velit iure est at, 
            tempore id, sit ad corrupti inventore adipisci quo qui facilis, 
            iste nesciunt fuga quisquam animi.
          </p>
        </div>
    </div>
  )
}
