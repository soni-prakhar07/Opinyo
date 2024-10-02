import React from "react";

export default function Home(props) {
  return (
    <>
      <div
        style={{ display: props.homeDisplay, transition: "display 0.5s ease" }}
      >
        <div
          className="d-flex justify-content-between"
          style={{
            backgroundColor: "#FFF0D1",
            height: "100vh",
          }}
        >
          <div
            className="jumbotron mx-3 my-3 text-center"
            style={{ width: "50vw" }}
          >
            <h1
              className="display-4 pacifico-regular"
              style={{ fontSize: "70px" }}
            >
              <br />
              Welcome to Opinyo, <br />
              Your Review Hub!
            </h1>
            <p
              className="lead josefin-sans-reg my-3"
              style={{
                width: "70%",
                margin: "auto",
              }}
            >
              Explore real experiences from real people. Share your opinions,
              discover ratings, and make smarter choices for the products that
              matter to you.
            </p>
            <hr className="my-4" />
            <p>
              Join a community that values transparency. Your voice makes a
              difference!
            </p>
            <p className="lead">
              <a
                className="btn btn-success btn-lg mx-3"
                href="#https://www.instagram.com/opinyo"
                role="button"
              >
                <i className="fa-brands fa-instagram"> Instagram</i>
              </a>
              <a
                className="btn btn-success btn-lg mx-3"
                href="https://www.discord.com/opinyo"
                role="button"
              >
                <i className="fa-brands fa-discord"> Discord</i>
              </a>
              <a
                className="btn btn-success btn-lg mx-3"
                href="https://www.facebook.com/opinyo"
                role="button"
              >
                <i className="fa-brands fa-facebook"> Facebook</i>
              </a>
            </p>
          </div>

          <div className="ldg-hero-main">
            <img
              src="https://i.ibb.co/VJZZRgP/image-removebg-preview-1.png"
              alt="landing"
              style={{ width: "100%", height: "80vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
