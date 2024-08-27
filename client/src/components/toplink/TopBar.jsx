import "./topbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">

        <i className="sidelistIcon fa-solid fa-envelope"></i>
        <i className="sidelistIcon fa-brands fa-square-facebook"></i>
        <i className="topbarIcon fa-brands fa-twitter-square"></i>
        <i className="topbarIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topLinks">
          <li className="toplinkList">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplinkList">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="toplinkList">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="toplinkList">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplinkList" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topLinks">
            <li className="toplinkList">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplinkList">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="searchIcon fas fa-search"></i>
      </div>
    </div>
  );
}