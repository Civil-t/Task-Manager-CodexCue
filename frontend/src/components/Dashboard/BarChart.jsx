import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

// Example data
const data = [
  { name: "Mon", tasks: 92 },
  { name: "Tue", tasks: 41 },
  { name: "Wed", tasks: 78 },
  { name: "Thu", tasks: 23 },
  { name: "Fri", tasks: 67 },
];

// Custom tooltip to match the screenshot style
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          border: "1px solid #333",
          padding: "10px",
        }}
      >
        <p>{`${label} : ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

// Custom label to display percentage inside the bar
const CustomLabel = ({ x, y, width, height, value }) => {
  const radius = 10;
  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      fill={value > 50 ? "#fff" : "#000"}
      textAnchor="middle"
      dy={4}
      fontSize={14}
      fontWeight="bold"
    >
      {`${value}%`}
    </text>
  );
};

const TaskBarChart = () => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        padding: "2px",
        width: "96%",
        marginLeft: "1%",

        borderRadius: "10px",
        border: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "#ccc",
          borderRadius: "10px",
        }}
      >
        <h4 style={{ textAlign: "center" }}>Activity</h4>
        <ResponsiveContainer width="100%" height={172}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 30, bottom: 1 }}
          >
            <XAxis dataKey="name" tick={{ fill: "#888", fontSize: 12 }} />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="tasks" barSize={40} radius={[5, 5, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.tasks > 50
                      ? "#444"
                      : entry.tasks > 0
                      ? "#888"
                      : "#222"
                  }
                />
              ))}
              <LabelList
                dataKey="tasks"
                content={({ x, y, width, height, value }) => (
                  <text
                    x={x + width / 2}
                    y={y + height / 2}
                    fill={value > 50 ? "#fff" : "#000"}
                    textAnchor="middle"
                    dy={4}
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {`${value}%`}
                  </text>
                )}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TaskBarChart;
