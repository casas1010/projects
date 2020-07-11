const twilio = require('twilio');

const accountSid = 'AC05a8beb9db592f4b516f6a8264510667';
const authToken = '136964166f863500de9cf6def751b670';

module.exports = new twilio.Twilio(accountSid, authToken);
