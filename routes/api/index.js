const router = require('express').Router();
const messageRoutes = require('./message');

// Article routes
router.use('/message', messageRoutes);

module.exports = router;
