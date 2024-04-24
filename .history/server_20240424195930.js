const cors = require("cors");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config({ path: "config.env" });
db();