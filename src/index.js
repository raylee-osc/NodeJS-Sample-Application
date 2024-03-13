const express = require("express");

const app = express();

const PORT = 3200;

app.get("/", (req, res) => {
    res.send(`Hello World! & Current Request URL : ${req.url}`);
});

app.listen(PORT, () => {
    console.log(`ExpressJS Server Running at ${PORT}`);
});
