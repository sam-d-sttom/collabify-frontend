import { Folder } from "lucide-react";
import BoxContainer from "../../../components/BoxContainer";

export default function StatCard({
  icon: Icon = Folder,
  title = "Projects",
  stats = {
    total: 0,
    active: 0,
    completed: 0,
  },
  color = "blue",
}) {
  const colorClasses = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900",
      text: "text-blue-600 dark:text-blue-300",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900",
      text: "text-green-600 dark:text-green-300",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900",
      text: "text-purple-600 dark:text-purple-300",
    },
    yellow: {
      bg: "bg-yellow-100 dark:bg-yellow-900",
      text: "text-yellow-600 dark:text-yellow-300",
    },
    gray: {
      bg: "bg-gray-200 dark:bg-gray-700",
      text: "text-gray-600 dark:text-gray-300",
    },
  };

  const styles = colorClasses[color] || colorClasses.blue;

  return (
    <BoxContainer content={
      <div className="justify-between">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-lg ${styles.bg}`}
          >
            {Icon && <Icon className={`w-6 h-6 ${styles.text}`} />}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          {Object.entries(stats).map(([key, value], index) => (
            <div key={index}>
              <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {key}
              </p>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    } />
  );
}
