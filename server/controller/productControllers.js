import Products from "../model/ProductSchema.js";

export const getAllProducts = async (req, res) => {
  try {
    const product = await Products.find({ isDeleted: false });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body.formdata;

  
  try {
    const newProduct = new Products({
      name: product.name,
      description: product.description,
      price: product.sizes[0].price,
      category: product.categoryId,
      rating: product.rating,
      images: product.images,
      fabric: product.fabric,
      discount: product.discount,
      sizes: product.sizes,
      type: product.type,
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

export const editProduct = async (req, res) => {
  const { id } = req.params;  // Get the product ID from the URL
  const updatedData = req.body.formdata;  
  console.log(id,updatedData)
  
  try {
    // Find the product by ID and update it with the new data
    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      {
        name: updatedData.name,
        description: updatedData.description,
        price: updatedData.sizes[0].price,
        category: updatedData.categoryId,
        rating: updatedData.rating,
        images: updatedData.images,
        fabric: updatedData.fabric,
        discount: updatedData.discount,
        sizes: updatedData.sizes,
        type: updatedData.type,
      },
      { new: true }  // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully!",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating product",
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
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "product soft deleted", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product );
  } catch (error) {
    console.error("Error getting Product:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};