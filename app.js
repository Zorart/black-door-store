const express = require("express");
const app = express();
const path = require("path");
//const port = process.env.PORT || 3000;
//const pathHtml = path.resolve(__dirname, "./views")

app.listen(3000, () => {
    console.log("Nada que hacer, necesitamos plata")
})

app.get("/", function(req, res) {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})