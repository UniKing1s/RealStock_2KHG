import express from "express";
import http from "http";
import uploadImage from "./routes/imageRoute.js";
const app = express();
const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("hi");
});
app.use("/upload", uploadImage);
server.listen(5000, (req, res) => {
  console.log("server is hosting in http://localhost:5000");
});
