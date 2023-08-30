require("dotenv").config()
// Express Application setup
const express = require("express");
const cors = require("cors");
require("./config/db.config")
const sequelize = require("./config/db.config");

// Running Express Application 
const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const users = require("./routes/user.routes");
app.use("/api/users", users);

const qna = require("./routes/QnA.routes");
app.use("/api/qna", qna);

const IndebtQ = require("./routes/IndebtQ.routes");
app.use("api/IndebtQ",IndebtQ);

const PORT = 4545;

sequelize
  .sync({
    force: false, logging: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error synchronizing the database:', err);
  });

