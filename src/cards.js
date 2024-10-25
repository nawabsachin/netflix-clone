import React from 'react';
import './App.css'
import seriesData from './data';

const TopNetflixSeries = () => {
  return (
    <div className="series-container">
      <h2>Top 10 Netflix Series</h2>
      <div className="series-list">
        {seriesData.map((series) => (
          <div key={series.id} className="series-card">
            <img src={series.image} alt={series.title} className="series-image" />
     
   
      <h3 className="series-title">{series.title}</h3>
            <p className="series-description">{series.description}</p>

  
            <a href={series.link1} target='_blank'>   
        
            <button className="btn">watch now
</button>
</a> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNetflixSeries;
