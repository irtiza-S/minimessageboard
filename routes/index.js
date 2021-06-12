var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
    messages: messages
  });
});

// GET new message page
router.get('/new', (req, res, next) => {
  res.render('form', {
    titleOfCurrentPage: 'Add a Message',
    websiteTitle: 'Mini Message Board'
  })
})

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })
  res.redirect('/')
})

module.exports = router;
