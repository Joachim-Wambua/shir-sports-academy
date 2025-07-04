import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ show, onClose, type, message }) => {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-md w-full ${bgColor} p-6 rounded-lg shadow-lg`}
          >
            <h2 className={`text-xl font-semibold mb-2 ${textColor}`}>
              {type === "success" ? "✅ Success" : "❌ Error"}
            </h2>
            <p className={`mb-4 ${textColor}`}>{message}</p>
            <button
              onClick={onClose}
              className="w-full mt-2 bg-[#8536b6] hover:bg-[#59098c] text-white py-2 px-4 rounded-full transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
