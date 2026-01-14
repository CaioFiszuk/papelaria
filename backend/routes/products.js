const router = require('express').Router();
const { 
    createProduct, 
    getAllProducts, 
    getProduct, 
    getProductBCategory, 
    getProductByName, 
    deleteProduct, 
    updateProduct 
} = require('../controllers/products');

const { protect, isAdmin } = require('../middlewares/auth');

router.post('/', protect, createProduct);
router.get('/', protect, isAdmin, getAllProducts);
router.get('/product', protect, getProductByName);
router.get('/category', protect, getProductBCategory);
router.get('/:productId', protect, getProduct);
router.delete('/:productId', protect, isAdmin, deleteProduct);
router.patch('/:productId', protect, isAdmin, updateProduct);

module.exports = router;