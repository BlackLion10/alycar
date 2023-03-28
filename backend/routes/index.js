var express = require('express');
var router = express.Router();

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*
module.exports = router;*/

/*var express = require('express');
var router = express.Router();
var autoScelta
var nome
var cognome
var email
var telefono*/



/*NODEMAILER*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benito10101010@gmail.com',
    pass: 'vdxinppaacfqkyzp'
  }
});

router.post('/datiUtente', async function(req, res, next) {

  await transporter.sendMail({
    from: 'benito10101010@gmail.com',
    to: 'benito10101010@gmail.com',
    subject: 'Alycar',
    text: 'Ciao!\nè arrivata questa richiesta:\n'+JSON.stringify(req.body)
  }, function(error, info){
    console.log("mail invio")
    if (error) {
      console.log(error);
      res.sendStatus(404)
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200)
    }
  });
  
});

router.post('/dati', async function(req, res, next) {
  await transporter.sendMail({
    from: 'benito10101010@gmail.com',
    to: 'benito10101010@gmail.com',
    subject: 'Alycar',
    text: 'Ciao!\nè arrivata questa richiesta:\n'+JSON.stringify(req.body)
  }, function(error, info){
    console.log("mail invio")
    if (error) {
      console.log(error);
      res.sendStatus(404)
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200)
    }
  });
  
});
/*
router.post('/emailContatti', async function(req, res, next) {
  console.log(req/*.get(query));
  nomeFurgoni=req.body.nome;
  emailFurgoni=req.body.email;
  //telFurgoni=req.query.telFurgoni;
  messaggioFurgoni=req.body.messaggio;

  //invio mail
  var mailOptions = {
    from: 'benito10101010@gmail.com',
    to: 'info@alycarlongterm.com',
    subject: 'Alycar',
    text: 'Ciao!\nil cliente con questi dati:\nnome: '+nomeFurgoni+'\nemail: '+emailFurgoni+//'\ntelefono: '+telFurgoni+
    '\nha scritto questo messaggio relativo alla richiesta furgoni:\n'+messaggioFurgoni
  };


  await transporter.sendMail(mailOptions, function(error, info){
    console.log("mail invio")
    if (error) {
      console.log(error);
      res.sendStatus(404)
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200)
    }
  });

  

});
*/
module.exports = router;
