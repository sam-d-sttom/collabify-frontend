import { useState } from "react";
import { Plus } from "lucide-react";
import BoxContainer from "../../../components/BoxContainer";

// Helper to get days in month
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// Helper to get first day offset
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay(); // 0 = Sunday
}

export default function CalendarSnapshot() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  // Example events (replace with API data later)
  const events = [
    { date: "2025-09-30", time: "10:00 AM", title: "Design Review" },
    { date: "2025-09-30", time: "2:30 PM", title: "Team Call" },
    { date: "2025-09-30", time: "5:00 PM", title: "Submit Proposal" },
    { date: "2025-10-01", time: "3:00 PM", title: "Marketing Sync" },
    { date: "2025-10-02", time: "1:00 PM", title: "Client Presentation" },
  ];

  const formattedToday = today.toISOString().split("T")[0];
  const todayEvents = events.filter((e) => e.date === formattedToday);
  const upcomingEvents = events.filter((e) => e.date > formattedToday);

  // Weekday headers
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <BoxContainer content={
      <div className="flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Calendar Snapshot
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {today.toLocaleString("default", { month: "long" })} {currentYear}
          </div>
        </div>

        {/* Mini Calendar */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-4">
          {weekdays.map((day) => (
            <div
              key={day}
              className="font-medium text-gray-500 dark:text-gray-400"
            >
              {day}
            </div>
          ))}

          {/* Empty slots before first day */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {/* Days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateString = `${currentYear}-${String(
              currentMonth + 1
            ).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            const isToday = dateString === formattedToday;
            const hasEvent = events.some((e) => e.date === dateString);

            return (
              <div
                key={day}
                className={`p-1 rounded-full flex items-center justify-center cursor-pointer
                ${isToday ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200"}
                ${hasEvent && !isToday ? "bg-blue-100 dark:bg-blue-800" : ""}
              `}
              >
                {day}
              </div>
            );
          })}
        </div>

        {/* Today’s Events */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Today
          </h4>
          {todayEvents.length > 0 ? (
            <ul className="space-y-1">
              {todayEvents.map((e, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">{e.time}</span> – {e.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No events today 🎉
            </p>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Upcoming
          </h4>
          {upcomingEvents.length > 0 ? (
            <ul className="space-y-1">
              {upcomingEvents.slice(0, 3).map((e, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(e.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  – <span className="font-medium">{e.time}</span> {e.title}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No upcoming events
            </p>
          )}
        </div>

        {/* Add Event Button */}
        <button className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors">
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>
    } />
  );
}
