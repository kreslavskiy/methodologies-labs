const express = require('express');
const sendEmail = require('./mailer');

const app = express();
const jsonParser = express.json();


app.post('/send', jsonParser, async (req, res) => {
  console.log(req.body);
  await sendEmail(req.body.from, req.body.address, req.body.subject, req.body.message);
  res.send('ok');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});