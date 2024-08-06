// import Products from "../model/ProductSchema.js";

// export const getAllProducts = async (req, res) => {
//   try {
//     const product = await Products.find({});
//     res.status(200).json({ message: "successfully Get products", product });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong", error });
//   }
// };

// export const addProduct = async (req, res) => {
//   try {
//     const newProduct = new Products({
//       Name: req.body.Name,
//       Description: req.body.Description,
//       Price: req.body.Price,
//       Category_id: req.body.Category_id,
//       Rating: req.body.Rating,
//       Images: req.body.Images,
//       Fabric: req.body.Fabric,
//       Discount: req.body.Discount,
//       Sizes: req.body.Sizes,
//       Type: req.body.Type,
//     });

//     const savedProduct = await newProduct.save();

//     res.status(201).json({
//       message: "Product added successfully!",
//       product: savedProduct,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Error adding product",
//       error: error.message,
//     });
//   }
// };
