import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-name">
          <div className="p__cormorant" style={{ color: "#dcca87" }}>
            {title}
          </div>
          <div className="app__menuItem-dash" />
          <div className="p__cormorant">{price}</div>
        </div>
      </div>

      <div className="app__menuItem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
