var express = require('express');
var router = express.Router();
const Publisher = require('../middlewares/producers');
/* GET users listing. */
router.get('/', function(req, res, next) {
  Publisher.sendMessage("Nova Mensagem");
  Publisher.getQueueSize();
  res.send('respond with a resource');
});

module.exports = router;
