


// src/pages/worker-benefits/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Icon from "../../components/AppIcon";

const categories = ["All", "Bonuses", "Allowances", "Training Certificates", "Health & Safety"];

const initialItems = [
  { id: 1, title: "₹500 Bonus", description: "For completing 50 stops this week", category: "Bonuses", progress: 80, amount: 500 },
  { id: 2, title: "Food Coupons", description: "Monthly meal allowance provided", category: "Allowances", coupons: 5 },
  { id: 3, title: "Insurance Cover", description: "₹2,00,000 accident insurance active", category: "Health & Safety", policyId: "POL-12345" },
  { id: 4, title: "Safety Kit", description: "Includes gloves, mask, shoes", category: "Health & Safety", kitIncluded: true },
  { id: 5, title: "Training Certificate", description: "Safe Waste Handling completed", category: "Training Certificates" },
];

const LS_KEYS = {
  CLAIMED_BONUSES: "ww_claimed_bonuses",
  COUPON_BALANCE: "ww_coupon_balance",
  SAFETY_REQUESTS: "ww_safety_requests",
  TRAINING_CERTS: "ww_training_certs",
  NOTIFICATIONS: "ww_notifications",
};

export default function WorkerBenefits() {
  const [active, setActive] = useState("All");
  const [items] = useState(initialItems);

  const [claimedBonuses, setClaimedBonuses] = useState(() => JSON.parse(localStorage.getItem(LS_KEYS.CLAIMED_BONUSES) || "[]"));
  const [couponBalance, setCouponBalance] = useState(() => {
    const stored = parseInt(localStorage.getItem(LS_KEYS.COUPON_BALANCE), 10);
    return Number.isFinite(stored) ? stored : (initialItems.find(i => i.category === "Allowances" && i.coupons)?.coupons || 0);
  });
  const [safetyRequests, setSafetyRequests] = useState(() => JSON.parse(localStorage.getItem(LS_KEYS.SAFETY_REQUESTS) || "[]"));
  const [trainingCerts, setTrainingCerts] = useState(() => JSON.parse(localStorage.getItem(LS_KEYS.TRAINING_CERTS) || "[]"));
  const [notifications, setNotifications] = useState(() => JSON.parse(localStorage.getItem(LS_KEYS.NOTIFICATIONS) || "[]"));

  const [feedback, setFeedback] = useState("");
  const [notifTab, setNotifTab] = useState("All");

  // persist
  useEffect(() => { localStorage.setItem(LS_KEYS.CLAIMED_BONUSES, JSON.stringify(claimedBonuses)); }, [claimedBonuses]);
  useEffect(() => { localStorage.setItem(LS_KEYS.COUPON_BALANCE, String(couponBalance)); }, [couponBalance]);
  useEffect(() => { localStorage.setItem(LS_KEYS.SAFETY_REQUESTS, JSON.stringify(safetyRequests)); }, [safetyRequests]);
  useEffect(() => { localStorage.setItem(LS_KEYS.TRAINING_CERTS, JSON.stringify(trainingCerts)); }, [trainingCerts]);
  useEffect(() => { localStorage.setItem(LS_KEYS.NOTIFICATIONS, JSON.stringify(notifications)); }, [notifications]);

  const filtered = useMemo(() => (active === "All" ? items : items.filter((i) => i.category === active)), [active, items]);

  const logNotification = (type, message) => {
    const note = { id: Date.now(), type, message, time: new Date().toLocaleString() };
    setNotifications(prev => [note, ...prev].slice(0, 10));
  };

  // --- actions
  const handleClaimBonus = (bonusItem) => {
    if (!bonusItem || claimedBonuses.includes(bonusItem.id)) return;
    if (bonusItem.progress < 100) return;

    setClaimedBonuses(prev => [...prev, bonusItem.id]);
    setFeedback(`🎉 Bonus ₹${bonusItem.amount} claimed!`);
    logNotification("Email", `Bonus of ₹${bonusItem.amount} has been credited and a confirmation email was sent.`);
    setTimeout(() => setFeedback(""), 2500);
  };

  const handleRedeemCoupon = () => {
    if (couponBalance <= 0) {
      setFeedback("⚠ No coupons left to redeem.");
      return;
    }
    setCouponBalance(prev => prev - 1);
    setFeedback("✅ Coupon redeemed — enjoy your meal!");
    logNotification("Notification", "Food coupon redeemed. Confirmation sent to your email.");
    setTimeout(() => setFeedback(""), 2000);
  };

  const handleRequestSafetyKit = () => {
    const req = { id: `req_${Date.now()}`, date: new Date().toISOString(), status: "requested" };
    setSafetyRequests(prev => [req, ...prev]);
    setFeedback("🛡 Safety kit request submitted.");
    logNotification("Email", "Your safety kit replacement request has been submitted. You'll be notified once approved.");
    setTimeout(() => setFeedback(""), 2600);
  };

  const handleDownloadCertificate = (item) => {
    const rec = { id: item.id, title: item.title, downloadedAt: new Date().toISOString() };
    setTrainingCerts(prev => [rec, ...prev]);
    logNotification("Notification", `📜 Training Certificate (${item.title}) downloaded successfully.`);
  };

  const isBonusClaimed = (id) => claimedBonuses.includes(id);

  // --- card rendering
  const renderCardControls = (item) => {
    switch (item.category) {
      case "Bonuses":
        return (
          <div className="mt-3">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-2 bg-green-500 rounded-full transition-all" style={{ width: `${item.progress}%` }} />
            </div>
            <div className="flex justify-between items-center mt-1 text-xs sm:text-sm text-muted-foreground">
              <span>{item.progress}% completed</span>
              <button
                className={`px-3 py-1 rounded-md text-sm font-medium ${
                  item.progress >= 100 && !isBonusClaimed(item.id) ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
                disabled={!(item.progress >= 100 && !isBonusClaimed(item.id))}
                onClick={() => handleClaimBonus(item)}
              >
                {isBonusClaimed(item.id) ? "Claimed" : "Claim Bonus"}
              </button>
            </div>
          </div>
        );
      case "Allowances":
        return (
          <div className="mt-3 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0">
            <div className="text-xs sm:text-sm text-muted-foreground">Remaining: {couponBalance}</div>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium ${couponBalance > 0 ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}
              onClick={handleRedeemCoupon}
              disabled={couponBalance <= 0}
            >
              Redeem Coupon
            </button>
          </div>
        );
      case "Health & Safety":
        return (
          <div className="mt-3">
            <button
              className="px-3 py-1 rounded-md text-sm font-medium bg-amber-500 text-white w-full sm:w-auto"
              onClick={handleRequestSafetyKit}
            >
              Request Replacement
            </button>
          </div>
        );
      case "Training Certificates":
        return (
          <div className="mt-3">
            <button
              className="px-3 py-1 rounded-md text-sm font-medium bg-indigo-600 text-white w-full sm:w-auto"
              onClick={() => handleDownloadCertificate(item)}
            >
              View / Download
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  // --- notification filter
  const filteredNotifs = useMemo(() => {
    if (notifTab === "All") return notifications;
    return notifications.filter((n) => n.type === notifTab);
  }, [notifications, notifTab]);

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 sm:p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-4 sm:p-6 rounded-lg shadow">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <Icon name="Gift" size={20} /> Incentives & Benefits
          </h1>
          <p className="text-xs sm:text-sm mt-1">Track your earnings, milestones, and perks</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base font-medium whitespace-nowrap ${
                active === cat ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {feedback && <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded-md shadow text-sm sm:text-base">{feedback}</div>}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 border rounded-lg bg-white shadow hover:shadow-md transition hover:scale-[1.01]"
            >
              <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                {item.category === "Bonuses" && <Icon name="DollarSign" size={16} className="text-green-600" />}
                {item.category === "Allowances" && <Icon name="Utensils" size={16} className="text-orange-500" />}
                {item.category === "Health & Safety" && <Icon name="Shield" size={16} className="text-amber-600" />}
                {item.category === "Training Certificates" && <Icon name="Award" size={16} className="text-indigo-600" />}
                {item.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{item.description}</p>
              {renderCardControls(item)}
            </div>
          ))}
        </div>

        {/* Notifications Section */}
        <div className="p-4 sm:p-5 border rounded-lg bg-white shadow">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2 sm:gap-0">
            <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
              <Icon name="Bell" size={18} className="text-green-600" /> Notifications & Emails
            </h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Notification", "Email"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setNotifTab(tab)}
                  className={`px-3 py-1 rounded-md text-sm ${notifTab === tab ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredNotifs.length === 0 ? (
            <div className="text-sm text-muted-foreground">No notifications yet.</div>
          ) : (
            <ul className="space-y-3 text-sm max-h-56 sm:max-h-64 overflow-y-auto pr-2">
              {filteredNotifs.map((n) => (
                <li key={n.id} className="p-2 border-l-4 bg-gray-50 rounded-md shadow-sm flex flex-col">
                  <div className="flex justify-between items-start sm:items-center gap-2">
                    <span className="break-words">{n.message}</span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full whitespace-nowrap ${
                        n.type === "Email" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {n.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{n.time}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
