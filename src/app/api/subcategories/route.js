"use client";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Sidebar2 = () => {
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState({});

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category");
        const data = await res.json();
        setCategories(data.categories);
        setFilteredCategories(data.categories);
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };

    fetchCategories();
  }, []);

  // Search filter
  useEffect(() => {
    const filtered = categories.filter((cat) =>
      cat.cat_name_en.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchText, categories]);

  const toggleExpand = async (id) => {
    if (expandedCategoryId === id) {
      setExpandedCategoryId(null);
      return;
    }

    // Fetch subcategories only if not already fetched
    if (!subcategories[id]) {
      try {
        const res = await fetch(`/api/subcategory?cat_id=${id}`);
        const data = await res.json();
        setSubcategories((prev) => ({ ...prev, [id]: data.subcategories }));
      } catch (err) {
        console.error("Failed to load subcategories", err);
      }
    }

    setExpandedCategoryId(id);
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
        {filteredCategories.map((category) => (
          <div key={category.id}>
            {/* Category Card */}
            <div
              onClick={() => toggleExpand(category.cat_id)}
              className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Image
                //   src={`/icons/${category.cat_icon}.png`} // Adjust path if needed
                  src={category.cat_icon}
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

            {/* Expandable Subcategories */}
            {expandedCategoryId === category.cat_id && (
              <div className="ml-10 mt-2 border-l-2 border-dotted border-green-500 pl-3 space-y-1">
                {subcategories[category.cat_id]?.length > 0 ? (
                  subcategories[category.cat_id].map((sub) => (
                    <p
                      key={sub.id}
                      className="text-sm text-gray-600 hover:text-green-600 cursor-pointer"
                    >
                      {sub.subcat_name_en}
                    </p>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">No subcategories found.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar2;
