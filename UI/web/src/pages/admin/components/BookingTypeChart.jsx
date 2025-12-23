import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Stays", value: 5200 },
  { name: "Rentals", value: 2100 },
  { name: "Experiences", value: 1192 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316"];

export default function BookingTypeChart() {
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
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
