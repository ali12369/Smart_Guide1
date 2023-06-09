import React, { Component } from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

import "../Styles/admin.css";

const Admin = (props) => {
  return (
    <div>
    <div className="allAdmin">
      <Header/>
      <div className="all">
        <div className="sidebarJustifier">
          <div className="sidebar">
            <Sidebar/>
          </div>
        </div>
        <div className="content">
          <div>this is the content</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Admin;
