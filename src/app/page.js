// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Content from "./components/Content";
// import SettingsPanel from "./components/SettingsPanel";
// import Sidebar2 from "./components/Sidebar2"; // ✅ Update this import if needed

// export default function Home() {
//   return (
//     <div className="flex">
//       {/* Sidebar (1/4 width) */}
//       <div className="">
//         <Sidebar />
//       </div>

//       {/* Main content area (3/4 width) */}
//       <div className=" flex flex-col">
//         {/* Top Navbar */}
//         <Navbar />

//         {/* Inner content below Navbar */}
//         <div className="flex flex-1">
//           <Sidebar2 />
//           <Content />
//           <SettingsPanel />
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './components/Content';
import SettingsPanel from './components/SettingsPanel';
import Sidebar2 from './components/Sidebar2';

export default function Home() {
  const [selectedCatId, setSelectedCatId] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar (1/4 width) */}
      <div className="">
        <Sidebar />
      </div>

      {/* Main content area (3/4 width) */}
      <div className="flex flex-col ">
        {/* Top Navbar */}
        <Navbar />

        {/* Inner content below Navbar */}
        <div className="flex ">
          <div className="">
            <Sidebar2 onCategorySelect={setSelectedCatId} />
          </div>
          <div className="">
            <Content selectedCatId={selectedCatId} />
          </div>
          <div className="">
            <SettingsPanel />
          </div>
        </div>
      </div>
    </div>
  );
}