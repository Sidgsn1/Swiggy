import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({resData}) => {
  const {name,cloudinaryImageId,areaName,costForTwo,cuisines,avgRating} =resData?.info; 
  const {slaString}=resData?.info?.sla;

  return (
    <div className="res-card">
      <div className="res-img">
        <div className="res-offer">
          <h1>{costForTwo.toUpperCase()}</h1>
        </div>

        <img
          src={CDN_URL+cloudinaryImageId}
          alt="resimg"
        />
      </div>

      <div className="res-detail">
        <h1>{name}</h1>

        <div className="rating-time">
          <h3 className="res-rating-dot">
            <i className="ri-star-line"></i>
            <span>{avgRating}</span>
            <i className="ri-circle-fill"></i>
          </h3>

          <h3 className="res-time">{slaString}</h3>
        </div>

        <div className="res-cuisine">
          <h3>{cuisines.join(", ")}</h3>
        </div>

        <div className="res-place">
          <h3>{areaName}</h3>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard