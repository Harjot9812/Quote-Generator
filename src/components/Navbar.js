import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark bg-light justify-content-between">
        <a class="navbar-brand">Quotes Generator</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
}
