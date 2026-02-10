const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");

let authRoutes;
try {
  authRoutes = require("./routes/authRoutes");
  console.log("Auth routes loaded successfully");
} catch (error) {
  console.error("Error loading auth routes:", error);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/blogs", blogRoutes);
if (authRoutes) {
  app.use("/api/auth", authRoutes);
  console.log("Auth routes registered at /api/auth");
}

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
