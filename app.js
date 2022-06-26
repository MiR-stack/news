const express = require("express");
const router = require("./router");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('views'))

app.use(router)

app.get('/test',(_req,res) =>{
    res.render('testing/index')
})

app.use((_req, res) => {
  res.send("page note found");
});

module.exports = app;
