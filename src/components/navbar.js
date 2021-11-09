import React from "react";
import styled from "styled-components";
import {
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Menu,
  Button,
  MenuItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoImage from "../images/bec-logo-header.png";

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
    color: "#1787cb",
    fontSize: "1.5em",
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

const AppBar = styled.div`
  position: static;
  background-color: #e6e6e6;
`;

const Nav = styled.div`
  margin-left: auto;
  margin-right: auto;

  max-width: 1100px;
`;

const Logo = styled.img`
  max-height: 50px;
`;

function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <CssBaseline />
      <Toolbar>
        <Logo src={LogoImage} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bellingen Environment Centre
        </Typography>
        <Nav>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <div >
              <div>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  Open Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/contactPage" className={classes.link}>
                      Contact
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/blankPage" className={classes.link}>
                      Blank
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </div>
            </div>
            <Link to="/contactPage" className={classes.link}>
              Contact
            </Link>
            <Link to="/blankPage" className={classes.link}>
              Blank
            </Link>
          </div>
        </Nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
