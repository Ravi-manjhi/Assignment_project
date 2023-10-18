import {
  MdOutlineHexagon,
  MdOutlineAddChart,
  MdOutlineSensorOccupied,
  MdContactSupport,
  MdOutlineQueuePlayNext,
  MdAirlineSeatReclineNormal,
} from "react-icons/md";
import "./sidebar.scss";
import SidebarLInkItem from "./SidebarLInkItem";
import SidebarUser from "./SidebarUser";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebarContainer">
        <div className="title">
          <MdOutlineHexagon />
          <h1>Dashboard</h1>
        </div>

        <div className="navigation">
          <ul className="list">
            <SidebarLInkItem
              url="/"
              Icon={MdOutlineAddChart}
              title="Dashboard"
            />
            <SidebarLInkItem
              url="product"
              Icon={MdOutlineQueuePlayNext}
              title="Product"
            />
            <SidebarLInkItem
              url="customer"
              Icon={MdAirlineSeatReclineNormal}
              title="Customer"
            />
            <SidebarLInkItem
              url="income"
              Icon={MdOutlineAddChart}
              title="Income"
            />
            <SidebarLInkItem
              url="promote"
              Icon={MdOutlineSensorOccupied}
              title="Promote"
            />
            <SidebarLInkItem url="help" Icon={MdContactSupport} title="Help" />
          </ul>
        </div>
      </div>

      <SidebarUser />
    </aside>
  );
}
