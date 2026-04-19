import React from 'react'
import { useState,useEffect } from 'react';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
// import resData from '../utils/mockData';

const Body = () => {
  //creating a useState hook

  // const [resList,setResList]=useState([]); //ise hatao
  
  const [allResList,setAllResList]=useState([]); //used to store all resList original when clicking showall
  
  const [isRatingFilterOn,setIsRatingFilterOn]=useState(false);

  const [searchText,setSearchText]=useState("");
  // console.log(resList)  //isse hatao

  useEffect(()=>{
    fetchData();
  },[])

  //whenever state variable update, react triggers a reconcialiation cycle(re-renders the component)
  console.log("body Rendered");

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

    // setResList(restaurants);  //isse hatao

    setAllResList(restaurants);
  }
  
  const filteredList=allResList.filter((res)=>{
    const text=searchText.toLowerCase();

    const matchesSearch=text==="" || 
                        res.info.name?.toLowerCase().includes(text) ||
                        res.info.cuisines?.some((cuisine)=>cuisine.toLowerCase().includes(text));
    
    const matchesRating=!isRatingFilterOn || res.info.avgRating > 4.3;

    return matchesSearch && matchesRating;
  })


  const toggleRatingFilter=()=>{
    setIsRatingFilterOn((prev)=>!prev);
  }

  return allResList.length==0?<Shimmer /> : (
    <div className="res-container">
      <div className="res-container-head">
        <h1>Restaurants with online food delivery in Delhi</h1>
 
        <div className="sort-by">
          <div className="search-bar">
          
          <input type="text" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
          }}  placeholder="search for restaurants and food"/>
          
          <button disabled>
            <i className="ri-search-2-line"></i>
          </button>
        </div>
            <button className='filter-top-btn' onClick={toggleRatingFilter}><h3>{isRatingFilterOn?"Show All":"Ratings 4.0+"}</h3></button>

        </div>
      </div>

      <div className="res-container-body">
        {filteredList.length===0 ?(
          <h1>No Result Found</h1>
          ) : (
              filteredList.map((restaurant)=>(
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
              )))}
      </div>
    </div>
  );
};

export default Body