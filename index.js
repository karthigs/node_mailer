const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.json());



const distance = (req, res) => {
    var url = "https://maps.googleapis.com/maps/api/distancematrix/json?";
        url += "units=imperial&";
        url += "origins=40.6655101,-73.89188969999998&";
        url += "destinations=40.6905615%2C-73.9976592%7C&";
        url += "key=AIzaSyAuxmmUPDIXgiw84E9AX7bbbdFzkd0xd50";
    axios.get(url)
    .then(function (response) {
        res.json({result:response.data})
        console.log(response);
    })
    .catch((error) => {
    })
};

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'rubanshanthi24@gmail.com', // generated ethereal user
        pass: 'ebjkrrgpurvlaeua', // generated ethereal password
    },
});

// send mail with defined transport objects
let mailOptions = {
    from: 'rubanshanthi24@gmail.com', // sender address
    to: "asathishkumar54@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
};
transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});




app.get('/distance', distance);
app.listen(8000, () => {
    console.log('on board');
});


