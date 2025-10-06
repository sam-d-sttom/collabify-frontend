// src/components/Dashboard/TeamPresence.jsx
import { Plus, FolderPlus, ListChecks, UserPlus, Upload, Box } from "lucide-react";
import BoxContainer from "../../../components/BoxContainer";

const teamOnline = [
    { id: 1, name: "Alice Johnson", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "David Kim", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: 4, name: "Sophie Lee", avatar: "https://i.pravatar.cc/40?img=4" },
];

export default function TeamPresence() {
    return (
        <BoxContainer content={
            <div className="flex flex-col lg:flex-row items-center justify-between">
                {/* Team Presence */}
                <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                        {teamOnline.slice(0, 3).map((member) => (
                            <img
                                key={member.id}
                                src={member.avatar}
                                alt={member.name}
                                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
                                title={member.name}
                            />
                        ))}
                        {teamOnline.length > 3 && (
                            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-white flex items-center justify-center text-xs text-gray-700 dark:text-gray-200 font-medium">
                                +{teamOnline.length - 3}
                            </div>
                        )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium text-gray-800 dark:text-gray-100">Online:</span>{" "}
                        {teamOnline[0].name.split(" ")[0]}, {teamOnline[1].name.split(" ")[0]}{" "}
                        & {teamOnline.length - 2} more
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap items-center gap-2 mt-4 lg:mt-0">
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                        <FolderPlus className="w-4 h-4" /> New Project
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">
                        <ListChecks className="w-4 h-4" /> Task
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition">
                        <UserPlus className="w-4 h-4" /> Invite
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition">
                        <Upload className="w-4 h-4" /> Upload File
                    </button>
                </div>
            </div>
        } />
    );
}
