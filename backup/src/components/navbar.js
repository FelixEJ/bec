import React from "react";
import styled from "styled-components";
import breakpoints from "./breakpoints";
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

  @media only screen and ${breakpoints.device.md} {
    visibility: visible;
    height: 60px;
  }
  @media only screen and ${breakpoints.device.lg} {
    visibility: visible;
    max-height: 70px;
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
                    About BEC
                  </Link>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                  <Link to="/support" className={classes.link}>
                    Our Community
                  </Link>
                </MenuItem> */}
                <MenuItem onClick={handleClose}>
                  <Link to="/history" className={classes.link}>
                    Our History
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/loft" className={classes.link}>
                    The Loft (for hire)
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
                  <Link to="/gknp" className={classes.link}>
                    The Great Koala National Park
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link to="/kalang" className={classes.link}>
                    The Kalang Headwaters
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link to="/blueberry" className={classes.link}>
                    The Blueberry Campaign
                  </Link>
                </MenuItem>
              </Menu>
            </div>            
            <Link to="/support" className={classes.link}>
              Support Us
            </Link>
            {/* <Link to="/community" className={classes.link}>
              Community
            </Link> */}
            {/* <Link to="/contact" className={classes.link}>
              Contact
            </Link> */}
          </div>
        </Nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
