import { FaHandsPraying, FaHandHoldingHeart } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <div className="w-56 mr-5 bg-white shadow-md h-full p-4 flex flex-col justify-between">
      {/* Header Icon */}
      <div className="flex items-center justify-center mb-6">
        <FaHandsPraying className="text-4xl text-green-600" />
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-3 p-2 bg-gray-100 rounded hover:bg-gray-200 transition">
              <span>🏠</span>
              <span className="font-medium">Home</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition">
              <span>📖</span>
              <span className="font-medium">Duas</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition">
              <span>✅</span>
              <span className="font-medium">Completed</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition">
              <span>⚙️</span>
              <span className="font-medium">Settings</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition">
              <span>❓</span>
              <span className="font-medium">Help</span>
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded transition">
              <span>📞</span>
              <span className="font-medium">Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Bottom Icon */}
      <div className="flex justify-center mt-6">
        <FaHandHoldingHeart className="bg-green-500 text-white text-4xl p-3 rounded-xl shadow-md" />
      </div>
    </div>
  );
}
