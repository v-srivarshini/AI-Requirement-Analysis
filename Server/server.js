const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
// Load Environment Variables
dotenv.config();

// Route Imports
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
const aiRoutes = require("./routes/aiRoutes");
const pdfRoutes = require("./routes/pdfService");

// Middleware
const { errorHandler } = require("./middleware/errorMiddleware");



// Connect Database
connectDB();

const app = express();

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-requirement-analysis.vercel.app", // Replace with your actual frontend URL after deployment
];

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Body Parser
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 AI Requirement Analyzer Backend is Running!");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/pdf", pdfRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});