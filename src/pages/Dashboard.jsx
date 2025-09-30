import DashboardContainer from "../components/DashboardContainer";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="">
            <DashboardContainer content={(
                <div className="p-4 h-[1000px]">
                    <h1 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user ? user.name : 'User'}!</h1>
                    <p>This is where you can manage your projects and tasks.</p>
                </div>
            )} />
        </div>
    );
}

export default Dashboard;