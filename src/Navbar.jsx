import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faMagnifyingGlass,
  faEnvelope,
  faBell,
  faDownload,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css"

function Navbar({onMenuClick}) {

  

  const [searchText, setSearchText] = useState("");

  return (
    <nav className="navbar">

      <div className="nav-logo">

        <span className="logo-icon"><FontAwesomeIcon icon={faLayerGroup}/></span>

        <span className="logo-name"> DORA</span>

      </div>

      <button className="menu-button" aria-label="Togglesidebar" onClick={onMenuClick}>

        <FontAwesomeIcon icon={faBars} />

      </button>

      <div className="breadcrump">

        <span>Overview</span>
        <span className="breadcrump-seperetor">/</span>
        <strong>Dashboard</strong>

      </div>

      <div className="search-box">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

        <input type="text"
          placeholder="Seach employees document..."
          value={searchText}
          aria-label="Seach employees document..."
          onChange={(event) => setSearchText(event.target.value)}
        />

        <span className="shortcut">Ctrl K</span>
      </div>

      <div className="navbar-actions">

        <button className="icon-button" type="button" aria-label="Messages">

          <FontAwesomeIcon icon={faEnvelope} />

        </button>

        <button className="icon-button" type="button"
          aria-label="Notifications">

          <FontAwesomeIcon icon={faBell} />
           <span className="notification-dot"></span>

        </button>

        <button className="export-button" type="button">

          <FontAwesomeIcon icon={faDownload} />
          <span>Export Data</span>

        </button>

      </div>
    </nav>

  );
}

export default Navbar;