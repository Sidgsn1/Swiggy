import React from 'react'

const mylogo = new URL("../assets/urbanBite.jpeg", import.meta.url).href;
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

export default Header