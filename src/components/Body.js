import React from 'react'
import { useState } from 'react';

import RestaurantCard from './RestaurantCard';
import resData from '../utils/mockData';

const Body = () => {
  //creating a useState hook
  const [resList,setResList]=useState(resData);
  const [isFiltered,setIsFiltered]=useState(false);

  const handleFilter=()=>{
    if(isFiltered===true){
      setResList(resData);
      setIsFiltered(false);
    }
    else{
      let filterRes=resList.filter((res)=>res.info.avgRating > 4.3);
      setResList(filterRes)
      setIsFiltered(true);
    }
  }
  return (
    <div className="res-container">
      <div className="res-container-head">
        <h1>Restaurants with online food delivery in Delhi</h1>
        <div className="sort-by">
            <button className='filter-top-btn' onClick={handleFilter}><h3>{isFiltered ?"Show All":"Ratings 4.0+"}</h3></button>
        </div>
      </div>

      <div className="res-container-body">
        {resList.map((restaurant)=>(
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body