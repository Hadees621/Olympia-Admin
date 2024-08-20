import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const AppWithSidebar = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === "/";

  return (
    <div className="flex">
      {!hideSidebar && <Sidebar />}
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppWithSidebar />
    </Router>
  </React.StrictMode>
);
