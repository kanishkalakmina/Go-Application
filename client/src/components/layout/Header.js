import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);

  return (
    <>
      <Container fluid className="container-fluid header">
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
              <Link to="/">DashBoard</Link>
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
      </Container>
    </>
  );
};

export default Header;
