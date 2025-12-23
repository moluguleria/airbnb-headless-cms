import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Active", value: 1122 },
  { name: "Inactive", value: 162 },
  { name: "Blocked", value: 4 },
];

export default function ListingStatusChart() {
  return (
    <div className="admin-db-panel">
      <h3>Listings Status</h3>

      <div style={{ height: 220, marginTop: 12 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
