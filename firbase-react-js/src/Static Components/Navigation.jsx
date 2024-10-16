import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="navigation">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="navigation-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-page">Create Card</Link>
            </li>
            <li>
              <Link to="/edit-page">Edit Me</Link>
            </li>
            <li>
              <Link to="/upload-page">Upload Page</Link>
            </li>
            <li>Coming Soon</li>
          </ul>
        </div>
        <div className="sign-buttons">
          <button id="login-btn">Log in</button>
          <button>Sign-Up</button>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
