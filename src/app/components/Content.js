'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Content({ selectedCatId }) {
  const [duas, setDuas] = useState([]);
  const [filteredDuas, setFilteredDuas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('/api/duas');
      const data = await res.json();
      setDuas(data || []);
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCatId) {
      const filtered = duas.filter((dua) => dua.cat_id === selectedCatId);
      setFilteredDuas(filtered);
    } else {
      setFilteredDuas(duas);
    }
  }, [selectedCatId, duas]);

  return (
    <div className="h-full bg-white shadow-md rounded-xl p-4 overflow-y-auto mr-5">
      {loading ? (
        <div className="text-green-500 text-xl font-semibold animate-pulse">
          Loading Duas...
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">Duas</h2>
          {filteredDuas.length === 0 && selectedCatId ? (
            <p className="text-gray-500">No duas found for this category.</p>
          ) : (
            <ul className="space-y-2 w-full">
              {filteredDuas.map((dua) => (
                <li key={dua.id} className="bg-gray-100 p-3 rounded">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/allah.png"
                      width={50}
                      height={50}
                      alt="Allah icon"
                    />
                    <h3 className="text-2xl font-semibold text-green-500 py-4">
                      {dua.dua_name_en}
                    </h3>
                  </div>
                  <p className="text-xl font-medium">{dua.top_en}</p>
                  <div className="mt-3">
                    <p className="text-green-500 font-bold mb-1">Reference</p>
                    <p className="text-gray-500 font-medium">
                      {dua.refference_en}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
