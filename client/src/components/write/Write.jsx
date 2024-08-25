import './write.css';

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' 
        src="https://images.pexels.com/photos/206299/pexels-photo-206299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <form className="writeForm">
            <div className="writeformGroup">
                <label htmlFor="fileInput">
                    <i className=" writeIcon
                    fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeformGroup">
                <textarea placeholder='Tell us your story...' 
                type='text' 
                className='writeInput writeText'>   
                </textarea>
                <button className='writeSubmit'>
                    Publish
                </button>
            </div>
        </form>
    </div>
  )
}