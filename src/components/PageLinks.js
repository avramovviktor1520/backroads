import { pageLinks } from "../data";

export const PageLinks = ({ ulClass, aClass }) => {
  return (
    <ul className={ulClass}>
      {pageLinks.map((pl) => {
        const { href, key } = pl;
        return (
          <li key={key}>
            <a className={aClass} href={`#${href}`}>
              {href}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
