const router = require('express').Router();
const messageRoutes = require('./message');

// Article routes
router.use('/saved', messageRoutes);

module.exports = router;
