import React from "react";
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="menu">
        <div className="menu-container">
          <div className="menu-holder">
            <div className="netflixLogo"></div>
          </div>
        </div>
      </header>
    );
  }
}

module.exports = Menu;
