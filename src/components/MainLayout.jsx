import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li style={{ margin: "0 10px" }}>
            <Link to="/reverse-array">Reverse Array</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="/login">Login Form</Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link to="/register">Register Form</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainLayout;
