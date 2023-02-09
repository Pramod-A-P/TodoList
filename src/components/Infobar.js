import React from "react";
import "./infobar.css";

function Infobar() {
  return (
    <div className="informationbar">
      <div className="information_symbols">
        <div>
          <i class="bi bi-list"></i>
        </div>
        <div>
          <i class="bi bi-calendar3"></i>
        </div>
      </div>

      <div className="info">
        <h2>
          {new Date().toLocaleDateString("en-us", { month: "long" })}{" "}
          {new Date().getFullYear()}
        </h2>
        <h3>
          {new Date().toLocaleDateString("en-us", { weekday: "long" })}{" "}
          {new Date().getDate()}
        </h3>
      </div>
    </div>
  );
}

export default Infobar;
