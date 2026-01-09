const router = require('express').Router();
const { createProduct, getAllProducts, getProduct, getProductBCategory, getProductByName, deleteProduct, updateProduct } = require('../controllers/products');

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/product', getProductByName);
router.get('/category', getProductBCategory);
router.get('/:productId', getProduct);
router.delete('/:productId', deleteProduct);
router.patch('/:productId', updateProduct);

module.exports = router;