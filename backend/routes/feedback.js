const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

const checkAuth = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// POST route to submit feedback
router.post("/", async (req, res) => {
  const { product, review, rating, userId } = req.body;

  try {
    const newFeedback = new Feedback({
      product,
      review,
      rating,
      userId,
    });

    const feedback = await newFeedback.save();
    res.json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// GET route to retrieve feedback for the logged-in user
router.get("/my-feedbacks", checkAuth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ userId: req.session.userId });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks" });
  }
});

module.exports = router;
