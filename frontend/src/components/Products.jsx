import React, { useState } from "react";

export default function Products(props) {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    title: "",
    review: "",
    rating: 0,
  });
  const [userEmail, setUserEmail] = useState("");

  const handleFeedbackClick = (productTitle) => {
    setSelectedProduct({ ...selectedProduct, title: productTitle });
    setShowFeedbackForm(true);
    window.scrollTo(0, document.body.scrollHeight + 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedbackData = {
      product: selectedProduct.title,
      review: selectedProduct.review,
      rating: Number(selectedProduct.rating),
      userId: userEmail,
    };

    console.log("Submitting Feedback:", feedbackData);

    try {
      const response = await fetch("https://opinyo.vercel.app/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) throw new Error("Feedback submission failed");

      const data = await response.json();
      console.log("Feedback submitted: ", data);

      setSelectedProduct({ title: "", review: "", rating: 0 });
      setUserEmail("");
      setShowFeedbackForm(false);
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Feedback submission failed. Please try again later.");
    }
  };

  return (
    <div
      style={{
        display: props.productDisplay,
        transition: "left 2s ease-in-out",
        backgroundColor: "#FFF0D1",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <br />
        <br />
        <h1 className="display-4 text-center bebas-neue-regular">Products</h1>

        <div className="d-flex flex-row bd-highlight flex-wrap mb-3 my-3">
          {/* Product Cards */}
          {[
            "Product 1",
            "Product 2",
            "Product 3",
            "Product 4",
            "Product 5",
            "Product 6",
            "Product 7",
          ].map((product, index) => (
            <div
              key={index}
              className="card mx-3 my-3"
              style={{ width: "18rem" }}
            >
              <img
                className="card-img-top"
                src="https://via.placeholder.com/150"
                alt={product}
              />
              <div className="card-body">
                <h5 className="card-title">{product}</h5>
                <p className="card-text">
                  This is a brief description of {product}. It's a great product
                  that offers fantastic value.
                </p>
                <input
                  className="btn btn-primary"
                  type="button"
                  value="Leave a Feedback!"
                  onClick={() => handleFeedbackClick(product)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Form */}
        {showFeedbackForm && (
          <div className="feedback-form">
            <h2>Leave Your Feedback</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="product" className="form-label">
                  Product
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="product"
                  name="product"
                  value={selectedProduct.title}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label htmlFor="review" className="form-label">
                  Review
                </label>
                <textarea
                  className="form-control"
                  id="review"
                  name="review"
                  value={selectedProduct.review}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                  Rating (out of 5)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  name="rating"
                  value={selectedProduct.rating}
                  onChange={handleInputChange}
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={userEmail}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit Feedback
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setShowFeedbackForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
