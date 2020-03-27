const express = require('express');
const app = express();
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3500;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.use('/propertyData', require('./rets'));

const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    secure: true,
    port: 465,
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
    }
})

app.use('/contact', (req, res) => {
    console.log("SENDING")
    const message = {
        from: "spencer@wemakeads.com",
        to: "chris@coltmor.com",
        subject: "Coltmor Realty Form Submission",
        html: `
          <p style="font-size: 24px; color: #4a4a4a; font-weight: 400; margin: 10px 0 5px 0">
            Name:
          </p>
          <h2 style="font-size: 24px; color: #2a2a2a; font-weight: 500; margin: 0 10px 10px 10px ">
            ${req.body.name}
          </h2>
          <p style="font-size: 20px; color: #4a4a4a; font-weight: 400; margin: 10px 0 5px 0">
            Email:
          </p>
          <p style="font-size: 24px; color: #3a3a3a; font-weight: 500; margin: 0 10px 10px 10px ">
            ${req.body.email}
          </p>
          <p style="font-size: 20px; color: #4a4a4a; font-weight: 400; margin: 10px 0 5px 0">
            Phone:
          </p>
          <p style="font-size: 24px; color: #3a3a3a; font-weight: 500; margin: 0 10px 10px 10px ">
            ${req.body.phone}
          </p>
          <p style="font-size: 20px; color: #4a4a4a; font-weight: 400; margin: 10px 0 5px 0">
            Message:
          </p>
          <p style="font-size: 22px; color: #3a3a3a; font-weight: 500; margin: 0 10px 10px 10px ">
            ${req.body.message}
          </p>
        `
    }

    transporter.sendMail(message, (error, info) => {
        if(error) {
            res.status(400).send({msg: 'fail'})
        } else {
            return res.status(200).send({msg: 'success'})
        }
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => console.log(`Listing on port ${port}`))
