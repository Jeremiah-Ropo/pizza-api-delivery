const express = require("express");
const mongoose = require("mongoose")
const dotenv = require('dotenv')

const app = express();

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Port ${PORT} is connected` )
})