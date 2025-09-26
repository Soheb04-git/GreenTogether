// src/pages/worker-portal/components/CertificateModal.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertificateModal = ({ training, onClose }) => {
  const certRef = useRef();

  const handleDownload = async () => {
    const input = certRef.current;
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "px", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`${training.title}-Certificate.pdf`);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>

        {/* Certificate Content */}
        <div ref={certRef} className="p-10 text-center bg-gradient-to-r from-green-50 to-green-100 border-8 border-green-600 rounded-xl">
          <h1 className="text-3xl font-bold text-green-700 mb-2">Certificate of Completion</h1>
          <p className="text-gray-700 italic mb-6">This is proudly presented to</p>
          
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Worker Name</h2>
          <p className="text-gray-700 mb-6">
            For successfully completing the training
          </p>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            {training.title}
          </h3>

          <div className="flex justify-between text-gray-600 text-sm mt-10 px-6">
            <div>
              <p>Date: {training.date}</p>
              <p>Certificate ID: {training.certificateId}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">GreenTogether</p>
              <p>Waste Management Solutions</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 flex justify-center gap-4">
          <Button onClick={handleDownload} className="px-6">
            Download PDF
          </Button>
          <Button variant="outline" onClick={onClose} className="px-6">
            Close
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
