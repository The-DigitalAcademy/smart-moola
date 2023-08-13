// Express Application setup
const express = require("express");
const cors = require("cors");
require("./config/db.config")
const sequelize = require("./config/db.config");

// import qnaRoutes from "./routes/QnA.routes"




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

const PORT = 4545;

app.get('/', (req, res) => {
  res.json({"name": "Smart Moola"})
})

sequelize
.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`);
  });
})
.catch((err) => {
  console.error('Error synchronizing the database:', err);
});

const { getMeaningOfWord } = require('./controllers/ai.controller');
app.post('/api/meaning', getMeaningOfWord);
