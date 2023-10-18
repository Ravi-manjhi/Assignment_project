import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function SidebarUser() {
  return (
    <div className="user">
      <div className="userContainer">
        <img
          src="https://images2.alphacoders.com/132/1325913.png"
          alt="profile"
        />
        <div className="userInfo">
          <span>ravi</span>
          <span>Project Manager</span>
        </div>
      </div>
      <MdOutlineKeyboardArrowRight />
    </div>
  );
}
