import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../images/BECLogo.svg";

function BurgerMenu() {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "50px",
      height: "50px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "black",
    },
    bmBurgerBarsHover: {
      background: "grey",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#354721",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "rgba(255, 255, 255, 0.8)",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "green",
    },
    bmItemList: {
      color: "#354721",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.4)",
    },
  };

  const List = styled.ul`
    list-style-type: none;
  `;
  const Link = styled.a`
    color: #354721;
    text-decoration: none;
  `;

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div>
      {/* <h1>test</h1> */}
      <Menu
        styles={styles}
        pageWrapId={"page-wrap"}
        customBurgerIcon={<img src={LogoImage} />}
      >
        <main id="page-wrap">
          <List>
            <li>
              <Link id="home" className="menu-item" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link id="contact" className="menu-item" href="/contactPage">
                Contact
              </Link>
            </li>
            <li>
              <Link id="blank" className="menu-item" href="/blankPage">
                blankPage
              </Link>
            </li>
          </List>
        </main>
      </Menu>
    </div>
  );
}

export default BurgerMenu;
