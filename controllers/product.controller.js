const Products = require('../models/product.model');

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await Products.findById(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(200).json(product);
    // console.log(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await Products.findByIdAndUpdate(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    const checkProductFromDatabase = await Products.findById(id);

    res.status(200).json(checkProductFromDatabase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Products.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    res.status(200).json({ message: 'Deleted Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
