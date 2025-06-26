import DashboardSideNavbar from "../components/globalcomponents/navbar/DashboardSideNavbar";
import DashboardTopNavbar from "../components/globalcomponents/navbar/DashboardTopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex ">
      {/* Sidebar */}

      <div className="w-[23%]">
          <DashboardSideNavbar/>
      </div>
      {/* Main Content */}
      <div className="w-[75%] flex flex-col ">
        {/* Topbar */}
        <DashboardTopNavbar title={"Settings"} name="Sheikh Usama"
          username="Usamaraees98"
          avatarUrl="" />

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
