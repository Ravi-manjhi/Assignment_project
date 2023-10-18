import "./home.scss";
import Stats from "../../features/stats/Stats";
import BarChartBox from "../../features/barChart/BarChartBox";
import PieChartBox from "../../features/pieChart/PieChartBox";
import SellingProduct from "../../features/sellingProduct/SellingProduct";

export default function Home() {
  return (
    <div className="home">
      <div className="homeStats">
        <Stats />
      </div>
      <div className="HomeCharts">
        <BarChartBox />
        <PieChartBox />
      </div>
      <div className="sell">
        <SellingProduct />
      </div>
    </div>
  );
}
