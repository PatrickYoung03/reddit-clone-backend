const express = require("express");
const app = express();
const PORT = 5000;

const indexRouter = require("./routes/index");
app.use(express.json());

app.use("/", indexRouter);

app.use((req, res, next) => {
  console.log(`${req.method} receieved to ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
