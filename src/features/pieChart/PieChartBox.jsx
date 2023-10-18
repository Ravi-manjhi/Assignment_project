import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 600, color: "#00C9FE" },
  { name: "Laptop", value: 550, color: "#FFBB28" },
  { name: "Tablet", value: 300, color: "#FF8042" },
];

export default function PieChartBox() {
  return (
    <div className="pieChartBox">
      <h1>Customers</h1>

      <div className="pieCharts">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              cursor={{ fill: "none" }}
              contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="pieStats">
        {data.map((item) => (
          <div key={item.name} className="stat">
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
