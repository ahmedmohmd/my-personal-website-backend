//* Imports
const nodemailer = require("nodemailer");

//* Controllers
const contactController = (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASS,
    },
  });
  // user: "er.ahmed.3301@gmail.com",
  // pass: "eysqbjkboxbjnsgd",

  const mailOptions = {
    from: email,
    to: "er.ahmed.3301@gmail.com",
    subject: `Message from - ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Unexpected Error!");
    } else {
      res.status(200).send("Mesage Recieved");
    }
  });
};

module.exports = contactController;
