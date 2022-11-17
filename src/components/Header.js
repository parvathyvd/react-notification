import React from "react";

const Header = ({ setRead }) => {
  return (
    <header>
      <h1>
        Notifications <span className="badge">3</span>
      </h1>
      <p className="mark" onClick={() => setRead(true)}>
        {" "}
        Mark all as read
      </p>
    </header>
  );
};

export default Header;
