import React from "react";
import styled from "styled-components";
import {
  Toolbar,
  CssBaseline,
  makeStyles,
  Menu,
  Button,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: "10px",
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
    marginLeft: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRadius: "10px",
    "&:hover": {
      color: "#0074c1",
      borderBottom: "1px solid #0074c1",
    },
  },
  button: {
    textDecoration: "none",
    color: "#354721",
    fontSize: "1.2em",
    textTransform: "none",
    marginLeft: "10px",
    "&:hover": {
      color: "#0074c1",
      borderBottom: "1px solid #0074c1",
    },
  },
  activeStyle: {
    backgroundColor: "red",
  },
}));

const AppBar = styled.div`
  position: static;
  background-color: #e6e6e6;
  visibility: hidden;
  height: 0;
  overflow: hidden;

  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    visibility: visible;
    height: 60px;
  }
  @media only screen and (min-width: 1024px) {
    visibility: visible;
    max-height: 70px;
  }
  @media only screen and (min-width: 1600px) {
  }
`;

const Nav = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1100px;
`;

function NavBar() {
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

  return (
    <AppBar>
      <CssBaseline />
      <Toolbar>
        <Nav>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
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
                  <Link to="/GreatKoalaNationalPark" className={classes.link}>
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
                    Intensive Agriculture
                  </Link>
                </MenuItem>
              </Menu>
            </div>
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
          </div>
        </Nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
