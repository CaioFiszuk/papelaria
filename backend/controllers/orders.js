const Order = require('../models/Order');
const Product = require('../models/product');


module.exports.createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }

    let itemsPrice = 0;
    const processedItems = [];

    for (const item of orderItems) {
      const product = await Product.findById(item.product);

      if (!product || !product.isActive) {
        return res.status(404).json({ message: 'Product not found' });
      }

      if (product.countInStock < item.quantity) {
        return res.status(400).json({
          message: `Product ${product.productName} is out of stock`
        });
      }

      const itemTotal = product.price * item.quantity;
      itemsPrice += itemTotal;

      processedItems.push({
        product: product._id,
        name: product.productName,
        image: product.images[0] || '',
        price: product.price,
        quantity: item.quantity
      });
    }

    const shippingPrice = itemsPrice > 200 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;

    const order = new Order({
      user: req.user._id,
      orderItems: processedItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice
    });

    const createdOrder = await order.save();

    for (const item of processedItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { countInStock: -item.quantity }
      });
    }

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating order' });
  }
};