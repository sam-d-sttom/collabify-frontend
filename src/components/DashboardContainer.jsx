import DashboardHeader from "./DashboardHeader";
import DashboardSideBar from "./DashboardSideBar";
import DashboardFooter from "./DashboardFooter";

export default function DashboardContainer({ content = (<div>Dashboard Content</div>) }) {
    return (
        <div className=" max-h-screen flex flex-col">
            <DashboardHeader />

            <div className="flex flex-1 overflow-hidden">
                <DashboardSideBar />

                <div className="flex flex-col flex-1 overflow-hidden">
                    <div className="flex-1 overflow-y-auto">
                        {content}
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </div>
    );
}
