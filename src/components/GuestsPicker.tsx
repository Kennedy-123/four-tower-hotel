import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface GuestsPickerProps {
  value: string;
  onChange: (guests: string) => void;
  icon?: string;
}

function GuestsPicker({ value, onChange, icon = "👥" }: GuestsPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const guestOptions = [
    { value: "1", label: "1 Guest" },
    { value: "2", label: "2 Guests" },
    { value: "3", label: "3 Guests" },
    { value: "4", label: "4 Guests" },
    { value: "5", label: "5+ Guests" },
  ];

  const selectedLabel = guestOptions.find((opt) => opt.value === value)?.label || "Select guests";

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={pickerRef}>
      <label className="block text-xs font-medium text-text-light mb-2">Guests</label>

      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border border-border bg-glass px-4 py-3 text-sm text-white transition focus:border-accent focus:bg-glass/20 focus:outline-none flex items-center justify-between hover:bg-white/10 cursor-pointer"
      >
        <span>{selectedLabel}</span>
        <span className="text-lg">{icon}</span>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 z-50 w-full rounded-lg border border-accent/30 bg-surface overflow-hidden shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {guestOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                whileHover={{ backgroundColor: "rgba(217, 119, 6, 0.2)" }}
                className={`w-full px-4 py-3 text-left text-sm transition ${
                  value === option.value
                    ? "bg-linear-to-r from-accent to-accent-dark text-dark font-semibold"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GuestsPicker;
