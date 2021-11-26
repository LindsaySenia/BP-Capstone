const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());






app.listen(6767, () => console.log("We're all 6767, but server is up and at 'em!"))