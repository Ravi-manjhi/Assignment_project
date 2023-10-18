import "./header.scss";
import { HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <div className="header">
      <h1 className="headerTitle">Hello Ravi👋,</h1>
      <div className="searchBar">
        <HiOutlineSearch />
        <input type="text" placeholder="search" />
      </div>
    </div>
  );
}
