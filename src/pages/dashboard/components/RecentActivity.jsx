// src/components/Dashboard/RecentActivity.jsx
import { useState } from "react";
import { Upload, Calendar, CheckCircle2, MessageSquare } from "lucide-react";
import BoxContainer from "../../../components/BoxContainer";

const activitiesData = [
    {
        id: 1,
        user: "Alice Johnson",
        action: "uploaded",
        target: "project_plan.pdf",
        time: "2h ago",
        type: "upload",
    },
    {
        id: 2,
        user: "Bob Smith",
        action: "completed task",
        target: "Design homepage UI",
        time: "5h ago",
        type: "task",
    },
    {
        id: 3,
        user: "Samson Adeyemi",
        action: "commented on",
        target: "Marketing meeting notes",
        time: "8h ago",
        type: "comment",
    },
    {
        id: 4,
        user: "Alice Johnson",
        action: "scheduled a meeting",
        target: "Team sync-up",
        time: "Yesterday",
        type: "meeting",
    },
];

const iconMap = {
    upload: Upload,
    task: CheckCircle2,
    comment: MessageSquare,
    meeting: Calendar,
};

export default function RecentActivity() {
    const [activities] = useState(activitiesData);

    return (
        <BoxContainer content={
            <div>
                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Recent Activity</h2>
                <div className="space-y-4">
                    {activities.map((item, index) => {
                        const Icon = iconMap[item.type];
                        return (
                            <div
                                key={index}
                                className="flex items-start gap-3 border-b border-gray-300 dark:border-gray-700 pb-3 last:border-none"
                            >
                                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
                                    <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700 dark:text-gray-200">
                                        <span className="font-medium">{item.user}</span> {item.action}{" "}
                                        <span className="text-blue-600">{item.target}</span>
                                    </p>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">{item.time}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        } />
    );
}
