import React, { useState } from 'react';
import './Header.css';
const Header = () => {
  const [active, setActive] = useState(false);
  const toggleBurger = () => {
    setActive(!active);
  };
  console.log(active);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <img
              className="logo"
              src="https://media.licdn.com/dms/image/D4D12AQHwi4jdRd3fQQ/article-cover_image-shrink_600_2000/0/1685279753620?e=2147483647&v=beta&t=7I-pJ0kDQfNl4w-0Ue8aPyol_X-aWOQlzp18NhTldys"
              alt=""
            />
            <div className={`header__menu ${active ? 'active' : ''}`}>
              <a href="">home</a>
              <a href="">about</a>
              <a href="">contacts</a>
            </div>

            <div
              onClick={toggleBurger}
              className={`burger${active ? 'active' : ''}`}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
