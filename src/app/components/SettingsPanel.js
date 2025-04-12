"use client";
import { useState } from "react";

export default function SettingsPanel() {
  const [activeSetting, setActiveSetting] = useState(null);

  const handleActiveSetting = (setting) => {
    // Toggle the active setting (if clicked again, deactivate it)
    setActiveSetting((prev) => (prev === setting ? null : setting));
  };

  return (
    <div className="w-full bg-white shadow-md h-[600px]  ml-5 p-5 rounded-2xl">
      <h2 className="text-lg font-semibold mb-6 text-gray-800">Settings</h2>

      {/* Language Setting */}
      <div
        className={`mb-4 cursor-pointer flex items-center justify-between p-2 rounded-lg transition-colors duration-200 ${
          activeSetting === "language"
            ? "bg-green-100 text-green-500"
            : "text-gray-800"
        }`}
        onClick={() => handleActiveSetting("language")}
      >
        <span>Language</span>
        <span>🌐</span>
      </div>

      {/* General Settings */}
      <div
        className={`mb-4 cursor-pointer flex items-center justify-between p-2 rounded-lg transition-colors duration-200 ${
          activeSetting === "general"
            ? "bg-green-100 text-green-500"
            : "text-gray-800"
        }`}
        onClick={() => handleActiveSetting("general")}
      >
        <span>General Settings</span>
        <span>⚙️</span>
      </div>

      {/* Font Settings */}
      <div
        className={`mb-4 cursor-pointer flex items-center justify-between p-2 rounded-lg transition-colors duration-200 ${
          activeSetting === "font"
            ? "bg-green-100 text-green-500"
            : "text-gray-800"
        }`}
        onClick={() => handleActiveSetting("font")}
      >
        <span>Font Settings</span>
        <span>🖋️</span>
      </div>

      {/* Appearance Settings */}
      <div
        className={`mb-4 cursor-pointer flex items-center justify-between p-2 rounded-lg transition-colors duration-200 ${
          activeSetting === "appearance"
            ? "bg-green-100 text-green-500"
            : "text-gray-800"
        }`}
        onClick={() => handleActiveSetting("appearance")}
      >
        <span>Appearance Settings</span>
        <span>🎨</span>
      </div>

      {/* Night Mode */}
      <div className="mb-4 flex items-center justify-between">
        <span>Night Mode</span>
        <input type="checkbox" className="toggle" />
      </div>
    </div>
  );
}


