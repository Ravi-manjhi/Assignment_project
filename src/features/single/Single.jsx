import { Button } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./single.scss";

export default function Single(props) {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <Button color="warning">Update</Button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item, index) => {
              return (
                <div className="item" key={index}>
                  <span className="itemTitle">{item[0]}:</span>
                  <span className="itemValue">{item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    background: "transparent",
                    borderRadius: "5px",
                  }}
                />
                <Legend />

                {props.chart.dataKeys.map((key, index) => (
                  <Line
                    key={index}
                    type="monotone"
                    dataKey={key.name}
                    stroke={key.color}
                    activeDot={{ r: 8 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="activity">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity, index) => (
              <li key={index}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
