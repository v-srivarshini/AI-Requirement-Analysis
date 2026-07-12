const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend.vercel.app" // Replace with your actual Vercel URL later
];
const cors = require("cors");
const app = express();
const aiRoutes = require("./routes/aiRoutes");
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));



app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/ai", aiRoutes);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 AI Requirement Analyzer Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});