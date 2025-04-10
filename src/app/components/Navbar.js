import Image from "next/image";
import { CiSearch } from "react-icons/ci";


export default function Navbar() {
  return (
    <div className=" p-4  flex items-center justify-between">
      {/* Title */}
      <h1 className="text-[18px] font-bold text-gray-900">Dua Page</h1>

      {/* Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
      </div>

      {/* User Image */}
      <div className="flex-shrink-0">
        <Image
          width={30}
          height={30}
            src="/muslimPerson.png"
          alt="User Avatar"
          className="rounded-full bg-gray-800"
        />
      </div>
    </div>
  );
}
