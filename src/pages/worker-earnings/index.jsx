// src/pages/worker-earnings/index.jsx
import React, { useMemo, useState } from "react";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockDaily = [
  { day: "Mon", value: 150 },
  { day: "Tue", value: 180 },
  { day: "Wed", value: 200 },
  { day: "Thu", value: 220 },
  { day: "Fri", value: 190 },
  { day: "Sat", value: 240 },
  { day: "Sun", value: 260 },
];

export default function WorkerEarnings() {
  const [data] = useState(mockDaily);
  const totalWeek = useMemo(() => data.reduce((s, d) => s + d.value, 0), [data]);
  const today = data[data.length - 1].value;
  const monthlyEstimate = Math.round(totalWeek * 4.1);

  const [bonusProgress, setBonusProgress] = useState(34);
  const [bonusClaimed, setBonusClaimed] = useState(false);

  const handleClaimBonus = () => {
    if (bonusClaimed) return;
    setBonusClaimed(true);
    const claimed = JSON.parse(localStorage.getItem("worker_bonus_claimed") || "[]");
    localStorage.setItem(
      "worker_bonus_claimed",
      JSON.stringify([...claimed, { date: new Date().toISOString(), amount: 500 }])
    );
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
        <Icon name="Activity" size={22} />
        <span>Earnings & Incentives</span>
      </h2>
      <p className="text-muted-foreground text-sm">
        Track your daily/weekly/monthly earnings and bonus progress.
      </p>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-card border rounded text-center">
          <div className="text-xs text-muted-foreground">Today</div>
          <div className="text-2xl font-bold text-primary">₹{today}</div>
        </div>
        <div className="p-4 bg-card border rounded text-center">
          <div className="text-xs text-muted-foreground">This Week</div>
          <div className="text-2xl font-bold text-accent">₹{totalWeek}</div>
        </div>
        <div className="p-4 bg-card border rounded text-center">
          <div className="text-xs text-muted-foreground">Est. Month</div>
          <div className="text-2xl font-bold text-success">₹{monthlyEstimate}</div>
        </div>
      </div>

      {/* chart */}
      <div className="bg-card border rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Earnings (last 7 days)</h3>
        <div style={{ width: "100%", height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* bonus */}
      <div className="bg-card border rounded p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Bonus milestone</h3>
          <p className="text-sm text-muted-foreground">
            Complete <strong>50 stops</strong> in a week → <strong>₹500</strong> bonus.
          </p>
          <div className="w-64 bg-muted h-3 rounded mt-3 overflow-hidden">
            <div
              className="h-3 bg-primary"
              style={{ width: `${bonusProgress}%` }}
            />
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            {bonusProgress}% progress
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => alert("Export feature soon")}>Export</Button>
          <Button
            variant={bonusClaimed ? "outline" : "primary"}
            onClick={handleClaimBonus}
            disabled={bonusClaimed}
          >
            {bonusClaimed ? "Bonus Claimed" : "Claim Bonus"}
          </Button>
        </div>
      </div>
    </div>
  );
}
