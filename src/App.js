import React from 'react'
import ReactDOM from 'react-dom/client'

const mylogo = new URL("./assets/urbanBite.jpeg", import.meta.url).href;
const resObj = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1196923",
      name: "IGP Cakes",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/2/13d7f71b-4b71-4ed7-bf3d-38216ebbde09_1196923.JPG",
      locality: "Karol Bagh",
      areaName: "Karol Bagh",
      costForTwo: "₹299 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.4,
      parentId: "392350",
      avgRatingString: "4.4",
      totalRatingsString: "192",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-03-06 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={mylogo} alt="logo" />
        {console.log(mylogo)}
      </div>

      <div className="nav-items">
        <div className="search-bar">
          <input
            type="text"
            placeholder="search for restaurants and food"
          />
          <a href="">
            <i className="ri-search-2-line"></i>
          </a>
        </div>

        <div className="nav-btn">
          <a href="">
            <i className="ri-user-3-fill"></i> Sign In
          </a>
          <a href="">
            <i className="ri-shopping-bag-line"></i> Cart
          </a>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const resName = props.resData[0].info.name;

  return (
    <div className="res-card">
      <div className="res-img">
        <div className="res-offer">
          <h1>50% OFF</h1>
        </div>

        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/aaf24c98-f499-4df2-8e9b-1820c445be19_804724.JPG"
          alt="resimg"
        />
      </div>

      <div className="res-detail">
        <h1>{resName}</h1>

        <div className="rating-time">
          <h3 className="res-rating-dot">
            <i className="ri-star-line"></i>
            <span>4.4</span>
            <i className="ri-circle-fill"></i>
          </h3>

          <h3 className="res-time">50-60 mins</h3>
        </div>

        <div className="res-cuisine">
          <h3>Burgers, Fast Food, Rolls & Wraps</h3>
        </div>

        <div className="res-place">
          <h3>Chandni Chowk</h3>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="res-container">
      <div className="res-container-head">
        <h1>Restaurants with online food delivery in Delhi</h1>
        <div className="sort-by">Sort By</div>
      </div>

      <div className="res-container-body">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root=ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />)