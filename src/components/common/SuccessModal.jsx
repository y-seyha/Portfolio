import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ show, success, message, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white text-black p-6 rounded-xl max-w-sm w-full relative">
        <button
          className="absolute top-2 right-2 text-black hover:text-red-500"
          onClick={onClose}
        >
          <FiX size={24} />
        </button>
        <p
          className={`text-lg font-medium ${success ? "text-green-600" : "text-red-600"}`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Modal;
