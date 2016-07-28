var user = require('../controllers/users.js');
var poll = require('../controllers/polls.js');


module.exports = function (app) {
  app.post('/register', user.register)
  app.post('/login', user.login)
  app.post('/logout', user.logout)
  app.get('/logout', user.logout)
  app.get('/session', user.session)
  app.post('/create', poll.createPoll)


}
