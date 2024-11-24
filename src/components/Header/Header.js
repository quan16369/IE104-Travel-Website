import { useState, useEffect } from "react";
import { logoBlack, logoWhite } from "../../images";
import { menuData, menuMediaData } from "../../config/data";
import { Link, useLocation } from "react-router-dom";
import MenuMedia from "./MenuMedia/MenuMedia";
import MenuItem from "./MenuItem";
import Form from "./Form";
import Search from "./Search";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  function handleShowLogin() {
    setShowLogin(!showLogin);
  }
  function handleShowSearch() {
    setShowSearch(!showSearch);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={cx("nav-container")}
      style={{
        backgroundColor: isHomePage && !isScrolled ? "transparent" : "white",
        position: isHomePage ? "fixed" : "sticky",
        boxShadow: isHomePage && !isScrolled ? "none" : "0px 1px 4px #888888",
      }}
    >
      <Link to="/" className={cx("logo")}>
        <img
          src={isHomePage && !isScrolled ? logoWhite : logoBlack}
          alt="logo"
        />
      </Link>
      <ul className={cx("nav-items-container")}>
        {menuData.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item={item}
              isHomePage={isHomePage}
              isScrolled={isScrolled}
            />
          );
        })}
      </ul>
      <div className={cx("nav-media")}>
        {menuMediaData.map((item, index) => (
          <MenuMedia
            key={index}
            item={item}
            isHomePage={isHomePage}
            isScrolled={isScrolled}
            onUser={handleShowLogin}
            onSearch={handleShowSearch}
          />
        ))}
        <Search onShow={handleShowSearch} isShow={showSearch} />
        <Form onShow={handleShowLogin} isShow={showLogin} />
      </div>
    </div>
  );
}

export default Header;
