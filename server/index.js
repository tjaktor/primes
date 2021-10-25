const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const routes = require("./routes/prime");
app.use(routes);


app.use("/", (req, res) => {
    res.status(404).send("Nothing here!");
});


app.listen(5000);