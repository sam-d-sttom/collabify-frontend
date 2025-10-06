import DashboardContainer from "../../components/DashboardContainer";
import StatCard from "./components/StatCard";
import { Folder, CheckCircle, MessageSquare } from "lucide-react";
import CalendarSnapshot from "./components/CalendarSnapshot";
import RecentActivity from "./components/RecentActivity";
import TeamPresence from "./components/TeamPresence";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="">
            <DashboardContainer content={(
                <div className="py-6 px-10">
                    <h1 className="text-2xl font-bold mb-4">Welcome Oluwatosin!</h1>
                    <p>Here's what's happening in your workspace today.</p>

                    <div className="grid grid-cols-1 gap-6 mt-6">

                    <section className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <StatCard
                                icon={Folder}
                                title="Projects"
                                stats={{ total: 12, active: 8, completed: 4 }}
                                color="blue"
                            />

                            <StatCard
                                icon={CheckCircle}
                                title="Tasks"
                                stats={{ total: 25, due: 5, completed: 15 }}
                                color="green"
                            />

                            <StatCard
                                icon={MessageSquare}
                                title="Messages"
                                stats={{ total: 50, unread: 5, archived: 10 }}
                                color="purple"
                            />
                        </div>
                    </section>

                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        <CalendarSnapshot />
                        <RecentActivity />
                    </section>

                    <section>
                        <TeamPresence />
                    </section>
                    </div>

                </div>
            )} />
        </div>
    );
}

export default Dashboard;