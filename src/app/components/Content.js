'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Content() {
  const [duas, setDuas] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Only show 3 items initially

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/duas');
      const data = await res.json();
      setDuas(data || []);
    }

    fetchData();
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // Show 3 more each time
  };

  return (
    <div className="p-4 ml-4 mr-4">
      <h2 className="text-xl font-bold mb-4">Duas</h2>
      <ul className="space-y-2">
        {duas.slice(0, visibleCount).map((dua) => (
          <li key={dua.id} className="bg-gray-100 p-3 rounded">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/allah.png"
                width={50}
                height={50}
                alt="Picture of the author"
              />
              <h3 className="text-2xl font-semibold text-green-500 py-4">
                {dua.dua_name_en}
              </h3>
            </div>
            <p className="text-xl font-medium">{dua.top_en}</p>
            <div className="mt-3">
              <p className="text-green-500 font-bold mb-1">Reference</p>
              <p className="text-gray-500 font-medium">{dua.refference_en}</p>
            </div>
          </li>
        ))}
      </ul>

      {visibleCount < duas.length && (
        <button
          onClick={loadMore}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}
