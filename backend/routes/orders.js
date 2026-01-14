const router = require('express').Router();
const { createOrder, getAllOrders, getMyOrders, getOrderById } = require('../controllers/orders');

const { protect, isAdmin } = require('../middlewares/auth');

router.post('/', protect, createOrder);
router.get('/', protect, getAllOrders);
router.get('/my', protect, getMyOrders);
router.get('/:id', protect, getOrderById);

module.exports = router;