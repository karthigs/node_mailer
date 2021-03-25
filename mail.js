
const nodemailer = require("nodemailer");


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



