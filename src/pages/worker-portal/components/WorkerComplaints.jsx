import React, { useState } from "react";
import Button from "../../../components/ui/Button";

const WorkerComplaints = ({ complaints = [] }) => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [paidComplaints, setPaidComplaints] = useState({});

  const handlePayFine = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const confirmPayment = () => {
    if (selectedComplaint) {
      setPaidComplaints((prev) => ({ ...prev, [selectedComplaint.id]: true }));
      setSelectedComplaint(null);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mt-6 flex items-center gap-2 text-red-800">
        ⚠️ Complaints Against Me
      </h2>

      {complaints.length === 0 ? (
        <p className="text-muted-foreground">No complaints yet 🎉</p>
      ) : (
        <div className="space-y-3">
          {complaints.map((c) => (
            <div
              key={c.id}
              className={`p-4 rounded-xl border shadow-sm transition ${
                c.status === "validated"
                  ? "border-red-300 bg-red-100/80 text-red-800"
                  : "border-green-300 bg-green-100/80 text-green-800"
              }`}
            >
              <p className="text-sm font-medium">{c.description}</p>
              <p className="text-xs opacity-80">
                Date: {c.date} | Status:{" "}
                {c.status === "validated"
                  ? "✅ True (Fine Applied)"
                  : "❌ False"}
              </p>

              {c.status === "validated" && (
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    Fine: ₹{c.fine || 0}
                  </span>
                  {!paidComplaints[c.id] ? (
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => handlePayFine(c)}
                      className="hover:scale-105 transition"
                    >
                      Pay Fine
                    </Button>
                  ) : (
                    <span className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full font-medium">
                      ✅ Fine Paid
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-96 p-6 animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-800">
              Confirm Fine Payment
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Complaint:</strong> {selectedComplaint.description}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Date:</strong> {selectedComplaint.date}
            </p>
            <p className="text-sm text-red-600 font-semibold mt-3">
              Fine Amount: ₹{selectedComplaint.fine || 0}
            </p>

            <div className="flex justify-end gap-3 mt-5">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedComplaint(null)}
              >
                Cancel
              </Button>
              <Button size="sm" variant="primary" onClick={confirmPayment}>
                Proceed to Pay
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkerComplaints;
