import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart({ data = [] }) {
  // 🔥 Prevent crash
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="admin-db-panel">
        <h3>Revenue Trend</h3>
        <p style={{ padding: "20px", color: "#666" }}>
          No revenue data available
        </p>
      </div>
    );
  }

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
