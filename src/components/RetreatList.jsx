// src/components/RetreatList.js
import React, { useState } from 'react';
import RetreatItem from './RetreatItem';
import Filter from './Filter';

const retreats = [
  {
    image: 'forest-yoga.jpg',
    title: 'Forest Yoga Retreat',
    description: 'Join us for a rejuvenating yoga retreat in the heart of the forest. Experience tranquility and peace.',
    date: 'June 10-15, 2024',
    location: 'Forest',
    price: '$500'
  },
  {
    image: 'lake-meditation.jpg',
    title: 'Lake Meditation Retreat',
    description: 'Immerse yourself in a tranquil meditation retreat by the lake. Find inner peace and clarity.',
    date: 'July 21-26, 2024',
    location: 'Lake',
    price: '$600'
  },
  {
    image: 'spa-detox.jpg',
    title: 'Spa Detox Retreat',
    description: 'Experience a comprehensive detox program at our luxurious spa retreat. Refresh and renew.',
    date: 'August 5-10, 2024',
    location: 'Spa',
    price: '$700'
  }
];

const RetreatList = () => {
  const [filteredRetreats, setFilteredRetreats] = useState(retreats);

  const handleFilterChange = (filter) => {
    // Implement filter logic based on date and type
    const filtered = retreats.filter(retreat => {
      return (filter.date ? retreat.date.includes(filter.date) : true) &&
             (filter.type ? retreat.location === filter.type : true);
    });
    setFilteredRetreats(filtered);
  };

  return (
    <div>
      <Filter onChange={handleFilterChange} />
      <div>
        {filteredRetreats.map((retreat, index) => (
          <RetreatItem key={index} retreat={retreat} />
        ))}
      </div>
    </div>
  );
};

export default RetreatList;
