import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 210000 },
  { month: "Mar", revenue: 240000 },
  { month: "Apr", revenue: 220000 },
  { month: "May", revenue: 260000 },
  { month: "Jun", revenue: 300000 },
];

export default function RevenueChart() {
  return (
    <div className="admin-db-panel">
      <h3>Revenue Trend</h3>

      <div style={{ height: 280, marginTop: 12 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#16a34a"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
