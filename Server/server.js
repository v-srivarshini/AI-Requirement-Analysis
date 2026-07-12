const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
dotenv.config();
const requirementRoutes = require("./routes/requirementRoutes");
const aiRoutes = require("./routes/aiRoutes");
connectDB();

const app = express();


app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/requirements", requirementRoutes);
app.use("/api/ai", aiRoutes);
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🚀 AI Requirement Analyzer Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});