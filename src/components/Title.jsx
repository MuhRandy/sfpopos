import "./Title.css";
import { NavLink } from "react-router-dom";

export default function Title() {
  const active = ({ isActive }) => (isActive ? "nav-link-active" : "nav-link");
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">
          San Francisco Privately Owned Public Open Spaces
        </div>

        <div>
          <NavLink className={active} to="/">
            List
          </NavLink>
          <NavLink className={active} to="/about">
            About
          </NavLink>
        </div>
      </header>
    </div>
  );
}
