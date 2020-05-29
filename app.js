const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

const indexRouter = require("./routes/index");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} receieved to ${req.url}`);
  next();
});

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
