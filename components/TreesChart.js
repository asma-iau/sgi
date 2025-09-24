"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { year: 2021, trees: 2000000 },
  { year: 2022, trees: 15000000 },
  { year: 2023, trees: 95000000 },
];

export default function TreesChart() {
  return (
    <div className="flex justify-center mt-12">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="trees" stroke="#16a34a" strokeWidth={3} />
      </LineChart>
    </div>
  );
}
