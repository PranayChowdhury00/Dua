"use client"
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import categoriesData from "../data/categories.json";
import Image from "next/image";

const Sidebar2 = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(categoriesData);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  useEffect(() => {
    const filtered = categoriesData.filter((cat) =>
      cat.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchText]);

  const toggleExpand = (id) => {
    setExpandedCategoryId(prev => (prev === id ? null : id));
  };

  return (
    <div className="bg-white shadow-md h-full w-72 rounded-xl overflow-y-auto mt-5 mr-5">
      <h1 className="bg-green-500 font-bold text-white py-3 text-center rounded-t-xl">
        Categories
      </h1>

      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Categories"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-md text-sm focus:outline-none"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
        </div>
      </div>

      <div className="px-4 pb-4 space-y-2">
        {filteredCategories.map((category) => (
          <div key={category.id}>
            {/* Category Card */}
            <div
              onClick={() => toggleExpand(category.id)}
              className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={category.icon}
                  alt={category.title}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-sm font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Subcategory: {category.subCategory}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold">{category.duasCount}</p>
                <p className="text-xs text-gray-500">Duas</p>
              </div>
            </div>

            {/* Expandable Details Section */}
            {expandedCategoryId === category.id && (
              <div className="ml-10 mt-2 border-l-2 border-dotted border-green-500 pl-3 space-y-1">
                {category.details.map((item, index) => (
                  <p
                    key={index}
                    className={`text-sm ${
                      index === 0 ? "text-green-600 font-bold" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar2;
