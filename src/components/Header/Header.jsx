import "./header.css";

import { Container, Row } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";
import { RiShoppingBagLine, RiHeart3Line, RiMenuFill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

function Header() {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = function () {
    navigate("/cart");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i>
                  <RiHeart3Line />
                </i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i>
                  <RiShoppingBagLine />
                </i>
                {totalQuantity > 0 ? (
                  <span className="badge">{totalQuantity}</span>
                ) : (
                  ""
                )}
              </span>

              <span>
                {/* <img src={user_icon} alt="user icon" /> */}
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={user_icon}
                  alt="user icon"
                />
              </span>
              <div className="mobile__menu" onClick={menuToggle}>
                <span>
                  <RiMenuFill />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
