import React from 'react'
import { useState,useEffect } from 'react';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
// import resData from '../utils/mockData';

const Body = () => {
  //creating a useState hook
  const [resList,setResList]=useState([]);
  const [allResList,setAllResList]=useState([]); //used to store all resList original when clicking showall
  const [isFiltered,setIsFiltered]=useState(false);


  useEffect(()=>{
    fetchData();
  },[])


  const fetchData=async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
    const json=await data.json();
    console.log(json);
    
    //optional chaining
    const restaurantCards=json?.data?.cards?.find((card)=>card?.card?.card?.gridElements?.infoWithStyle?.restaurants);//abhi mujhe vo card[i] mila ha jisme actually restaurants hai
    //ab mujhe usme se vo restaurants nikalna hoga
    const restaurants=restaurantCards?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //now that i got the restaurants obj now i will setResList
    console.log(restaurantCards.card.card.gridElements.infoWithStyle.restaurants.length);
    setResList(restaurants);
    setAllResList(restaurants);
  }
  const handleFilter=()=>{
    if(isFiltered===true){
      setResList(allResList);
      setIsFiltered(false);
    }
    else{
      let filterRes=resList.filter((res)=>res.info.avgRating > 4.3);
      setResList(filterRes)
      setIsFiltered(true);
    }
  }
  return resList.length==0?<Shimmer /> : (
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