import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RedeemIcon from '@mui/icons-material/Redeem';

import { useSelector } from "react-redux";

const Header = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <>
 <AppBar position="static" style={{ backgroundColor: '#2E4053' }}>
      <Toolbar>
        <RedeemIcon/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={2} >
          
        BUDGET BUDDY
        </Typography>
        <Box>
          <Button color="inherit" href="/" style={{ margin: '0 8px' }}>Home</Button>
          <Button color="inherit" href="/report" style={{ margin: '0 8px' }}>Report</Button>
          <Button color="inherit" href="/income" style={{ margin: '0 8px' }}>Income</Button>
          <Button color="inherit" href="/statement" style={{ margin: '0 8px' }}>Bank Statement</Button>
          <Button color="inherit" href="/about" style={{ margin: '0 8px' }}>About</Button>
        </Box>
      </Toolbar>
    </AppBar>
      {/* <Container fluid className="container-fluid header">
        <h1 className="text-center text-uppercase">
          Budget Buddy
        </h1>
      </Container>
      <Container>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">DashBoar</Link>
            </li>
            <li>
              <Link to="/about">Income</Link>
            </li>
            <li>
              <Link to="/contact">Upload Bank Statements</Link>
            </li>
            <li>
              {loggedIn ? (
                <>
                  Welcome back {user.email}
                  <Link to="/logout">&nbsp; &nbsp; Logout</Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </Container> */}
    </>
  );
};

export default Header;
