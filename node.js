var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'rubanshanthi24@gmail.com',
           pass: 'ebjkrrgpurvlaeua'
       }
   });
   const mailOptions = {
    from: 'rubanshanthi24@gmail.com', // sender address
    to: 'asathishkumar54@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };
transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
 