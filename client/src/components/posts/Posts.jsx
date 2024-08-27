import Post from "../post/Post";
import './posts.css';

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      <div className="row">
      {posts.map((p, index) => (
        <Post key={p.id || index} post={p}/>
      ))}
     </div>   
    </div>
  );
}
