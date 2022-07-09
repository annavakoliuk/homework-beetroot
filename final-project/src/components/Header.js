import React from "react";
import logo from "../images/logo.svg";

export default function Header(props) {
  //resets the search and sort inputs to default values (passed to App component and then to Search using props)
  const handleCLick = () => {
    props.changeSearch("");
    props.changeSort("title");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-holder">
          <a href="#" className="logo-link" onClick={handleCLick}>
            <img className="logo" src={logo} alt="Logo with text 'Marvel'" />
          </a>
        </div>
      </div>
    </header>
  );
}
