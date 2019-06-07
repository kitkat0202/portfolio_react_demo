const router = require('express').Router();
const messageController = require('../../controllers/messageController');

// Matches with "/api/message"
router
  .route('/')
  .get(messageController.findAll)
  .post(messageController.create);

// Matches with "/api/message/:id"
router
  .route('/:id')
  .delete(messageController.remove);

module.exports = router;
