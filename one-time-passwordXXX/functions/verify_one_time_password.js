const admin = require('firebase-admin'); // gives access to data

module.exports = function(req, res) {

  //check for phone and code
  if (!req.body.phone || !req.body.code) { 
    return res.status(422).send({ error: 'Phone and code must be provided'});
  }

  const phone = String(req.body.phone).replace(/[^\d]/g, ''); // clean the phone string
  const code = parseInt(req.body.code); // clean the phone number

  admin.auth().getUser(phone)                                 // get user by phone
    .then(() => {                                             // if we find the user, then do the following query
      const ref = admin.database().ref('users/' + phone);     // (1)
      ref.on('value', snapshot => {
        ref.off();
        const user = snapshot.val();

        if (user.code !== code || !user.codeValid) {          // check if the code matches and it is valid
          return res.status(422).send({ error: 'Code not valid' });
        }

        ref.update({ codeValid: false });                     // make the used code invalid
        admin.auth().createCustomToken(phone)                 // generate tken
          .then(token => res.send({ token: token }));         // send token to user
      });
    })
    .catch((err) => res.status(422).send({ error: err }))     // if we dont find the user
}


// (1)  admin.database(): allows you to look at the database
//      admin.database().ref('users/' + phone): add the phone number to the database
//      ref.on('value', snapshot => {}: grab a snapshot of the users information