import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  label: string;
  icon?: string;
  minDate?: string;
}

function DatePicker({
  value,
  onChange,
  label,
  icon = "📅",
  minDate,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const pickerRef = useRef<HTMLDivElement>(null);

  // Get days in month
  const getDaysInMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (date: Date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const monthName = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1),
    );
  };

  const handleSelectDay = (day: number) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    const dateString = selected.toISOString().split("T")[0];
    onChange(dateString);
    setIsOpen(false);
  };

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayDate = value
    ? new Date(value).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Select date";

  return (
    <div className="relative" ref={pickerRef}>
      <label className="block text-xs font-medium text-text-light mb-2">
        {label}
      </label>

      {/* Input Field */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full rounded-lg border border-border bg-glass px-4 py-3 text-sm text-white transition focus:border-accent focus:bg-glass/20 focus:outline-none flex items-center justify-between hover:bg-white/10 cursor-pointer"
      >
        <span>{displayDate}</span>
        <span className="text-lg">{icon}</span>
      </button>

      {/* Calendar Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 z-50 w-80 rounded-lg border border-accent/30 bg-surface p-4 shadow-2xl shadow-black/50 backdrop-blur-xl"
          >
            {/* Month Navigation */}
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={handlePrevMonth}
                className="rounded-lg bg-white/5 p-2 hover:bg-white/10 transition text-white"
              >
                ‹
              </button>
              <h3 className="text-center text-sm font-semibold text-text">
                {monthName}
              </h3>
              <button
                onClick={handleNextMonth}
                className="rounded-lg bg-white/5 p-2 hover:bg-white/10 transition text-white"
              >
                ›
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="mb-2 grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="py-2 text-center text-xs font-semibold text-text-muted"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, idx) => {
                if (!day) {
                  return <div key={`empty-${idx}`} className="aspect-square" />;
                }

                const date = new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  day,
                );
                const dateString = date.toISOString().split("T")[0];
                const isSelected = value === dateString;
                const isToday =
                  new Date().toDateString() === date.toDateString();
                const isDisabled = !!(minDate && dateString < minDate);

                return (
                  <motion.button
                    key={day}
                    onClick={() => !isDisabled && handleSelectDay(day)}
                    disabled={isDisabled}
                    whileHover={!isDisabled ? { scale: 1.1 } : {}}
                    whileTap={!isDisabled ? { scale: 0.95 } : {}}
                    className={`aspect-square rounded-lg text-sm font-medium transition ${
                      isSelected
                        ? "bg-linear-to-br from-accent to-accent-dark text-dark shadow-lg shadow-accent/30"
                        : isToday
                          ? "border border-accent/50 bg-white/5 text-white hover:bg-white/10"
                          : isDisabled
                            ? "text-text-muted cursor-not-allowed"
                            : "bg-white/5 text-text-light hover:bg-white/10"
                    }`}
                  >
                    {day}
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-4 border-t border-border pt-3">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DatePicker;
