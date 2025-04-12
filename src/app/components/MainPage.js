'use client';

import { useState } from 'react';
import Sidebar2 from './Sidebar2';
import Content from './Content';

export default function MainPage() {
  const [selectedCatId, setSelectedCatId] = useState(null);

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar2 onCategorySelect={setSelectedCatId} />
      </div>
      <div className="w-3/4">
        <Content selectedCatId={selectedCatId} />
      </div>
    </div>
  );
}