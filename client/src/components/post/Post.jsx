import { Link } from "react-router-dom";
import './post.css';

export default function Post({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="col-lg-4 col-md6 mb-4">
    <div className='post'>
      {post.photo && 
        <img className="card-img-top" src={PF + post.photo} alt="" />
      }

        <div className="postInfo card-body">
            <div className="postCategories">
              {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}       
        </div>
         <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle card-title">
            {post.title} 
            </span>
            </Link>
            <hr />
            <span className="postDate">
             {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className='postDescr card-text'>
          {post.desc}
        </p>
    </div>
    </div>
  )
}