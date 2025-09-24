// src/pages/worker-performance/index.jsx
import React, { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Icon from "../../components/AppIcon";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
} from "recharts";

const WorkerPerformance = () => {
  // ✅ Mock Data
  const earningsTrend = [
    { day: "W1", value: 2500 },
    { day: "W2", value: 2800 },
    { day: "W3", value: 3100 },
    { day: "W4", value: 4100 },
  ];
  const taskSuccess = 97;

  const resolved = 7;
  const unresolved = 3;
  const totalComplaints = resolved + unresolved;
  const resolvedPercent = Math.round((resolved / totalComplaints) * 100);

  const complaintData = [
    { name: "Resolved", value: resolved },
    { name: "Unresolved", value: unresolved },
  ];

  let resolvedColor = "#16a34a";
  if (resolvedPercent < 50) resolvedColor = "#dc2626";
  else if (resolvedPercent < 80) resolvedColor = "#facc15";
  const complaintColors = [resolvedColor, "#d1d5db"];

  const shiftData = [
    { week: "W1", shifts: 3 },
    { week: "W2", shifts: 4 },
    { week: "W3", shifts: 5 },
    { week: "W4", shifts: 3 },
  ];

  // ✅ Attendance Data
  const [attendanceData, setAttendanceData] = useState([
    { day: "Mon", status: "On Time" },
    { day: "Tue", status: "On Time" },
    { day: "Wed", status: "Late" },
    { day: "Thu", status: "On Time" },
    { day: "Fri", status: "Late" },
    { day: "Sat", status: "On Time" },
    { day: "Sun", status: "On Time" },
  ]);

  const [checkedIn, setCheckedIn] = useState(false);

  const handleCheckIn = () => {
    if (checkedIn) return;
    const today = new Date().toLocaleString("en-US", { weekday: "short" });
    const updated = attendanceData.map((d) =>
      d.day.startsWith(today.slice(0, 3)) ? { ...d, status: "On Time" } : d
    );
    setAttendanceData(updated);
    setCheckedIn(true);
  };

  // ✅ Eco-Impact
  const ecoImpact = {
    waste: 320,
    plastic: 120,
    compost: 80,
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* ✅ Title Section */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-5 shadow-sm animate-fade-in">
          <h1 className="text-3xl font-extrabold text-green-800 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white shadow">
              <Icon name="BarChart" size={20} />
            </span>
            Worker Performance
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Track your <span className="font-semibold text-green-700">efficiency</span>,{" "}
            <span className="font-semibold text-green-700">earnings</span>, and{" "}
            <span className="font-semibold text-green-700">improvements</span> over time 🚀
          </p>
        </div>

        {/* ✅ Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Earnings */}
          <div
            className="relative p-4 bg-gradient-to-br from-indigo-50 to-white border border-border rounded-lg text-center shadow group"
            title="Your total salary + incentives earned this month"
          >
            <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-indigo-600" />
            <div className="text-xl font-bold text-primary">₹12,500</div>
            <div className="text-sm text-muted-foreground mb-2">Earnings This Month</div>
            <div style={{ width: "100%", height: 60 }}>
              <ResponsiveContainer>
                <LineChart data={earningsTrend}>
                  <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Task Success */}
          <div
            className="relative p-4 bg-gradient-to-br from-green-50 to-white border border-border rounded-lg text-center shadow group"
            title="Percentage of tasks completed correctly"
          >
            <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-green-600" />
            <div style={{ width: "100%", height: 120 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Success", value: taskSuccess },
                      { name: "Remaining", value: 100 - taskSuccess },
                    ]}
                    innerRadius={30}
                    outerRadius={50}
                    dataKey="value"
                  >
                    <Cell fill="#16a34a" />
                    <Cell fill="#d1d5db" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-lg font-bold text-success">{taskSuccess}%</div>
            <div className="text-sm text-muted-foreground">Task Success Rate</div>
          </div>

          {/* Complaint Resolution */}
          <div
            className="relative p-4 bg-gradient-to-br from-yellow-50 to-white border border-border rounded-lg text-center shadow group"
            title="How many citizen complaints you resolved"
          >
            <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-yellow-600" />
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Complaint Resolution</h3>
            <div style={{ width: "100%", height: 120 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={complaintData} innerRadius={30} outerRadius={50} paddingAngle={4} dataKey="value">
                    {complaintData.map((_, i) => (
                      <Cell key={`c-${i}`} fill={complaintColors[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div
              className={`text-lg font-bold ${
                resolvedPercent >= 80
                  ? "text-success"
                  : resolvedPercent >= 50
                  ? "text-yellow-500"
                  : "text-red-600"
              }`}
            >
              {resolvedPercent}% Resolved
            </div>
            <div className="text-xs text-muted-foreground">
              {resolved} of {totalComplaints} complaints
            </div>
          </div>

          {/* Extra Shifts */}
          <div
            className="relative p-4 bg-gradient-to-br from-cyan-50 to-white border border-border rounded-lg text-center shadow group"
            title="Extra work shifts you completed this month"
          >
            <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-cyan-600" />
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Extra Shifts</h3>
            <div style={{ width: "100%", height: 100 }}>
              <ResponsiveContainer>
                <BarChart data={shiftData}>
                  <XAxis dataKey="week" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Bar dataKey="shifts" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-lg font-bold text-accent">
              {shiftData.reduce((s, d) => s + d.shifts, 0)}
            </div>
            <div className="text-xs text-muted-foreground">This Month</div>
          </div>
        </div>

        {/* ✅ Route Efficiency */}
        <div
          className="relative bg-gradient-to-r from-yellow-50 to-white border border-border rounded-lg p-4 shadow group"
          title="How quickly you finish your assigned routes"
        >
          <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-yellow-600" />
          <h3 className="text-lg font-semibold mb-2">Route Efficiency</h3>
          <div className="w-full bg-muted h-4 rounded-full overflow-hidden">
            <div
              className="h-4 rounded-full transition-all"
              style={{
                width: "83%",
                backgroundColor: 83 >= 90 ? "#16a34a" : 83 >= 75 ? "#facc15" : "#dc2626",
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>83% efficiency</span>
            <span>Target: 90%</span>
          </div>
        </div>

        {/* ✅ Attendance & Punctuality */}
        <div
          className="relative bg-gradient-to-br from-indigo-50 to-white border border-border rounded-lg p-6 shadow group"
          title="Track your daily check-ins (on-time / late)"
        >
          <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-indigo-600" />
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <Icon name="Clock" size={18} className="text-indigo-600" /> Attendance & Punctuality
          </h3>
          <p className="text-sm text-muted-foreground mb-3">Your check-in record this week</p>

          <div style={{ width: "100%", height: 150 }}>
            <ResponsiveContainer>
              <BarChart data={attendanceData}>
                <XAxis dataKey="day" />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="status">
                  {attendanceData.map((d, i) => (
                    <Cell
                      key={i}
                      fill={d.status === "On Time" ? "#16a34a" : d.status === "Late" ? "#dc2626" : "#9ca3af"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`px-4 py-2 rounded-lg font-semibold shadow transition ${
                checkedIn
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {checkedIn ? "✔ Checked In Today" : "Check In for Today"}
            </button>
          </div>
        </div>

        {/* ✅ Green Champion Badges */}
        <div
          className="relative bg-gradient-to-br from-yellow-50 to-white border border-border rounded-lg p-6 shadow group"
          title="Motivational badges you earn for good work"
        >
          <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-yellow-600" />
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <Icon name="Award" size={18} className="text-yellow-500" /> Green Champion Badges
          </h3>
          <p className="text-sm text-muted-foreground mb-4">Earn badges for achievements & good practices</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 border rounded-lg bg-yellow-50 shadow">
              <span className="text-3xl">🥉</span>
              <span className="font-bold mt-2">Bronze</span>
              <span className="text-xs text-muted-foreground">No complaints (week)</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg bg-gray-50 shadow">
              <span className="text-3xl">🥈</span>
              <span className="font-bold mt-2">Silver</span>
              <span className="text-xs text-muted-foreground">100% Route Efficiency</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg bg-amber-50 shadow">
              <span className="text-3xl">🥇</span>
              <span className="font-bold mt-2">Gold</span>
              <span className="text-xs text-muted-foreground">Completed all Training</span>
            </div>
          </div>
        </div>

        {/* ✅ Eco-Impact Metrics */}
        <div
          className="relative bg-gradient-to-br from-green-50 to-white border border-border rounded-lg p-6 shadow group"
          title="Your positive contribution to the environment"
        >
          <Icon name="Info" size={14} className="absolute top-2 right-2 text-gray-400 group-hover:text-green-600" />
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
            <Icon name="Leaf" size={18} className="text-green-600" /> Eco-Impact Metrics
          </h3>
          <p className="text-sm text-muted-foreground mb-4">Your contribution to a cleaner environment 🌍</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-100 border rounded-lg shadow flex flex-col items-center">
              <span className="text-3xl">🗑</span>
              <div className="text-2xl font-bold text-green-700">{ecoImpact.waste} kg</div>
              <div className="text-sm text-muted-foreground">Waste Collected</div>
            </div>
            <div className="p-4 bg-blue-100 border rounded-lg shadow flex flex-col items-center">
              <span className="text-3xl">♻</span>
              <div className="text-2xl font-bold text-blue-700">{ecoImpact.plastic} kg</div>
              <div className="text-sm text-muted-foreground">Plastic Diverted</div>
            </div>
            <div className="p-4 bg-yellow-100 border rounded-lg shadow flex flex-col items-center">
              <span className="text-3xl">🌱</span>
              <div className="text-2xl font-bold text-yellow-600">{ecoImpact.compost} kg</div>
              <div className="text-sm text-muted-foreground">Organic Composted</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WorkerPerformance;
