import { PageLinks } from "./PageLinks.js";
import { SocialLinks } from "./SocialLinks.js";

export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks ulClass="footer-links" aClass="footer-link"></PageLinks>
      <SocialLinks ulClass="footer-icons" aClass="footer-icon"></SocialLinks>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
