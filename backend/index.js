const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const authRoutes = require("./routes/auth");
const feedbackRoutes = require("./routes/feedback");

const app = express();

dotenv.config();

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "sessions",
});

// Session configuration
app.use(
  session({
    secret:
      process.env.SESSION_SECRET ||
      "2b8bce48f7f4b27d2a84fe9e45f9f8a2b1c6e34fa97301798b1e0e1e7c7b8bc5f",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// CORS (for frontend requests)
app.use(
  cors({
    origin: "https://opinyo.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

// Authentication routes (e.g., login, signup)
app.use("/api", authRoutes);

// Feedback routes
app.use("/api/feedback", feedbackRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("MongoDB Error", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
