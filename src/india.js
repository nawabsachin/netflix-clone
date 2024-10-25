import React from 'react';
import './TopIndianSeries.css'; // Import the CSS file for styling

const TopIndianSeries = () => {
  const seriesList = [
    {
      title: 'Sacred Games',
      description: 'A police officer attempts to thwart a terrorist attack in Mumbai, as a strange phone call from a crime lord puts him on a deadly path.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPAeT2vMv9m5JAWwRkCHSiQH3wQYZJ8SCzA&s', // Replace with actual image URL
    },
    {
      title: 'Delhi Crime',
      description: 'Based on true events, this series follows the Delhi Police investigation into the horrific Nirbhaya case.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1J61KtiAgEfONS921aqy4lShsHq_7NxvszA&s', // Replace with actual image URL
    },
    {
      title: 'Made in Heaven',
      description: 'Explores the lives of two wedding planners in Delhi and the various cultural and personal issues they face.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv29vPzJxEkLmBLunkxfZc-c2QEXjyPjxZA&s', // Replace with actual image URL
    },
    {
      title: 'Paatal Lok',
      description: 'A cynical inspector lands a case that leads him into the dark realms of the underworld.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHM-2xRD0PPyhLBpEO99Tt5lJoHM4eJpc41g&s', // Replace with actual image URL
    },
    {
      title: 'The Family Man',
      description: 'A middle-class man secretly works as a spy for the National Investigation Agency.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-v0rYdvpbfuJPxHBtdjA4kGFFOP1SJj3-Ow&s', // Replace with actual image URL
    },
  ];

  return (
    <div className="top-series">
      <h2>Top 5 Indian Series on Netflix</h2>
      <div className="series-list">
        {seriesList.map((series, index) => (
          <div key={index} className="series-item">
            <img className='movie-image' src={series.imageUrl} alt={series.title} />
            <h3>{series.title}</h3>
            <p>{series.description}</p>
            <a>
            <button className="btn">watch now
</button>
</a> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopIndianSeries;
