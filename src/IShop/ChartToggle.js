// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "Jan", sales: 400 },
//   { name: "Feb", sales: 300 },
//   { name: "Mar", sales: 500 },
//   { name: "Apr", sales: 200 },
//   { name: "May", sales: 700 },
// ];

// const BarGraph = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <BarChart
//         data={data}
//         margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="sales" fill="#8884d8" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default BarGraph;


import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 200 },
  { name: "May", sales: 700 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

const ChartToggle = () => {
  const [isBarChart, setIsBarChart] = useState(true);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <button
        onClick={() => setIsBarChart(!isBarChart)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {isBarChart ? "Switch to Pie Chart" : "Switch to Bar Chart"}
      </button>

      <ResponsiveContainer width="80%" height={300}>
        {isBarChart ? (
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        ) : (
          <PieChart>
            <Pie
              data={data}
              dataKey="sales"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartToggle;
