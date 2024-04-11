const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')


const app = express();


/* CONFIGS */

app.use(cors());
dotenv.config();

/* DB */

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env}!`);
})
