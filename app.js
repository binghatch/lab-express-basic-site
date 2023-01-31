const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

// Routing
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/life", (req, res) => {
    res.sendFile(__dirname + "/views/life.html");
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html");
})


// Listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

