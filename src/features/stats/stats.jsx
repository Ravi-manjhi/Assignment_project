import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function Stats() {
  return (
    <>
      <Stat
        title="Earning"
        color="#B6FFFA"
        textColor="#2febde"
        icon={<HiOutlineBriefcase />}
        value={"$198k"}
      />
      <Stat
        title="Order"
        color="#FF6AC2"
        textColor="#e42996"
        icon={<HiOutlineCalendarDays />}
        value={"$1.9k"}
      />
      <Stat
        title="Balance"
        color="#9F91CC"
        textColor="#593cb8"
        icon={<HiOutlineChartBar />}
        value={"$198k"}
      />
      <Stat
        title="Total Sales"
        color="#c47587"
        textColor="#c40733"
        icon={<HiOutlineBanknotes />}
        value={"$98k"}
      />
    </>
  );
}
