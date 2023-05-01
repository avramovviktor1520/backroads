import { socialLinks } from "../data";

export const SocialLinks = ({ ulClass, aClass }) => {
  return (
    <ul className={ulClass}>
      {socialLinks.map((sl) => {
        const { icon, key } = sl;
        return (
          <li key={key}>
            <a
              href={`https://www.${icon}.com`}
              target="_blank"
              className={aClass}
              rel="noreferrer"
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
