import logo from "../images/logo.svg";
import { PageLinks } from "./PageLinks.js";
import { SocialLinks } from "./SocialLinks.js";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks ulClass="nav-links" aClass="nav-link"></PageLinks>
        <SocialLinks ulClass="nav-icons" aClass="nav-icon"></SocialLinks>
      </div>
    </nav>
  );
}
