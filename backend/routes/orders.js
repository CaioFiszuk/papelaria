const router = require('express').Router();
const { createOrder } = require('../controllers/orders');

const { protect, isAdmin } = require('../middlewares/auth');

router.post('/', protect, createOrder);

module.exports = router;