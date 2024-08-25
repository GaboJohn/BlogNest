import { Link } from "react-router-dom";
import './post.css';

export default function Post({post}) {
  return (
    <div className='post'>
      {post.photo && (
        <img src={post.photo} alt="" />
      )}

        <div className="postInfo">
            <div className="postCategories">
              {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}       
        </div>
         <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">
            {post.title} 
            </span>
            </Link>
            <hr />
            <span className="postDate">
            {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className='postDescr'>
          {post.desc}
        </p>
    </div>
  )
}