import foodPic from '../assets/food-pic.jpg';
import './post.css';

export default function Post() {
  return (
    <div className='posts'>
        <img src={foodPic} alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCat">Food</span>
            </div>
            <span className="postTitle">
            Explore recipes, cooking tips, and food stories that will inspire your next meal. 
            Whether you're a seasoned chef or a kitchen novice, 
            you'll find something to satisfy your taste buds and ignite 
            your passion for food.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}
