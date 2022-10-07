import React from "react";
import { BsSearch } from "react-icons/bs";

function Nav() {
  return (
    <nav>
      <div className="nav-head">
        <h1>Hekto</h1>
      </div>
      <div className="nav-items">
        <ul className="flex flex-space-between">
          <li className="nav-pills">Home</li>
          <li className="nav-pills">Pages</li>
          <li className="nav-pills">Products</li>
          <li className="nav-pills">Blog</li>
          <li className="nav-pills">Shop</li>
          <li className="nav-pills">Contact</li>
        </ul>
      </div>
      <div className="search-container">
        <input type="text" />
        <button>
          <BsSearch />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
