import "./settings.css";
import About from "../../components/about/About";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State for delete success message

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setTimeout(() => {
      window.location.href = "/";
    }, 2000);  
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete("/users/" + user._id, {
        data: { userId: user._id },
      });
      setDeleteSuccess(true);
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.error("Error deleting account:", err);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="updateTitle">
          <span className="updateAccount">Update Your Account</span>
          <span className="deleteAccount" onClick={handleDelete}>
            Delete Account
          </span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="profileSettings">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="profileIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="updateBtn" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
          {deleteSuccess && (
            <span
              style={{ color: "red", textAlign: "center", marginTop: "20px" }}
            >
              Your account has been deleted.
            </span>
          )}
        </form>
      </div>
      <About />
    </div>
  );
}
