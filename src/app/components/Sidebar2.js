'use client';

import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Sidebar2 = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true); // Start loading
        const res = await fetch("/api/categories"); // adjust path if needed
        const data = await res.json();
        setAllCategories(data.categories);
        setFilteredCategories(data.categories);
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const filtered = allCategories.filter((cat) =>
      cat.cat_name_en.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchText, allCategories]);

  const toggleExpand = (id) => {
    setExpandedCategoryId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="h-[630px] bg-white shadow-md w-full rounded-xl overflow-y-auto mt-5">
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
        {loading ? (
          <div className="text-center text-green-500 text-xl font-semibold animate-pulse">
            Loading Categories...
          </div>
        ) : (
          filteredCategories.map((category) => (
            <div key={category.id}>
              <div
                onClick={() => toggleExpand(category.id)}
                className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={`/icons/${category.cat_icon}.png`} // ensure your image path is correct
                    alt={category.cat_name_en}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      {category.cat_name_en}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Subcategories: {category.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">{category.no_of_dua}</p>
                  <p className="text-xs text-gray-500">Duas</p>
                </div>
              </div>

              {expandedCategoryId === category.id && (
                <div className="ml-10 mt-2 border-l-2 border-dotted border-green-500 pl-3 space-y-1">
                  <p className="text-sm text-green-600 font-bold">
                    Category ID: {category.cat_id}
                  </p>
                  <p className="text-sm text-gray-600">
                    Bengali Name: {category.cat_name_bn}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar2;
