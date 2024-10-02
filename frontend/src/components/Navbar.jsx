import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark text-light ">
        <div className="container-fluid">
          <a href="/">
            <img
              src="https://i.ibb.co/fDgJ0yW/Screenshot-2024-09-28-233621-removebg-preview.png"
              alt="Opinyo"
              width="200"
              height="70"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  aria-current="page"
                  onClick={props.onHome}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={props.onFeedbacks}>
                  My Feedbacks
                </button>
              </li>

              <li className="nav-item">
                <button className="nav-link" onClick={props.onProducts}>
                  Products
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
