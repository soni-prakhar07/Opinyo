import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MyFeedbacks from "./components/MyFeedbacks";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Products from "./components/Products";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // To track if the user is logged in
  const [showSignup, setShowSignup] = useState(false); // To toggle between login and signup pages

  const onLogin = (userData) => {
    setIsAuthenticated(true);
  };

  const onSignup = (userData) => {
    setIsAuthenticated(true);
  };

  const [productDisplay, setDisplay] = useState("none");
  const [feedbackDisplay, setFeedbackDisplay] = useState("none");
  const [homeDisplay, setHomeDisplay] = useState("block");

  const onProducts = (e) => {
    e.preventDefault();
    if (productDisplay === "none") {
      setDisplay("block");
      setHomeDisplay("none");
      setFeedbackDisplay("none");
    } else {
      setDisplay("none");
      setHomeDisplay("block");
      setFeedbackDisplay("none");
    }
  };

  const onFeedbacks = (e) => {
    e.preventDefault();
    if (feedbackDisplay === "none") {
      setFeedbackDisplay("block");
      setDisplay("none");
      setHomeDisplay("none");
    } else {
      setFeedbackDisplay("none");
      setDisplay("none");
      setHomeDisplay("block");
    }
  };

  const onHome = (e) => {
    e.preventDefault();
    setDisplay("none");
    setFeedbackDisplay("none");
    setHomeDisplay("block");
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar
            onProducts={onProducts}
            onFeedbacks={onFeedbacks}
            onHome={onHome}
          />
          <Home homeDisplay={homeDisplay} />
          <MyFeedbacks feedbackDisplay={feedbackDisplay} />
          <Products productDisplay={productDisplay} />
        </>
      ) : showSignup ? (
        <Signup onSignup={onSignup} setShowSignup={setShowSignup} />
      ) : (
        <Login onLogin={onLogin} setShowSignup={setShowSignup} />
      )}
    </>
  );
}

export default App;
