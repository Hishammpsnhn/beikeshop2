import Products from "../model/ProductSchema.js";

export const getAllProducts = async (req, res) => {
  try {
    const product = await Products.find({isDeleted:false});
    res.status(200).json( product );
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const addProduct = async (req, res) => {
    const id = req.params.id;
  try {
    const newProduct = new Products({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category:id,
      rating: req.body.rating,
      images: req.body.images,
      fabric: req.body.fabric,
      discount: req.body.discount,
      sizes: req.body.sizes,
      type: req.body.type,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product added successfully!",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding product",
      error: error.message,
    });
  }
};

export const softDeleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Products.findByIdAndUpdate(
        id, 
        { isDeleted: true }, 
        { new: true }  
      );
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'product soft deleted', product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };