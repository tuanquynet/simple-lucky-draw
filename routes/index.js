const express = require('express');
const ticketGenerator = require('../utils/ticket-generator');
const mail = require('../utils/mail');

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/request-ticket', async (req, res, next) => {
  const {email, name} = req.body;
  // Return with mock data
  // res.send(ticketGenerator.getNewTicket());

  // Return with random data
  // res.send(ticketGenerator.getRndNewTicket());

  // send email to user
  const mailData = {
    recipients: email,
    subject: 'Your lucky draw ticket',
    message: `Your lucky draw ticket number is  ${ticketGenerator.getRndNewTicket()}`,
  };

  await mail.send(mailData);

  res.send({result: 'created'});
});

/* GET home page. */
router.get('/check-ticket', async (req, res, next) => {
  const {ticketNumber} = req.query;
  const isValid = ticketGenerator.checkValidTicket(ticketNumber);

  res.send({result: isValid ? `${ticketNumber} is valid` : `${ticketNumber} is invalid`});
});

/* GET home page. */
router.get('/check-win-ticket', async (req, res, next) => {
  const {ticketNumber} = req.query;
  const correct = ticketGenerator.checkLuckyNumber(ticketNumber);

  res.send({result: correct ? `${ticketNumber} is lucky number` : `${ticketNumber} is not lucky number`});
});

module.exports = router;
