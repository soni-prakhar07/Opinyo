import React, { useEffect, useState } from "react";

export default function MyFeedbacks(props) {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch(
          "https://opinyo.vercel.app/api/feedback/my-feedbacks",
          {
            method: "GET",
            credentials: "include",
          }
        );

        console.log("Response Status:", response.status);

        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(`Failed to fetch feedbacks: ${errorMessage}`);
        }

        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
        setError(error.message);
      } finally {
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div
      style={{
        display: props.feedbackDisplay,
        transition: "left 2s ease-in-out",
        backgroundColor: "#FFF0D1",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <br />
        <br />
        <h1 className="display-4 text-center bebas-neue-regular">
          My Feedbacks
        </h1>
        {error && <p className="text-danger">{error}</p>}{" "}
        {feedbacks.length === 0 && <p>No feedback available.</p>}{" "}
        <div className="row">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="col-md-4">
              <div className="card mb-4">
                <div
                  className="card-body josefin-sans-reg"
                  style={{ backgroundColor: "#FFD09B" }}
                >
                  <h5 className="card-title">{feedback.product}</h5>
                  <p className="card-text">Rating: {feedback.rating}</p>
                  <p className="card-text">Review: {feedback.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
