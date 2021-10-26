import React, { useState } from "react";
import styled from "styled-components";

import logoImg from "../assets/images/coin-logo.svg";
import { Container, StyledHamburger } from "./styled/containers";

import { Link, NavLink } from "react-router-dom";

import { KeyboardArrowDown } from "@material-ui/icons";
import Accordion from "./accordion";

import sellIcon from "../assets/images/sell-coin.svg";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const servicesNavData = [
    {
      id: 1,
      icon: sellIcon,
      title: "Sell Crypto",
      url: "/sell-crypto",
    },
    {
      id: 2,
      icon: sellIcon,
      title: "Exchange Crypto",
      url: "/exchange",
    },
    {
      id: 3,
      icon: sellIcon,
      title: "Invest In Crypto",
      url: "/invest-crypto",
    },
  ];

  const handleSidebarActive = (e) => {
    if (e.type === "click") {
      setSidebarActive(!sidebarActive);
    }
  };
  return (
    <>
      <StyledNavbar>
        <Link to="/" className="logo">
          <img src={logoImg} alt="" height="100%" width="100%" />{" "}
          <span>LOGO</span>
        </Link>

        <StyledNavigation className="navigation-wrapper">
          <ul className="navlinks">
            <li>
              <NavLink exact to="/about-us">
                About Us
              </NavLink>
            </li>
            <li class="uk-inline">
              <div className="dropdown-nav-wrapper">
                <button className="uk-button uk-button-default" type="button">
                  Services
                </button>
                <KeyboardArrowDown />
              </div>
              <div
                uk-dropdown="mode: click, pos: bottom-justify"
                className="dropdown-container"
                style={{ zIndex: "1000" }}
              >
                <div className="accordion-wrap">
                  <Accordion title={"P2P Trade"} cName={"accordion-icon"}>
                    <ul className="accordion-items">
                      <li>Buy</li>
                      <li>Sell</li>
                      <li>Create Buy Ad</li>
                      <li>Create Sell Ad</li>
                    </ul>
                  </Accordion>
                </div>
                <ul className="nav-items">
                  {servicesNavData.map((item) => {
                    return (
                      <li className="nav-item" key={item.id} imgpath={item.icon}>
                        <NavLink to={item.url}>{item.title}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <NavLink exact to="/market">
                Market
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="locale-login-wrapper">
            <div className="locale">
              <ul>
                <li className="locale-dropdown">EN/USD</li>
                <li>
                  <button className="sign-in">Sign in</button>
                </li>
                <li>
                  <button className="get-started">Get started</button>
                </li>
              </ul>
            </div>
          </div>
        </StyledNavigation>

        <StyledHamburger onClick={handleSidebarActive} menuOpen={sidebarActive}>
          <div className="line"></div>
        </StyledHamburger>
      </StyledNavbar>
    </>
  );
};

export const StyledNavbar = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: solid 1px #80808008;

  @media screen and (max-width: 375px) {
    padding: 36px 20px;
  }

  .logo {
    height: 32px;
    max-height: 32px;
    width: fit-content;
    padding-right: 32px;
    border-right: solid 1px #80808029;
    max-width: max-content;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    @media screen and (max-width: 900px) {
      border-right: solid 1px transparent;
    }

    @media screen and (max-width: 425px) {
      height: 27px;
      width: 27px;
    }

    span {
      font-size: 1.7rem;
      font-weight: 700;
      margin-left: 10px;

      @media screen and (max-width: 425px) {
        font-size: 1.4rem;
        font-weight: 600;
      }
    }
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: calc(100% - 300px);

  @media screen and (max-width: 900px) {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .navlinks {
    display: flex;
    align-items: center;

    li {
      margin-right: 32px;
      color: #777e90;
      cursor: pointer;

      a {
          text-decoration: none;
          color: inherit;
      }

      button {
        border: solid 1px #e6e8ec;
        background: transparent;
        color: inherit;
        font-size: 15px;
        font-family: var(--text-font);
        text-transform: capitalize;
        line-height: 16px;
        border: solid 1px transparent;
        min-height: 48px;
        min-width: 89px;
        padding: 0;
        margin: 0;
        border-radius: 90px;
        cursor: pointer;
      }

      .dropdown-container {
        background: #fcfcfd;
        box-shadow: 0px 16px 50px -11px #1f2f463b;
        border-radius: 12px;
        width: 256px;
        padding: 16px !important;
        left: -70px !important;
        top: 60px !important;

        ::before {
          content: "";
          position: absolute;
          height: 15px;
          width: 15px;
          background-color: var(--background-color);
          border-radius: 6px;
          top: -7px;
          left: 48%;
          transform: rotate(-45deg);
          z-index: 50;
        }

        .nav-items {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;

          .nav-item {
            border-top: solid 1px #e6e8ec;
            padding: 16px 0 12px;
            width: 100%;
            display: flex;

            a {
              text-decoration: none;
              color: inherit;
            }

            ::before {
              content: "";
              height: 20px;
              width: 20px;
              margin-right: 8px;
              position: relative;
              background-image: url(${(props) => props.imgpath});
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }

  .locale {
    ul {
      li {
        font-weight: 700;
        cursor: pointer;

        button {
          font-size: 14px;
          font-family: var(--text-font);
          font-weight: 700;
          line-height: 16px;
          border: solid 2px transparent;
          min-height: 48px;
          min-width: 89px;
          max-width: 150px;
          padding: 12px 18px;
          border-radius: 90px;
          margin-right: 8px;
          cursor: pointer;
          transition: all .3s cubic-bezier(0.42, 0.01, 0, 1.04);
        }

        .sign-in {
          border: solid 2px #e6e8ec;
          background: transparent;
          color: #030303;
          :hover {
            transition: all .3s cubic-bezier(0.42, 0.01, 0, 1.04);
            color: var(--primary-color);
            background-color: transparent;
            border: solid 2px var(--primary-color);
          }
        }
        .get-started {
          border: solid 2px transparent;
          background: #f1a801;
          color: #fafafa;

          :hover {
            transition: all .5s cubic-bezier(0.42, 0.01, 0, 1.04);
            color: var(--primary-color);
            background-color: var(--background-color);
            border: solid 2px var(--primary-color);
          }
        }
      }

      .locale-dropdown {
        margin-right: 24px;
      }
    }
  }

  .accordion-wrap {
    background-color: var(--background-color);
    z-index: 100;

    .accordion-items {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: flex-start;
      list-style: none;
      margin: 0 32px;

      li {
        padding: 4px 0;
        margin-bottom: 16px;
      }
    }
  }
`;

export default Navbar;
