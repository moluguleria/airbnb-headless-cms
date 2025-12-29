import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ListingStatusChart({ data = [] }) {
  // ✅ Prevent crash
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="admin-db-panel">
        <h3>Listings Status</h3>
        <p style={{ padding: "20px", color: "#666" }}>
          No listing status data available
        </p>
      </div>
    );
  }

  return (
    <div className="admin-db-panel">
      <h3>Listings Status</h3>

      <div style={{ height: 220, marginTop: 12 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#6366f1"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
