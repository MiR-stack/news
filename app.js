const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const pageRouter = require("./router/pages.router");
const app = express();
const authRouter = require("./router/auth.router");
const cors = require("cors");
const userRouter = require('./router/user.router')

app.set("view engine", "ejs");
app.use(
  cors(),
  express.static("views"),
  express.urlencoded({ extended: false }),
  express.json(),
  morgan(),
  cookieParser()
);

app.use("/user/auth", authRouter);
app.use(pageRouter);
app.use('/user',userRouter)



app.get("/test", (_req, res) => {
  res.render("testing/index");
});

app.use((_req, res) => {
  res.send("page note found");
});

module.exports = app;
