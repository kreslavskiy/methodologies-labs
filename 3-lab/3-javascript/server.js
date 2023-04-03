const express = require('express');
const sendEmail = require('./mailer');

const app = express();
const jsonParser = express.json();


app.post('/send', jsonParser, async (req, res) => {
  if (!req.body) return res.sendStatus(400);
  await sendEmail(req.body.from, req.body.address, req.body.subject, req.body.message);
  res.sendStatus(200);
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});