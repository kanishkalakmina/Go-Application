import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./page/Home";
import Blog from "./page/Blog";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Add from "./page/Add";
import Edit from "./page/Edit";
import Delete from "./page/Delete";
import Login from "./page/Login";
import About from "./page/About";
import Contact from "./page/Contact";
import { useEffect } from "react";
import axios from "axios";
import Logout from "./page/Logout";
import Report from "./page/Report";
import Income from "./page/Income";
import Bank from "./page/Bank";

function App() {
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const timestamp = 1000 * 60 * 3 - 5;
    // const timestamp = 10000;

    let interval = setInterval(() => {
      if (token !== null) {
        updateToken();
      }
    }, timestamp);

    return () => {
      clearInterval(interval);
    };
  }, [token]);

  const updateToken = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_AUTH_API}/private/refreshtoken`;

      const response = await axios.get(apiUrl, {
        headers: {
          token: window.localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        const data = await response.data;

        window.localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.log(error);

      window.localStorage.removeItem("token");
    }

  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Report />} />
        <Route path="/report" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/statement" element={<Bank />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
