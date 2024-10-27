const express = require("express");
const connectDb = require("./db/connectDb");
const dotenv = require("dotenv").config();
const GoalRoutes=require('./routes/GoalRoutes');
const errorHandler = require("./errorHandler");


const app = express();
app.use(express.json())
const port = process.env.PORT || 8000;

app.use('/api/goals',GoalRoutes)
app.use(errorHandler);
app.listen(port, (req, res) => {
  connectDb();
  console.log(`server running on port ${port}`);
});
