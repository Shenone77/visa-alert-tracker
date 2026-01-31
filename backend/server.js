const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors({
  origin: "http://localhost:3000"
}));


app.use(express.json());

// ROUTES
const alertRoutes = require("./routes/alerts");
app.use("/alerts", alertRoutes);

// ERROR HANDLER
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
