import "./barChart.scss";
import {
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  XAxis,
} from "recharts";

const data = {
  title: "Overview",
  color: "#7577ee",
  dataKey: "visit",
  chartData: [
    {
      name: "January",
      visit: 4000,
    },
    {
      name: "Feb",
      visit: 3000,
    },
    {
      name: "Mar",
      visit: 2000,
    },
    {
      name: "Apr",
      visit: 2780,
    },
    {
      name: "May",
      visit: 1890,
    },
    {
      name: "Jun",
      visit: 2390,
    },
    {
      name: "July",
      visit: 3490,
    },
    {
      name: "Aug",
      visit: 3490,
    },
    {
      name: "Sept",
      visit: 3690,
    },
    {
      name: "Oct",
      visit: 3890,
    },
    {
      name: "Nov",
      visit: 3100,
    },
    {
      name: "dec",
      visit: 2390,
    },
  ],
};

export default function BarChartBox() {
  return (
    <div className="barChartBox">
      <div className="barTitle">
        <h1>{data.title}</h1>
        <p>Monthly Earning</p>
      </div>

      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <BarChart data={data.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#d9e1f0", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <YAxis name="name" />
            <XAxis dataKey="name" />
            <Bar dataKey={data.dataKey} fill={data.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
