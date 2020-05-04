const express = require('express');
const app = express();
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3500;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use('/propertyData', require('./rets'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => console.log(`Listing on port ${port}`))
