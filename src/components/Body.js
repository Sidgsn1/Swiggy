import React from 'react'

import RestaurantCard from './RestaurantCard';
import resData from '../utils/mockData';
const Body = () => {
  return (
    <div className="res-container">
      <div className="res-container-head">
        <h1>Restaurants with online food delivery in Delhi</h1>
        <div className="sort-by">
            <button className='filter-top-btn' onClick={()=>{console.log("hello")}}><h3>Ratings 4.0+</h3></button>
        </div>
      </div>

      <div className="res-container-body">
        {resData.map((restaurant)=>(
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body