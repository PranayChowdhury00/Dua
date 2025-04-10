import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import SettingsPanel from "./components/SettingsPanel";
import Sidebar2 from "./components/Sidebar2"; // ✅ Update this import if needed

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar (1/4 width) */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main content area (3/4 width) */}
      <div className=" flex flex-col">
        {/* Top Navbar */}
        <Navbar />

        {/* Inner content below Navbar */}
        <div className="flex flex-1">
          <Sidebar2 />
          <Content />
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}
