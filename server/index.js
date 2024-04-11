const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');

const app = express();

/* CONFIGS */

app.use(cors());
dotenv.config();

/* DB */

mongoose.connect(process.env.MONGO_URI)
.then(
    console.log("DB Connected!")
)
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
})
