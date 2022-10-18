import React from "react";
import { slide as Slide } from "react-burger-menu";
import { makeStyles, Menu, Button, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import breakpoints from "./breakpoints";
import LogoImage from "../images/Logo_Text.png";
import Panorama from "../images/pano.png";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#354721",
    fontSize: "1.2em",
    textAlign: "center",
    marginTop: "10px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#0074c1",
      borderBottom: "1px solid #0074c1",
    },
  },
  button: {
    textDecoration: "none",
    color: "#354721",
    fontSize: "1.0em",
    textTransform: "none",
    paddingTop: "0px",
    paddingBottom: "0px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#0074c1",
      borderBottom: "1px solid #0074c1",
    },
  },
  activeStyle: {
    backgroundColor: "red",
  },
}));

function BurgerMenu() {
  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "3vh",
      height: "3vh",
      left: "3vh",
      top: "3vh",
    },
    bmBurgerBars: {
      background: "white",
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

  const Item = styled.li`
    padding-bottom: 20px;
  `;

  const Link = styled.a`
    color: #354721;
    text-decoration: none;
    margin: auto;
    padding-left: 50px;
  `;

  const ButtonLink = styled.a`
    color: #354721;
    text-decoration: none;
    margin: auto;
  `;

  const LogoLink = styled.a`
    color: #354721;
    text-decoration: none;
    margin: auto;
  `;

  const Logo = styled.img`
    height: 10vh;
    max-height: 110px;
    margin: auto;
  `;

  const Hideable = styled.div`
    @media only screen and ${breakpoints.device.md} {
      visibility: hidden;
    }
    @media only screen and ${breakpoints.device.lg} {
      visibility: hidden;
    }
  `;

  const Container = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 12vh;
    max-height: 110px;

    background-image: url(${Panorama});
    background-position: center center;
  `;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div>
      <Hideable>
        <Slide styles={styles} pageWrapId={"page-wrap"}>
          <main id="page-wrap">
            <List>
              <Item>
                <Link id="home" className="menu-item" href="/">
                  Home
                </Link>
              </Item>
              <Item>
                <div>
                  <Button className={classes.button} onClick={handleClick}>
                    About Us
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <ButtonLink
                        href="/aboutPage"
                        className={classes.link}
                      >
                        About BEC
                      </ButtonLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ButtonLink href="/supportPage" className={classes.link}>
                        Our Community
                      </ButtonLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ButtonLink href="/historyPage" className={classes.link}>
                        Our History
                      </ButtonLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ButtonLink href="/loftPage" className={classes.link}>
                        The Loft (for hire)
                      </ButtonLink>
                    </MenuItem>
                  </Menu>
                </div>
              </Item>
              <Item>
                <div>
                  <Button className={classes.button} onClick={handleClick2}>
                    Campaigns
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem onClick={handleClose2}>
                      <ButtonLink href="/gknpPage" className={classes.link}>
                        The Great Koala National Park
                      </ButtonLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <ButtonLink href="/kalangPage" className={classes.link}>
                        The Kalang Headwaters
                      </ButtonLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <ButtonLink
                        href="/blueberryPage"
                        className={classes.link}
                      >
                        The Blueberry Campaign
                      </ButtonLink>
                    </MenuItem>
                  </Menu>
                </div>
              </Item>
              <Item>
                <Link id="help" className="menu-item" href="/helpPage">
                  What can I do?
                </Link>
              </Item>
              <Item>
                <Link
                  id="community"
                  className="menu-item"
                  href="/communityPage"
                >
                  Community
                </Link>
              </Item>
              <Item>
                <Link id="contact" className="menu-item" href="/contactPage">
                  Contact
                </Link>
              </Item>
            </List>
          </main>
        </Slide>
      </Hideable>
      <Container>
        <LogoLink href="/">
          <Logo src={LogoImage} alt="Bellingen Environment Centre Logo"></Logo>
        </LogoLink>
      </Container>
    </div>
  );
}

export default BurgerMenu;
