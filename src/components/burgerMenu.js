import React from "react";
import { slide as Slide } from "react-burger-menu";
import { makeStyles, Menu, Button, MenuItem } from "@material-ui/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    "&:hover": {
      color: "#0074c1",
      borderBottom: "1px solid #0074c1",
    },
  },
  activeStyle: {
    backgroundColor: "red",
  },
}));

const List = styled.ul`
  list-style-type: none;
`;

const Item = styled.li`
  padding-bottom: 20px;
`;

// const Link = styled.a`
//   color: #354721;
//   text-decoration: none;
//   margin: auto;
//   padding-left: 8px;
// `;

const Hideable = styled.div`
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 1024px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 1600px) {
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
  max-height: 110px;
`;

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "20px",
    left: "20px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "rgb(13, 141, 19)",
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
    background: "rgba(255, 255, 255, 0.9)",
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

function BurgerMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Hideable>
      <Container>
        <Slide styles={styles} pageWrapId={"page-wrap"}>
          <main id="page-wrap">
            <List>
              <Item>
                <Link to="/" className="menu-item" >
                  Home
                </Link>
              </Item>
              <Item>
                <div>
                  <Button className={classes.button} onClick={handleClick}>
                    About Us
                  </Button>
                  <Menu
                    id="about"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Link to="/about" className={classes.link}>
                        About the BEC
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link to="/history" className={classes.link}>
                        Our History
                      </Link>
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
                    id="campaigns"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem onClick={handleClose2}>
                      <Link
                        to="/GreatKoalaNationalPark"
                        className={classes.link}
                      >
                        The Great Koala National Park
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <Link to="/KalangHeadwaters" className={classes.link}>
                        The Kalang Headwaters
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose2}>
                      <Link to="/BlueBerries" className={classes.link}>
                        The Blueberry Campaign
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </Item>
              <Item>
                <div>
                  <Button className={classes.button} onClick={handleClick3}>
                    Support Us
                  </Button>
                  <Menu
                    id="support"
                    anchorEl={anchorEl3}
                    keepMounted
                    open={Boolean(anchorEl3)}
                    onClose={handleClose3}
                  >
                    <MenuItem onClick={handleClose3}>
                      <Link to="/support" className={classes.link}>
                        Donate
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose3}>
                      <Link to="/membership" className={classes.link}>
                        Join the BEC
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </Item>
            </List>
          </main>
        </Slide>
      </Container>
    </Hideable>
  );
}

export default BurgerMenu;
