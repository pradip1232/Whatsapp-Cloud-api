const express = require("express");
const app = express();
console.log("Hello")
app.get("/", (req, res) => {
    console.log("Hii");
})

app.get("/Home", (req, res) => {
    res.send("this is home page");
})

app.listen(5000);