import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = /* process.env.PORT ||  */ 8000;

import routes from "./routes/api.js";

//Database connection

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS policy handler
app.use(cors());

//Setting /api as a strating route
app.use("/", routes);

/* app.get("/", (req, res) => {
  res.send("APP IS RUNNING");
}); */

app.listen(PORT, () => {
  console.log("listening yo on port: " + PORT);
});
