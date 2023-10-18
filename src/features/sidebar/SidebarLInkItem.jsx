import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function SidebarLInkItem({ Icon, url, title }) {
  return (
    <li className="listItem">
      <NavLink to={url} className="link">
        <div className="linkInfo">
          <Icon />
          <span className="page tooltip">{title}</span>
          <span className="toolTipText">{title}</span>
        </div>
        <MdOutlineKeyboardArrowRight className="arrow" />
      </NavLink>
    </li>
  );
}
