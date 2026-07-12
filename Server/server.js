const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const requirementRoutes = require("./routes/requirementRoutes");
dotenv.config();
connectDB();

const app = express();


app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 AI Requirement Analyzer Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});