import "./stat.scss";
import { BiUpArrowAlt } from "react-icons/bi";

function Stat({ icon, title, value, color, textColor }) {
  return (
    <div className="stat">
      <div
        className="icon"
        style={{ backgroundColor: color, color: textColor }}
      >
        {icon}
      </div>
      <h5 className="statTitle">{title}</h5>
      <p className="value">
        {value}
        <br />
        <span className="arrow">
          <span style={{ color: textColor }}>
            <BiUpArrowAlt />
            25%{" "}
          </span>
          this month
        </span>
      </p>
    </div>
  );
}

export default Stat;
