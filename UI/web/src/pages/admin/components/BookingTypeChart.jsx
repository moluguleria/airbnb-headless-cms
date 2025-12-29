import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

export default function BookingTypeChart({ data = [] }) {
  // ✅ Prevent crash
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="admin-db-panel">
        <h3>Bookings by Type</h3>
        <p style={{ padding: "20px", color: "#666" }}>
          No booking data available
        </p>
      </div>
    );
  }

  return (
    <div className="admin-db-panel">
      <h3>Bookings by Type</h3>

      <div style={{ height: 240, marginTop: 12 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
