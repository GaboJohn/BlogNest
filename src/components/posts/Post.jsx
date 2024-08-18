import foodPic from '../assets/food-pic.jpg';
import './post.css';

export default function Post() {
  return (
    <div className='posts'>
        <img src={foodPic} alt="" />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCat">Food</span>
                <span className="postCat">Sports</span>
            </div>
            <span className="postTitle">
            Explore recipes 
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescr'>
          Dive into the world of flavors with our Food category, 
          where culinary creativity meets delicious discoveries. Explore recipes, 
          cooking tips, and food stories that will inspire your next meal. Whether 
          you're a seasoned chef or a kitchen novice, you'll 
          find something to satisfy your taste buds and ignite your passion for food.
          Dive into the world of flavors with our Food category, 
          where culinary creativity meets delicious discoveries. Explore recipes, 
          cooking tips, and food stories that will inspire your next meal. Whether 
          you're a seasoned chef or a kitchen novice, you'll 
          find something to satisfy your taste buds and ignite your passion for food.
        </p>
    </div>
  )
}
