import './settings.css';
import About from '../../components/about/About';

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="updateTitle">
            <span className="updateAccount">Update Your Account</span>
            <span className="deleteAccount">Delete account</span>
          </div>
        
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="profileSettings">
            <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" />
            <label htmlFor="fileInput">
              <i className="profileIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id='fileInput' 
            style={{display:'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder='Gabo' />
          <label>Email</label>
          <input type="text" placeholder='gabojohnk@gmail.com' />
          <label>Password</label>
          <input type="password" />
          <button className="updateBtn">
            Update
          </button>
        </form>
        </div>
          <About />
    </div>
  )
}
