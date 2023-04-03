const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'btcapigenesis@gmail.com',
    pass: process.env.MAIL_PASSWD
  },
});


const sendEmail = async (from, address, subject, message) => {
  try {
    await transporter.sendMail({
      from: `"${from}" <btcapigenesis@gmail.com>`,
      to: address,
      subject: subject,
      text: message,
    });
  } catch (error) {
    if (error) console.log(error.message);
  }
};

module.exports = sendEmail;